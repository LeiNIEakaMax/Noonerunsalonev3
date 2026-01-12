import { LayoutList, Calendar, Menu, X, Plus, Sun, Moon, Palette, Bug } from 'lucide-react';
import { useState } from 'react';
import type { ViewMode, EventType, ColorTheme } from '../App';
import svgPaths from '../imports/svg-l2xlsah3rg';

interface HeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  selectedType: EventType | 'all';
  onTypeChange: (type: EventType | 'all') => void;
  onAddEventClick: () => void;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  colorTheme: ColorTheme;
  onColorThemeChange: (theme: ColorTheme) => void;
}

export function Header({ viewMode, onViewModeChange, selectedType, onTypeChange, onAddEventClick, theme, onThemeChange, colorTheme, onColorThemeChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTypeChange = (type: EventType | 'all') => {
    onTypeChange(type);
    setIsMobileMenuOpen(false);
  };

  const cycleColorTheme = () => {
    const themes: ColorTheme[] = ['blue', 'purple', 'burgundy', 'teal', 'green'];
    const currentIndex = themes.indexOf(colorTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    onColorThemeChange(themes[nextIndex]);
  };

  return (
    <header className="sticky top-0 z-50 transition-colors bg-brand-blue">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between h-[40px]">
          {/* Event Type Selector - Desktop Only */}
          <div className="hidden md:flex items-center gap-[8px] h-[40px]">
            <button
              onClick={() => onTypeChange('all')}
              className="h-[40px] px-[16px] rounded-md transition-colors flex items-center"
            >
              <p className={`text-[16px] font-normal leading-6 ${
                selectedType === 'all'
                  ? 'text-brand-white underline decoration-solid'
                  : 'text-brand-white/70'
              }`}>
                All
              </p>
            </button>
            
            <button
              onClick={() => onTypeChange('social')}
              className="h-[40px] px-[16px] rounded-md transition-colors flex items-center"
            >
              <p className={`text-[16px] font-normal leading-6 ${
                selectedType === 'social'
                  ? 'text-brand-white underline decoration-solid'
                  : 'text-brand-white/70'
              }`}>
                Social
              </p>
            </button>
            
            <button
              onClick={() => onTypeChange('race')}
              className="h-[40px] px-[16px] rounded-md transition-colors flex items-center"
            >
              <p className={`text-[16px] font-normal leading-6 ${
                selectedType === 'race'
                  ? 'text-brand-white underline decoration-solid'
                  : 'text-brand-white/70'
              }`}>
                Race
              </p>
            </button>
          </div>

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

          {/* Brand Name - Center */}
          <h1 className="text-[40px] font-normal leading-6 text-brand-white font-[Vina_Sans]">
            no one runs alone
          </h1>

          {/* View Mode Selector - Desktop Only */}
          <div className="hidden md:flex items-center gap-[8px] h-[40px]">
            <button
              onClick={onAddEventClick}
              className="h-[40px] px-[16px] rounded-md flex items-center transition-colors hover:bg-brand-white/10"
              aria-label="Add event"
            >
              <Bug className="w-4 h-4 text-brand-white" />
            </button>
            
            <button
              onClick={cycleColorTheme}
              className="h-[40px] px-[16px] rounded-md flex items-center transition-colors hover:bg-brand-white/10"
              aria-label="Cycle color theme"
            >
              <Palette className="w-4 h-4 text-brand-white" />
            </button>
            
            <button
              onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
              className="h-[40px] px-[16px] rounded-md flex items-center transition-colors hover:bg-brand-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-brand-white" />
              ) : (
                <Moon className="w-4 h-4 text-brand-white" />
              )}
            </button>
            
            <button
              onClick={() => onViewModeChange('list')}
              className="h-[40px] px-[16px] rounded-md flex items-center transition-colors text-brand-white"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <g>
                  <path 
                    d={svgPaths.p14422700} 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeOpacity={viewMode === 'list' ? '1' : '0.7'} 
                    strokeWidth="1.33324" 
                  />
                  <path 
                    d={svgPaths.p321ff500} 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeOpacity={viewMode === 'list' ? '1' : '0.7'} 
                    strokeWidth="1.33324" 
                  />
                  <path 
                    d="M9.33268 2.66648H13.999" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeOpacity={viewMode === 'list' ? '1' : '0.7'} 
                    strokeWidth="1.33324" 
                  />
                  <path 
                    d="M9.33268 5.99958H13.999" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeOpacity={viewMode === 'list' ? '1' : '0.7'} 
                    strokeWidth="1.33324" 
                  />
                  <path 
                    d="M9.33268 9.9993H13.999" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeOpacity={viewMode === 'list' ? '1' : '0.7'} 
                    strokeWidth="1.33324" 
                  />
                  <path 
                    d="M9.33268 13.3324H13.999" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeOpacity={viewMode === 'list' ? '1' : '0.7'} 
                    strokeWidth="1.33324" 
                  />
                </g>
              </svg>
            </button>
            
            <button
              onClick={() => onViewModeChange('calendar')}
              className="h-[40px] px-[16px] rounded-md flex items-center transition-colors text-brand-white"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_calendar)">
                  <path 
                    d="M5.33296 1.33324V3.99972" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeOpacity={viewMode === 'calendar' ? '1' : '0.7'}
                    strokeWidth="1.33324" 
                  />
                  <path 
                    d="M10.6659 1.33324V3.99972" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeOpacity={viewMode === 'calendar' ? '1' : '0.7'}
                    strokeWidth="1.33324" 
                  />
                  <path 
                    d={svgPaths.p4bbae00} 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeOpacity={viewMode === 'calendar' ? '1' : '0.7'}
                    strokeWidth="1.33324" 
                  />
                  <path 
                    d="M1.99986 6.6662H13.999" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeOpacity={viewMode === 'calendar' ? '1' : '0.7'}
                    strokeWidth="1.33324" 
                  />
                </g>
                <defs>
                  <clipPath id="clip0_calendar">
                    <rect fill="white" height="15.9989" width="15.9989" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-white/20">
            <div className="flex flex-col gap-2 pt-4">
              <button
                onClick={() => handleTypeChange('all')}
                className="h-[40px] px-[16px] rounded-md transition-colors flex items-center"
              >
                <p className={`text-[16px] font-normal leading-6 ${
                  selectedType === 'all'
                    ? 'text-brand-white underline decoration-solid'
                    : 'text-brand-white/70'
                }`}>
                  All
                </p>
              </button>
              
              <button
                onClick={() => handleTypeChange('social')}
                className="h-[40px] px-[16px] rounded-md transition-colors flex items-center"
              >
                <p className={`text-[16px] font-normal leading-6 ${
                  selectedType === 'social'
                    ? 'text-brand-white underline decoration-solid'
                    : 'text-brand-white/70'
                }`}>
                  Social
                </p>
              </button>
              
              <button
                onClick={() => handleTypeChange('race')}
                className="h-[40px] px-[16px] rounded-md transition-colors flex items-center"
              >
                <p className={`text-[16px] font-normal leading-6 ${
                  selectedType === 'race'
                    ? 'text-brand-white underline decoration-solid'
                    : 'text-brand-white/70'
                }`}>
                  Race
                </p>
              </button>
              
              <div className="border-t border-brand-white/20 my-2" />
              
              <button
                onClick={cycleColorTheme}
                className="h-[40px] px-[16px] rounded-md transition-colors flex items-center gap-2 hover:bg-brand-white/10"
              >
                <Palette className="w-4 h-4 text-brand-white" />
                <p className="text-[16px] font-normal leading-6 text-brand-white">
                  Change Color
                </p>
              </button>
              
              <button
                onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
                className="h-[40px] px-[16px] rounded-md transition-colors flex items-center gap-2 hover:bg-brand-white/10"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-brand-white" />
                    <p className="text-[16px] font-normal leading-6 text-brand-white">
                      Light Mode
                    </p>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-brand-white" />
                    <p className="text-[16px] font-normal leading-6 text-brand-white">
                      Dark Mode
                    </p>
                  </>
                )}
              </button>
              
              <div className="border-t border-brand-white/20 my-2" />
              
              <button
                onClick={() => {
                  onAddEventClick();
                  setIsMobileMenuOpen(false);
                }}
                className="h-[40px] px-[16px] rounded-md transition-colors flex items-center gap-2 hover:bg-brand-white/10"
              >
                <Plus className="w-4 h-4 text-brand-white" />
                <p className="text-[16px] font-normal leading-6 text-brand-white">
                  Add Event
                </p>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}