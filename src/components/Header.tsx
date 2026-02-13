import { Menu, X, Check, SlidersHorizontal, Camera, Info } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import type { ViewMode, EventType, ColorTheme, FilterType } from '../App';
import svgPaths from '../imports/svg-9iu0mrinem';
import dotsThreePaths from '../imports/svg-fvoctxso0y';

// Phosphor Icon Components
function ListDashesIcon({ className, opacity }: { className?: string; opacity?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16">
      <g>
        <path d="M6 4H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
        <path d="M6 8H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
        <path d="M6 12H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
        <path d="M2.5 4H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
        <path d="M2.5 8H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
        <path d="M2.5 12H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
      </g>
    </svg>
  );
}

function CalendarIcon({ className, opacity }: { className?: string; opacity?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16">
      <g>
        <path d={svgPaths.p1bb6cd00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
        <path d="M11 1.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
        <path d="M5 1.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
        <path d="M2.5 5.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
        <path d="M5.5 8L6.5 7.5V11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
        <path d={svgPaths.p2e18e90} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} />
      </g>
    </svg>
  );
}

function BugIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 17 17">
      <g>
        <path d={svgPaths.p371d0900} fill="currentColor" stroke="currentColor" strokeWidth="0.125" />
        <path d={svgPaths.p2e448d00} fill="currentColor" stroke="currentColor" strokeWidth="0.125" />
        <path d="M8.5 8.5V14.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p104ffd80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p6331780} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p1d086a00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p1af30080} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.pb9d8000} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.0625 8.5H15.9375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function SunDimIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 17 17">
      <g>
        <path d="M8.5 2.65625V2.125" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p3d72b780} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.25 4.25L3.71875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.25 12.75L3.71875 13.2812" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.75 4.25L13.2812 3.71875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.75 12.75L13.2812 13.2812" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.65625 8.5H2.125" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 14.3438V14.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.3438 8.5H14.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 17 17">
      <g>
        <path d={svgPaths.p19092e80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 17 17">
      <g>
        <path d={svgPaths.p1ae91d00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p201d6e70} fill="currentColor" stroke="currentColor" strokeWidth="0.125" />
        <path d={svgPaths.p12b93980} fill="currentColor" />
        <path d={svgPaths.p111f2580} fill="currentColor" />
        <path d={svgPaths.p28c72c0} fill="currentColor" />
      </g>
    </svg>
  );
}

function DotsThreeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16">
      <g>
        <path d={dotsThreePaths.p13c14fc0} fill="currentColor" />
        <path d={dotsThreePaths.p30660a00} fill="currentColor" />
        <path d={dotsThreePaths.p1e9c4ff0} fill="currentColor" />
      </g>
    </svg>
  );
}

function ClockCounterClockwiseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 17 17">
      <g>
        <path d={svgPaths.p3fc6f980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.78125 6.90625H2.125V4.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p3fb29500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function ClockClockwiseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 17 17">
      <g>
        <path d={svgPaths.p3fc6f980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.2188 6.90625H14.875V4.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p9c7d260} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function CalendarPlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 17 17">
      <g>
        <path d={svgPaths.p4744200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.6875 1.59375V3.71875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.3125 1.59375V3.71875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.65625 5.84375H14.3438" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.0938 10.0938H6.90625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 8.5V11.6875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function LightbulbFilamentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 17 17">
      <g>
        <path d="M5.84375 15.4062H11.1562" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 13.2812V9.5625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p267fe100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.pda34100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

interface HeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  selectedType: FilterType;
  onTypeChange: (type: FilterType) => void;
  onAddEventClick: () => void;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  colorTheme: ColorTheme;
  onColorThemeChange: (theme: ColorTheme) => void;
  onView404: () => void;
  onViewAbout5: () => void;
  isVisible?: boolean;
}

export function Header({ viewMode, onViewModeChange, selectedType, onTypeChange, onAddEventClick, theme, onThemeChange, colorTheme, onColorThemeChange, onView404, onViewAbout5, isVisible = true }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const handleTypeChange = (type: FilterType) => {
    onTypeChange(type);
    setIsMobileMenuOpen(false);
  };

  const cycleColorTheme = () => {
    const themes: ColorTheme[] = ['blue', 'purple', 'burgundy', 'teal', 'green'];
    const currentIndex = themes.indexOf(colorTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    onColorThemeChange(themes[nextIndex]);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const showPastEvents = selectedType === 'past';

  return (
    <header className="sticky top-0 z-50" style={{ 
      background: 'rgba(254, 254, 254, 0)'
    }}>
      <div className="max-w-7xl mx-auto px-[16px] py-6">
        <div className="flex items-center justify-between h-[50px]">
          {/* Brand Name - Left */}
          <button 
            onClick={() => onViewModeChange('calendar')}
            className="flex flex-col h-[50px] md:w-[359.82px] text-left hover:opacity-80"
          >
            <div className="h-[35.998px] w-full">
              <h1 className="text-[length:var(--text-h1)] font-normal leading-[36px] text-brand-white whitespace-nowrap" style={{ fontFamily: "'Stylish', sans-serif" }}>
                for the shared experience
              </h1>
            </div>
            <div className="h-[14.002px] w-full">
              <p className="text-[length:var(--text-subheading)] font-normal leading-[14px] text-brand-white tracking-[-0.1504px] whitespace-nowrap" style={{ fontFamily: "'Stylish', sans-serif" }}>
                events worth showing up for, see you there
              </p>
            </div>
          </button>

          {/* Hamburger Menu - Mobile Only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden h-[40px] px-[16px] rounded-md flex items-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-white" />
            ) : (
              <Menu className="w-6 h-6 text-brand-white" />
            )}
          </button>

          {/* Right Side Controls - Desktop Only */}
          <div className="hidden md:flex items-center h-[39.994px] gap-[8px]">
            {/* Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-[39.994px] w-[47.999px] rounded-[6px] flex items-center justify-center hover:bg-brand-white/10"
                aria-label="More options"
              >
                <DotsThreeIcon className="w-[15.998px] h-[15.998px] text-brand-white" />
              </button>

              {isDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-52 bg-brand-blue p-[12px] flex flex-col z-50"
                  style={{ 
                    border: theme === 'light' 
                      ? '0.769px solid var(--app-text)' 
                      : '0.769px solid rgba(254, 254, 254, 0.2)' 
                  }}
                >
                  {/* Past Events Toggle - Only show in List view */}
                  {viewMode === 'list' && (
                    <button
                      onClick={() => {
                        onTypeChange(showPastEvents ? 'all' : 'past');
                        setIsDropdownOpen(false);
                      }}
                      className="flex gap-[8px] items-center justify-center py-[6px] w-full hover:bg-brand-white/10 rounded"
                    >
                      {showPastEvents ? (
                        <ClockClockwiseIcon className="w-[17px] h-[17px] text-brand-white" />
                      ) : (
                        <ClockCounterClockwiseIcon className="w-[17px] h-[17px] text-brand-white" />
                      )}
                      <p className="flex-1 text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                        {showPastEvents ? 'Future Events' : 'Past Events'}
                      </p>
                    </button>
                  )}

                  {/* Suggest an Event */}
                  <button
                    onClick={() => {
                      onAddEventClick();
                      setIsDropdownOpen(false);
                    }}
                    className="flex gap-[8px] items-center justify-center py-[6px] w-full hover:bg-brand-white/10 rounded text-[12px]"
                  >
                    <CalendarPlusIcon className="w-[17px] h-[17px] text-brand-white" />
                    <p className="flex-1 text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                      Suggest an Event
                    </p>
                  </button>

                  {/* Event Photo Albums */}
                  <button
                    onClick={() => {
                      window.open('https://runsnaps.notion.site', '_blank', 'noopener,noreferrer');
                      setIsDropdownOpen(false);
                    }}
                    className="flex gap-[8px] items-center justify-center py-[6px] w-full hover:bg-brand-white/10 rounded"
                  >
                    <Camera className="w-[17px] h-[17px] text-brand-white" strokeWidth={1.5} />
                    <p className="flex-1 text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                      Event Photo Albums
                    </p>
                  </button>

                  {/* Change Theme */}
                  <button
                    onClick={() => {
                      cycleColorTheme();
                    }}
                    className="flex gap-[8px] items-center justify-center py-[6px] w-full hover:bg-brand-white/10 rounded"
                  >
                    <PaletteIcon className="w-[17px] h-[17px] text-brand-white" />
                    <p className="flex-1 text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                      Change Theme
                    </p>
                  </button>

                  {/* Light/Dark Mode */}
                  <button
                    onClick={() => {
                      onThemeChange(theme === 'dark' ? 'light' : 'dark');
                    }}
                    className="flex gap-[8px] items-center justify-center py-[6px] w-full hover:bg-brand-white/10 rounded"
                  >
                    {theme === 'dark' ? (
                      <>
                        <SunDimIcon className="w-[17px] h-[17px] text-brand-white" />
                        <p className="flex-1 text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                          Light Mode
                        </p>
                      </>
                    ) : (
                      <>
                        <MoonIcon className="w-[17px] h-[17px] text-brand-white" />
                        <p className="flex-1 text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                          Dark Mode
                        </p>
                      </>
                    )}
                  </button>

                  {/* About */}
                  <button
                    onClick={() => {
                      onViewAbout5();
                      setIsDropdownOpen(false);
                    }}
                    className="flex gap-[8px] items-center justify-center py-[6px] w-full hover:bg-brand-white/10 rounded"
                  >
                    <Info className="w-[17px] h-[17px] text-brand-white" />
                    <p className="flex-1 text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                      About
                    </p>
                  </button>

                  {/* Feedback */}
                  <button
                    className="flex gap-[8px] items-center justify-center py-[6px] w-full hover:bg-brand-white/10 rounded"
                    onClick={() => window.open('https://forms.gle/GCyMvrPiiyXrToVQ8', '_blank', 'noopener,noreferrer')}
                  >
                    <LightbulbFilamentIcon className="w-[17px] h-[17px] text-brand-white" />
                    <p className="flex-1 text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                      Feedback
                    </p>
                  </button>

                  {/* Debugging */}
                  <button
                    onClick={() => {
                      onView404();
                      setIsDropdownOpen(false);
                    }}
                    className="flex gap-[8px] items-center justify-center py-[6px] w-full hover:bg-brand-white/10 rounded"
                  >
                    <BugIcon className="w-[17px] h-[17px] text-brand-white" />
                    <p className="flex-1 text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                      Debugging
                    </p>
                  </button>
                </div>
              )}
            </div>

            {/* Filter Menu */}
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`h-[39.994px] w-[47.999px] rounded-[6px] flex items-center justify-center ${
                  isFilterOpen ? 'bg-brand-white/20' : 'hover:bg-brand-white/10'
                }`}
                aria-label="Filter events"
              >
                <SlidersHorizontal className="w-[15.998px] h-[15.998px] text-brand-white" />
              </button>

              {isFilterOpen && (
                <div 
                  className="absolute right-0 mt-2 w-[181px] bg-brand-blue p-[12px] flex flex-col z-50"
                  style={{ 
                    border: theme === 'light' 
                      ? '0.769px solid var(--app-text)' 
                      : '0.769px solid rgba(254, 254, 254, 0.2)' 
                  }}
                >
                  <button
                    onClick={() => {
                      onTypeChange('social');
                      setIsFilterOpen(false);
                    }}
                    className="flex items-center justify-between py-[6px] w-full hover:bg-brand-white/10 rounded px-2"
                  >
                    <span className="text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                      Social Events
                    </span>
                    {selectedType === 'social' && <Check className="w-4 h-4 text-brand-white" />}
                  </button>
                  
                  <button
                    onClick={() => {
                      onTypeChange('race');
                      setIsFilterOpen(false);
                    }}
                    className="flex items-center justify-between py-[6px] w-full hover:bg-brand-white/10 rounded px-2"
                  >
                    <span className="text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                      Race
                    </span>
                    {selectedType === 'race' && <Check className="w-4 h-4 text-brand-white" />}
                  </button>
                  
                  <button
                    onClick={() => {
                      onTypeChange('all');
                      setIsFilterOpen(false);
                    }}
                    className="flex items-center justify-between py-[6px] w-full hover:bg-brand-white/10 rounded px-2"
                  >
                    <span className="text-left font-normal leading-[20px] text-brand-white text-[length:var(--text-p)] tracking-[-0.0762px]" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                      Both
                    </span>
                    {selectedType === 'all' && <Check className="w-4 h-4 text-brand-white" />}
                  </button>
                </div>
              )}
            </div>

            {/* Calendar/List Buttons */}
            <div className="flex items-center gap-[8px] order-first">
              <button
                onClick={() => onViewModeChange('list')}
                className={`h-[39.994px] px-[4px] rounded-[6px] flex items-center justify-center gap-[4px] ${
                  viewMode === 'list' ? '' : 'hover:bg-brand-white/10'
                }`}
              >
                <ListDashesIcon 
                  className="w-[15.998px] h-[15.998px] text-brand-white" 
                  opacity={viewMode === 'list' ? '1' : '0.5'} 
                />
                <p 
                  className={`text-[length:var(--text-label)] font-light leading-[24px] tracking-[-0.3125px] ${
                    viewMode === 'list' 
                      ? 'text-brand-white underline decoration-solid' 
                      : 'text-brand-white/50'
                  }`}
                  style={{ fontFamily: "'Funnel Sans', sans-serif" }}
                >
                  List
                </p>
              </button>
              
              <button
                onClick={() => onViewModeChange('calendar')}
                className={`h-[39.994px] px-[4px] rounded-[6px] flex items-center justify-center gap-[4px] ${
                  viewMode === 'calendar' ? '' : 'hover:bg-brand-white/10'
                }`}
              >
                <CalendarIcon 
                  className="w-[15.998px] h-[15.998px] text-brand-white" 
                  opacity={viewMode === 'calendar' ? '1' : '0.5'} 
                />
                <p 
                  className={`text-[length:var(--text-label)] font-light leading-[24px] tracking-[-0.3125px] ${
                    viewMode === 'calendar' 
                      ? 'text-brand-white underline decoration-solid' 
                      : 'text-brand-white/50'
                  }`}
                  style={{ fontFamily: "'Funnel Sans', sans-serif" }}
                >
                  Calendar
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-white/20">
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex items-center gap-4 px-[16px]">
                <button
                  onClick={() => handleTypeChange('all')}
                  className="rounded-md flex items-center"
                >
                  <p className={`text-[length:var(--text-p)] font-normal leading-6 ${
                    selectedType === 'all'
                      ? 'text-brand-white underline decoration-solid'
                      : 'text-brand-white/70'
                  }`}>
                    All
                  </p>
                </button>
                
                <button
                  onClick={() => handleTypeChange('social')}
                  className="rounded-md flex items-center"
                >
                  <p className={`text-[length:var(--text-p)] font-normal leading-6 ${
                    selectedType === 'social'
                      ? 'text-brand-white underline decoration-solid'
                      : 'text-brand-white/70'
                  }`}>
                    Social
                  </p>
                </button>
                
                <button
                  onClick={() => handleTypeChange('race')}
                  className="rounded-md flex items-center"
                >
                  <p className={`text-[length:var(--text-p)] font-normal leading-6 ${
                    selectedType === 'race'
                      ? 'text-brand-white underline decoration-solid'
                      : 'text-brand-white/70'
                  }`}>
                    Race
                  </p>
                </button>
              </div>
              
              <div className="border-t border-brand-white/20 my-2" />

              <button
                onClick={() => {
                  onAddEventClick();
                  setIsMobileMenuOpen(false);
                }}
                className="h-[40px] px-[16px] rounded-md flex items-center gap-2 hover:bg-brand-white/10"
              >
                <CalendarPlusIcon className="w-4 h-4 text-brand-white" />
                <p className="text-[length:var(--text-p)] font-normal leading-6 text-brand-white">
                  Suggest Event
                </p>
              </button>
              
              <button
                onClick={() => {
                  window.open('https://runsnaps.notion.site', '_blank', 'noopener,noreferrer');
                  setIsMobileMenuOpen(false);
                }}
                className="h-[40px] px-[16px] rounded-md flex items-center gap-2 hover:bg-brand-white/10"
              >
                <Camera className="w-4 h-4 text-brand-white" />
                <p className="text-[length:var(--text-p)] font-normal leading-6 text-brand-white">
                  Event Photo Albums
                </p>
              </button>
              
              <button
                onClick={() => {
                  onViewAbout5();
                  setIsMobileMenuOpen(false);
                }}
                className="h-[40px] px-[16px] rounded-md flex items-center gap-2 hover:bg-brand-white/10"
              >
                <Info className="w-4 h-4 text-brand-white" />
                <p className="text-[length:var(--text-p)] font-normal leading-6 text-brand-white">
                  About
                </p>
              </button>
              
              <div className="border-t border-brand-white/20 my-2" />

              {/* Past Events Toggle */}
              <button
                onClick={() => {
                  onTypeChange(showPastEvents ? 'all' : 'past');
                  setIsMobileMenuOpen(false);
                }}
                className="h-[40px] px-[16px] rounded-md flex items-center gap-2 hover:bg-brand-white/10"
              >
                {showPastEvents ? (
                  <ClockClockwiseIcon className="w-4 h-4 text-brand-white" />
                ) : (
                  <ClockCounterClockwiseIcon className="w-4 h-4 text-brand-white" />
                )}
                <p className="text-[length:var(--text-p)] font-normal leading-6 text-brand-white">
                  {showPastEvents ? 'Future Events Only' : 'Include Past Events'}
                </p>
              </button>
              
              <div className="flex gap-2">
                <button
                  onClick={cycleColorTheme}
                  className="h-[40px] flex-1 rounded-md flex items-center gap-2 hover:bg-brand-white/10 px-[16px]"
                >
                  <PaletteIcon className="w-4 h-4 text-brand-white" />
                  <p className="text-[length:var(--text-p)] font-normal leading-6 text-brand-white">
                    Theme
                  </p>
                </button>
                
                <button
                  onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
                  className="h-[40px] flex-1 rounded-md flex items-center gap-2 hover:bg-brand-white/10 px-[16px]"
                >
                  {theme === 'dark' ? (
                    <>
                      <SunDimIcon className="w-4 h-4 text-brand-white" />
                      <p className="text-[length:var(--text-p)] font-normal leading-6 text-brand-white">
                        Light
                      </p>
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-4 h-4 text-brand-white" />
                      <p className="text-[length:var(--text-p)] font-normal leading-6 text-brand-white">
                        Dark
                      </p>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
