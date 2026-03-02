import { useState, useEffect, useRef } from 'react';
import { EventList } from './components/EventList';
import { CalendarView } from './components/CalendarView';
import { Header } from './components/Header';
import { AddEventForm } from './components/AddEventForm';
import { NotFoundPage } from './components/NotFoundPage';
import { projectId, publicAnonKey } from './utils/supabase/info';
import { Plus } from 'lucide-react';
import errorImage from 'figma:asset/db9decd47b4e7ebd53bdee4f39a5e4e662b73128.png';
import faviconImage from 'figma:asset/d544b541e3d7a2494f5673b016cfc3a842a7f22d.png';
import defaultEventImage from 'figma:asset/bbef7db76f3553555c686d773d458b288255fc93.png';

import { AboutPage5 } from './components/AboutPage5';
import { Footer } from './components/Footer';
import { CursorFollower } from './components/CursorFollower';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { NewsletterModal } from './components/NewsletterModal';

export type EventType = 'social' | 'race';
export type ViewMode = 'list' | 'calendar';
export type ColorTheme = 'blue' | 'purple' | 'burgundy' | 'teal' | 'green';
export type FilterType = 'all' | 'social' | 'race' | 'past';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  organizer: string;
  link: string;
  description: string;
  status?: string;
  city?: string;
  image_path?: string;
  display_name?: string;
  handle?: string;
  profile_url?: string;
}

function App() {
  const [selectedType, setSelectedType] = useState<FilterType>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('calendar');
  const [isMobile, setIsMobile] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddEventFormOpen, setIsAddEventFormOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  
  // Auto-theme: Initialize based on system preference
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });
  
  // Track if user has manually overridden the theme in this session
  const [userOverrideTheme, setUserOverrideTheme] = useState(false);
  
  const [show404, setShow404] = useState(false);
  const [showAbout5, setShowAbout5] = useState(false);
  
  // Cursor follower state
  const [hoveredEventState, setHoveredEventState] = useState<{ image: string | null; side: 'left' | 'right' }>({
    image: null,
    side: 'right'
  });

  // Header scroll behavior
  const mainRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Initialize with a random color theme on each page load
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    const themes: ColorTheme[] = ['blue', 'purple', 'burgundy', 'teal', 'green'];
    return themes[Math.floor(Math.random() * themes.length)];
  });

  const handleEventHover = (image: string | null, side: 'left' | 'right' = 'right') => {
    setHoveredEventState({ image, side });
  };
  
  // Auto-theme: Listen for system preference changes
  useEffect(() => {
    if (userOverrideTheme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial value to match system if not overridden (handles case where system changed before hydrate/render)
    // Actually, initial state already handles this. We just need to listen for changes.
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (!userOverrideTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        console.log(`💻 System theme changed: Switching to ${newTheme} mode`);
        setTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [userOverrideTheme]);

  // Handle manual theme change
  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    console.log(`👤 User manually changed theme to: ${newTheme}`);
    setTheme(newTheme);
    setUserOverrideTheme(true); // Disable auto-theme for this session
  };

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark', 'color-purple', 'color-burgundy', 'color-teal', 'color-green');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    }
    if (colorTheme !== 'blue') {
      document.documentElement.classList.add(`color-${colorTheme}`);
    }
  }, [theme, colorTheme]);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set favicon
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconImage;
  }, []);

  // Handle scroll for header visibility
  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const handleScroll = () => {
      const currentScrollTop = mainElement.scrollTop;
      const scrollDelta = currentScrollTop - lastScrollTop.current;
      
      // Only apply in list view or mobile (which forces list view)
      const isListView = viewMode === 'list' || isMobile;
      
      if (isListView) {
        // If scrolling down significantly and not at the top
        if (scrollDelta > 5 && currentScrollTop > 20) {
          setIsHeaderVisible(false);
        } 
        // If scrolling up significantly
        else if (scrollDelta < -5) {
          setIsHeaderVisible(true);
        }
        // Always show if at top
        else if (currentScrollTop < 20) {
           setIsHeaderVisible(true);
        }
      } else {
        setIsHeaderVisible(true);
      }
      
      lastScrollTop.current = currentScrollTop;
    };

    mainElement.addEventListener('scroll', handleScroll);
    return () => mainElement.removeEventListener('scroll', handleScroll);
  }, [viewMode, isMobile]);

