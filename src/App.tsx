import { useState, useEffect } from 'react';
import { EventList } from './components/EventList';
import { CalendarView } from './components/CalendarView';
import { Header } from './components/Header';
import { AddEventForm } from './components/AddEventForm';
import { NotFoundPage } from './components/NotFoundPage';
import { projectId, publicAnonKey } from './utils/supabase/info';
import { Plus } from 'lucide-react';

export type EventType = 'social' | 'race';
export type ViewMode = 'list' | 'calendar';
export type ColorTheme = 'blue' | 'purple' | 'burgundy' | 'teal' | 'green';

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
}

function App() {
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('calendar');
  const [isMobile, setIsMobile] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddEventFormOpen, setIsAddEventFormOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [show404, setShow404] = useState(false);
  
  // Initialize with a random color theme on each page load
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    const themes: ColorTheme[] = ['blue', 'purple', 'burgundy', 'teal', 'green'];
    return themes[Math.floor(Math.random() * themes.length)];
  });

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

  // Fetch events from database
  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-36165629/events`;
      console.log('🔵 Fetching events from:', url);
      console.log('🔵 Project ID:', projectId);
      console.log('🔵 Anon Key (first 20 chars):', publicAnonKey.substring(0, 20) + '...');
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      console.log('🔵 Response status:', response.status);
      console.log('🔵 Response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('🔴 Response error text:', errorText);
        throw new Error(`Failed to fetch events: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const data = await response.json();
      console.log('✅ Events fetched from database:', data);
      
      // Map database rows into the shape our UI expects
      // The server already filters by status='approved', but we add client-side check as safeguard
      const transformedEvents = (data.events ?? [])
        .filter((row: any) => {
          // Double-check status on client side as safeguard
          const statusValue = (row.status || '').toLowerCase();
          return statusValue === 'approved';
        })
        .map((row: any) => {
          // Parse event_type - check if it's a string value like 'race' or 'social'
          let eventType: EventType = 'social';
          if (row.event_type) {
            const typeValue = String(row.event_type).toLowerCase();
            eventType = typeValue === 'race' ? 'race' : 'social';
          }

          // ✅ Extract organizer name from joined Organizer table
          const organizerName = row.organizer?.['Organizer Name'] ?? '';
          const organizerLink = row.organizer?.['Org Link'] ?? '';
          
          console.log('Event:', row.event_title, '| Type:', row.event_type, '| Parsed as:', eventType, '| Organizer:', organizerName);

          return {
            id: String(row.id),
            title: row.event_title || 'Untitled Event',
            date: row.event_date || new Date().toISOString().split('T')[0],
            time: '12:00 PM', // Default time since it's not in the table
            location: 'Toronto', // Default location since it's not in the table
            type: eventType,
            organizer: organizerName, // ✅ this is what the UI renders
            link: row.event_link || '#',
            description: row.description || '',
            status: row.status || '',
          };
        });

      setEvents(transformedEvents);
      console.log('Transformed events:', transformedEvents);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch events');
      // Fall back to empty array on error
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Filter events by type only
  const filteredEvents = sortedEvents.filter(event => {
    if (selectedType !== 'all' && event.type !== selectedType) {
      return false;
    }
    return true;
  });

  // If showing 404 page, render it instead
  if (show404) {
    return <NotFoundPage onBackToHome={() => setShow404(false)} />;
  }

  return (
    <div className="h-screen flex flex-col bg-brand-blue">
      <Header 
        viewMode={viewMode} 
        onViewModeChange={setViewMode}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        onAddEventClick={() => setIsAddEventFormOpen(true)}
        theme={theme}
        onThemeChange={setTheme}
        colorTheme={colorTheme}
        onColorThemeChange={setColorTheme}
      />
      <main className="flex-1 overflow-auto">
        <div className={`max-w-6xl mx-auto px-[16px] h-full ${viewMode === 'calendar' ? 'py-0' : 'py-0'}`}>
          {loading ? (
            <div className="py-12 text-center">
              <p className="text-brand-white">Loading events...</p>
            </div>
          ) : error ? (
            <div className="py-12 text-center">
              <p className="text-brand-white/60">Error: {error}</p>
              <p className="text-brand-white/40 mt-2">Check the console for more details</p>
            </div>
          ) : (
            /* Force list view on mobile, allow both on desktop */
            isMobile || viewMode === 'list' ? (
              <EventList events={filteredEvents} />
            ) : (
              <CalendarView events={filteredEvents} selectedType={selectedType} />
            )
          )}
        </div>
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
    </div>
  );
}

export default App;