// Fetch events from database
const fetchEvents = async () => {
  try {
    setLoading(true);
    setError(null);

    const url =
      `https://${projectId}.supabase.co/rest/v1/running_event_public` +
      `?select=*` +
      `&status=eq.approved` +
      `&order=event_date.asc`;

    const response = await fetch(url, {
      headers: {
        apikey: publicAnonKey,
        Authorization: `Bearer ${publicAnonKey}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch events: ${response.status} ${errorText}`);
    }

    const rows = await response.json();

    const transformedEvents = (rows ?? []).map((row: any) => {
      const typeValue = String(row.event_type ?? '').toLowerCase();
      const eventType: EventType = typeValue === 'race' ? 'race' : 'social';

      return {
        id: String(row.id),
        title: row.event_title || 'Untitled Event',
        date: row.event_date || new Date().toISOString().split('T')[0],
        time: '12:00 PM',
        location: row.city_name || '',
        type: eventType,
        organizer: row.organizer || row.organizer_name || '',
        link: row.event_link || '#',
        description: row.description || '',
        status: row.status || '',
        city: row.city_name || '',
        image_path: row.image_path || defaultEventImage,
        display_name: row.photographer_display_name || '',
        handle: row.photographer_handle || '',
        profile_url: row.photographer_profile_url || '',
      };
    });

    setEvents(transformedEvents);
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Failed to fetch events');
    setEvents([]);
  } finally {
    setLoading(false);
  }
};



  useEffect(() => {
    fetchEvents();
  }, []);

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    
    // If showing past events, sort from latest to oldest (descending)
    if (selectedType === 'past') {
      return timeB - timeA;
    }
    
    // Otherwise, sort from oldest to latest (ascending)
    return timeA - timeB;
  });

  // Get today's date at start of day for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter events - different logic for list vs calendar view
  const filteredEvents = sortedEvents.filter(event => {
    // Parse date string as YYYY-MM-DD in local timezone to avoid timezone offset issues
    // Using new Date(event.date) defaults to UTC which can cause issues with local today comparison
    const [year, month, day] = event.date.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day);
    eventDate.setHours(0, 0, 0, 0);
    
    // Calendar view: show all events regardless of date or filter
    // Note: On mobile, we force list view, so we should apply list view filtering even if viewMode is 'calendar'
    if (viewMode === 'calendar' && !isMobile) {
      return true;
    }
    
    // List view: apply filters
    // If "past" filter is selected, only show events before today
    if (selectedType === 'past') {
      return eventDate < today;
    }
    
    // For other filters (all, social, race), only show events from today onwards
    if (eventDate < today) {
      return false;
    }
    
    // Filter by event type (social/race) if not "all"
    if (selectedType !== 'all' && event.type !== selectedType) {
      return false;
    }
    
    return true;
  });

  // If showing 404 page, render it instead
  if (show404) {
    return <NotFoundPage onBackToHome={() => setShow404(false)} />;
  }

  // If showing About 5 page
  if (showAbout5) {
    return (
      <div className="h-screen flex flex-col bg-brand-blue">
        <Header 
          viewMode={viewMode} 
          onViewModeChange={(mode) => {
            setViewMode(mode);
            setShowAbout5(false);
          }}
          selectedType={selectedType}
          onTypeChange={(type) => {
            setSelectedType(type);
            setShowAbout5(false);
          }}
          onAddEventClick={() => {
            setIsAddEventFormOpen(true);
            setShowAbout5(false);
          }}
          theme={theme}
          onThemeChange={handleThemeChange}
          colorTheme={colorTheme}
          onColorThemeChange={setColorTheme}
          onView404={() => {
            setShow404(true);
            setShowAbout5(false);
          }}
          onViewAbout5={() => setShowAbout5(true)}
          isVisible={true}
        />
        <main className="flex-1 overflow-auto bg-brand-blue">
          <AboutPage5 
            onBack={() => setShowAbout5(false)}
          />
        </main>
      </div>
    );
  }



  return (
    <div className="h-screen flex flex-col bg-brand-blue">
      <GoogleAnalytics />
      {/* Header transition wrapper: 300ms ease-in-out */}
      <div 
        className="transition-all duration-300 ease-in-out relative z-50"
        style={{ 
          marginTop: isHeaderVisible ? 0 : '-98px',
          opacity: isHeaderVisible ? 1 : 0,
          pointerEvents: isHeaderVisible ? 'auto' : 'none'
        }}
      >
        <Header 
          viewMode={viewMode} 
          onViewModeChange={setViewMode}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          onAddEventClick={() => setIsAddEventFormOpen(true)}
          theme={theme}
          onThemeChange={handleThemeChange}
          colorTheme={colorTheme}
          onColorThemeChange={setColorTheme}
          onView404={() => setShow404(true)}
          onViewAbout5={() => setShowAbout5(true)}
          isVisible={isHeaderVisible}
        />
      </div>
      <main ref={mainRef} className="flex-1 overflow-auto relative z-10">
        {loading ? (
          <div className="py-12 text-center">
            <p className="text-brand-white">Loading events...</p>
          </div>
        ) : error ? (
          <div className="fixed inset-0 top-[60px] flex items-center justify-center bg-brand-blue">
            {/* Background Image */}
            <img 
              src={errorImage} 
              alt="Error"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Content Overlay */}
            <div className={`relative z-10 flex flex-col gap-[32px] items-start justify-center p-[32px] rounded-[0px] ${
              theme === 'dark' ? 'bg-brand-blue text-brand-white' : 'bg-brand-white text-brand-blue'
            }`}>
              <h1 
                className="text-[length:var(--text-h1)] leading-tight tracking-[-1.25px] uppercase"
                style={{ fontFamily: "'Funnel Sans', sans-serif" }}
              >
                OOPS! SOMETHING'S WRONG
              </h1>
              <button
                onClick={() => window.location.reload()}
                className={`transition-colors px-[32px] py-[12px] rounded-[8px] ${
                  theme === 'dark' 
                    ? 'bg-brand-white hover:bg-brand-white/90 text-brand-blue' 
                    : 'bg-brand-blue hover:bg-brand-blue/90 text-brand-white'
                }`}
              >
                <span 
                  className="text-[length:var(--text-p)] font-medium tracking-[-0.3125px]"
                  style={{ fontFamily: "'Funnel Sans', sans-serif" }}
                >
                  Try Again
                </span>
              </button>
            </div>

            {/* Photo Credit - Bottom Right */}
            <div className="absolute bottom-[16px] right-[16px] z-20">
              <p 
                className="text-[length:var(--text-subheading)] leading-[20px] text-brand-white/80"
                style={{ fontFamily: "'Funnel Sans', sans-serif" }}
              >
                <span>Photo by </span>
                <a 
                  className="underline hover:opacity-80 transition-opacity" 
                  href="https://unsplash.com/@purzlbaum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Claudio Schwarz
                </a>
                <span> on </span>
                <a 
                  className="underline hover:opacity-80 transition-opacity" 
                  href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className={`max-w-7xl mx-auto px-[16px] flex flex-col ${viewMode === 'calendar' && !isMobile ? 'h-full' : 'min-h-full'} ${viewMode === 'calendar' ? 'py-0' : 'py-0'}`}>
            <div className={`flex-1 flex flex-col min-h-0 ${viewMode === 'calendar' && !isMobile ? 'h-full' : ''}`}>
              {/* Force list view on mobile, allow both on desktop */}
              {isMobile || viewMode === 'list' ? (
                <EventList 
                  events={filteredEvents} 
                  onEventHover={(image) => handleEventHover(image, 'right')}
                />
              ) : (
                <div className="flex-1 h-full min-h-0 flex flex-col">
                  <CalendarView 
                    events={filteredEvents} 
                    selectedType={selectedType}
                    onEventHover={handleEventHover}
                  />
                </div>
              )}
            </div>
            
            <Footer 
              onAboutClick={() => setShowAbout5(true)}
              onSuggestClick={() => setIsAddEventFormOpen(true)}
              onNewsletterClick={() => setIsNewsletterOpen(true)}
            />
          </div>
        )}
      </main>
      
      {/* Add Event Form Modal */}
      {isAddEventFormOpen && (
        <AddEventForm
          onClose={() => setIsAddEventFormOpen(false)}
          onEventAdded={fetchEvents}
          projectId={projectId}
          publicAnonKey={publicAnonKey}
          onView404={() => {
            setIsAddEventFormOpen(false);
            setShow404(true);
          }}
        />
      )}

      {/* Newsletter Modal */}
      {isNewsletterOpen && (
        <NewsletterModal 
          onClose={() => setIsNewsletterOpen(false)}
        />
      )}
      
      <CursorFollower  
        activeImage={hoveredEventState.image} 
        side={hoveredEventState.side}
      />
    </div>
  );
}

export default App;