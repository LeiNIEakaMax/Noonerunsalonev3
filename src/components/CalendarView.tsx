import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Event, FilterType } from '../App';
import { ExternalLink } from 'lucide-react';
import { EventDetailModal } from './EventDetailModal';

interface CalendarViewProps {
  events: Event[];
  selectedType: FilterType;
  onEventHover?: (imagePath: string | null, side?: 'left' | 'right') => void;
}

export function CalendarView({ events, selectedType, onEventHover }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [expandedDay, setExpandedDay] = useState<{ events: Event[], date: string, position: { x: number, y: number }, isLastRow: boolean } | null>(null);
  const [maxVisibleEvents, setMaxVisibleEvents] = useState(3);
  const [popoverWidth, setPopoverWidth] = useState(280);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // Get the starting day of the week for the first day of month
  // Adjust so Monday is 0, Sunday is 6
  const startingDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;

  // Calculate total cells needed
  const daysInMonth = lastDayOfMonth.getDate();
  const totalCells = Math.ceil((daysInMonth + startingDayOfWeek) / 7) * 7;
  const numberOfRows = totalCells / 7;

  // Get the last day of previous month
  const lastDayOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

  // Generate calendar days including previous and next month days
  type CalendarDay = {
    day: number;
    month: 'prev' | 'current' | 'next';
    date: Date;
  };

  const calendarDays: CalendarDay[] = [];
  
  for (let i = 0; i < totalCells; i++) {
    if (i < startingDayOfWeek) {
      // Previous month days
      const day = lastDayOfPrevMonth - startingDayOfWeek + i + 1;
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day);
      calendarDays.push({ day, month: 'prev', date });
    } else if (i >= daysInMonth + startingDayOfWeek) {
      // Next month days
      const day = i - daysInMonth - startingDayOfWeek + 1;
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day);
      calendarDays.push({ day, month: 'next', date });
    } else {
      // Current month days
      const day = i - startingDayOfWeek + 1;
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      calendarDays.push({ day, month: 'current', date });
    }
  }

  // Get events for a specific date
  const getEventsForDate = (calendarDay: CalendarDay) => {
    const year = calendarDay.date.getFullYear();
    const month = calendarDay.date.getMonth() + 1;
    const day = calendarDay.date.getDate();
    
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    let filteredEvents = events.filter(event => event.date === dateStr);
    
    // Filter by type
    if (selectedType === 'social') {
      filteredEvents = filteredEvents.filter(event => event.type === 'social');
    } else if (selectedType === 'race') {
      filteredEvents = filteredEvents.filter(event => event.type === 'race');
    }
    // For 'all' and 'past', return all events for that date
    
    return filteredEvents;
  };

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
  const year = currentDate.getFullYear();

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isToday = (calendarDay: CalendarDay) => {
    const today = new Date();
    return (
      calendarDay.day === today.getDate() &&
      calendarDay.date.getMonth() === today.getMonth() &&
      calendarDay.date.getFullYear() === today.getFullYear()
    );
  };

  // Calculate max visible events based on cell height
  useEffect(() => {
    const calculateMaxEvents = () => {
      // Find a sample cell to measure
      const sampleCell = cellRefs.current.find(cell => cell !== null);
      if (!sampleCell) return;

      const cellHeight = sampleCell.offsetHeight;
      // Account for: date number (30px), padding (5px), and "+X more" button (40px)
      const availableHeight = cellHeight - 75;
      
      // Each event takes approximately 22px (20px line height + 1px divider + 1px padding)
      const eventHeight = 22;
      const maxEvents = Math.max(1, Math.floor(availableHeight / eventHeight));
      
      setMaxVisibleEvents(maxEvents);
    };

    calculateMaxEvents();
    window.addEventListener('resize', calculateMaxEvents);
    
    return () => window.removeEventListener('resize', calculateMaxEvents);
  }, [numberOfRows]);

  // Calculate popover width based on grid width
  useEffect(() => {
    const calculatePopoverWidth = () => {
      if (gridRef.current) {
        // Set to 24.4% of grid width (weekend column width)
        setPopoverWidth(gridRef.current.offsetWidth * 0.244);
      }
    };

    calculatePopoverWidth();
    window.addEventListener('resize', calculatePopoverWidth);
    
    return () => window.removeEventListener('resize', calculatePopoverWidth);
  }, [numberOfRows]);

  return (
    <div className="h-full flex flex-col overflow-hidden pb-[16px] p-[0px] relative">
      {/* Calendar Header */}
      <div className="flex items-center justify-between pb-[1px] mb-0 pt-[0px] pr-[0px] pl-[0px] px-[0px] py-[1px] flex-shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="text-[length:var(--text-h2)] font-semibold leading-[30px] text-brand-white">{monthName} {year}</h2>
        </div>
        <div className="flex items-center gap-[8px]">
          <button
            onClick={goToPreviousMonth}
            className="p-2 rounded-lg transition-colors w-[36px] h-[36px] flex items-center justify-center"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5 text-brand-white" />
          </button>
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-lg transition-colors w-[36px] h-[36px] flex items-center justify-center"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5 text-brand-white" />
          </button>
        </div>
      </div>

      {/* Days of Week Header */}
      <div className="grid pb-[-3px] border-b border-brand-white mt-0 pt-[0px] pr-[0px] pl-[0px] flex-shrink-0"
        style={{
          gridTemplateColumns: '9.55% 9.55% 9.55% 9.55% 13% 24.4% 24.4%'
        }}
      >
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="pl-[12px] text-left text-[length:var(--text-label)] font-medium leading-[18px] text-brand-white/70"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div 
        className="grid flex-1 mt-[0px] mr-[0px] mb-[0px] ml-[0px] min-h-0"
        style={{
          gridTemplateColumns: '9.55% 9.55% 9.55% 9.55% 13% 24.4% 24.4%',
          gridTemplateRows: `repeat(${numberOfRows}, 1fr)`
        }}
        ref={gridRef}
      >
        {calendarDays.map((calendarDay, index) => {
          const dayEvents = getEventsForDate(calendarDay);
          const isTodayDate = isToday(calendarDay);
          const isLastInRow = (index + 1) % 7 === 0;
          const rowIndex = Math.floor(index / 7);
          const isLastRow = rowIndex === Math.floor((totalCells - 1) / 7);
          const isOtherMonth = calendarDay.month !== 'current';

          const isSunday = (index + 1) % 7 === 0;

          return (
            <motion.div
              key={index}
              ref={(el) => (cellRefs.current[index] = el)}
              layout
              transition={{
                layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              className={`pl-[12px] pr-3 pt-[4px] pb-[1px] relative border-b border-brand-white flex flex-col min-h-0 overflow-hidden`}
            >
              {calendarDay.day && (
                <>
                  {/* Date number */}
                  <div className="flex justify-start mt-[-8px] mr-[0px] mb-[-4px] ml-[0px] items-baseline">
                    {isTodayDate ? (
                      <div className="bg-brand-white text-brand-blue px-[8px] h-[24px] flex items-center justify-center" style={{ borderRadius: '0 0 999px 999px' }}>
                        <span className="text-[length:var(--text-label)] font-medium leading-[21px]" style={{ fontFamily: "'Funnel Display', sans-serif" }}>{calendarDay.day}</span>
                      </div>
                    ) : (
                      <span className={`text-[length:var(--text-label)] font-normal leading-[30px] ${
                        isOtherMonth ? 'text-brand-white/40' : 'text-brand-white/70'
                      }`} style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                        {calendarDay.day}
                      </span>
                    )}

                    {(() => {
                      // Check for World Major Marathons (hardcoded for 2026 dates)
                      const majors = [
                        { month: 2, day: 1, name: "Tokyo Marathon" }, // March 1
                        { month: 3, day: 20, name: "Boston Marathon" }, // April 20
                        { month: 3, day: 26, name: "London Marathon" }, // April 26
                        { month: 7, day: 30, name: "Sydney Marathon" }, // August 30
                        { month: 8, day: 27, name: "Berlin Marathon" }, // September 27
                        { month: 9, day: 11, name: "Chicago Marathon" }, // October 11
                        { month: 10, day: 1, name: "New York City Marathon" }, // November 1
                      ];
                      
                      const major = majors.find(m => 
                        m.month === calendarDay.date.getMonth() && 
                        m.day === calendarDay.date.getDate() &&
                        calendarDay.date.getFullYear() === 2026
                      );
                      
                      if (!major) return null;
                      
                      return (
                        <span className="ml-[12px] text-[length:var(--text-label)] font-normal leading-[30px] text-brand-white" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                          {major.name}
                        </span>
                      );
                    })()}
                  </div>
                  
                  {/* Events */}
                  <motion.div 
                    layout
                    className="flex flex-col"
                  >
                    <AnimatePresence mode="popLayout">
                      {dayEvents.slice(0, maxVisibleEvents).map((event, eventIndex) => (
                        <motion.div 
                          key={event.id}
                          layout
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ 
                            duration: 0.2,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedEvent(event);
                            }}
                            onMouseEnter={() => onEventHover?.(event.image_path || '', isSunday ? 'left' : 'right')}
                            onMouseLeave={() => onEventHover?.(null)}
                            className={`block py-1 cursor-pointer transition-opacity w-full text-left group ${
                              isOtherMonth ? 'opacity-60' : ''
                            }`}
                          >
                            <p className="text-[length:var(--text-p)] font-normal text-brand-white leading-[20px] truncate group-hover:underline" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
                              {event.title}
                            </p>
                          </button>
                          {/* Dividing line between events */}
                          {eventIndex < Math.min(dayEvents.length, maxVisibleEvents) - 1 && (
                            <div className="w-full h-[1px] bg-brand-white/20" />
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {dayEvents.length > maxVisibleEvents && (
                      <motion.button 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                          const cell = cellRefs.current[index];
                          if (cell) {
                            const rect = cell.getBoundingClientRect();
                            const year = calendarDay.date.getFullYear();
                            const month = calendarDay.date.getMonth() + 1;
                            const day = calendarDay.date.getDate();
                            const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                            
                            setExpandedDay({
                              events: dayEvents,
                              date: dateStr,
                              position: { x: rect.left, y: rect.top },
                              isLastRow: isLastRow
                            });
                          }
                        }}
                        className={`pt-[4px] pb-[4px] text-[length:var(--text-label)] text-brand-white/50 hover:text-brand-white/70 transition-colors text-left ${
                          isOtherMonth ? 'opacity-60' : ''
                        }`}
                      >
                        +{dayEvents.length - maxVisibleEvents} more
                      </motion.button>
                    )}
                  </motion.div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {/* Expanded Day Popover */}
      <AnimatePresence>
        {expandedDay && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setExpandedDay(null)}
            />
            
            {/* Popover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed z-50 bg-brand-blue border border-brand-white/20 p-4 max-h-[400px] overflow-y-auto"
              style={(() => {
                const baseStyle = {
                  left: `${expandedDay.position.x}px`,
                  width: `${popoverWidth}px`,
                  borderRadius: 'var(--radius)'
                };
                
                if (expandedDay.isLastRow) {
                  // For last row, position so the popover doesn't overflow the viewport
                  // Align bottom of popover with bottom of viewport with some padding
                  return {
                    ...baseStyle,
                    bottom: '16px'
                  };
                } else {
                  // For other rows, position normally from the top
                  return {
                    ...baseStyle,
                    top: `${expandedDay.position.y}px`
                  };
                }
              })()}
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[length:var(--text-subheading)] font-medium text-brand-white">
                  {(() => {
                    const [year, month, day] = expandedDay.date.split('-').map(Number);
                    const localDate = new Date(year, month - 1, day);
                    return localDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                  })()}
                </span>
                <button
                  onClick={() => setExpandedDay(null)}
                  className="text-brand-white/60 hover:text-brand-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Event list */}
              <div className="flex flex-col gap-2">
                {expandedDay.events.map((event, index) => (
                  <div key={event.id}>
                    <button
                      onClick={() => {
                        setExpandedDay(null);
                        setSelectedEvent(event);
                      }}
                      onMouseEnter={() => {
                         const dayIndex = new Date(expandedDay.date).getDay();
                         // getDay() returns 0 for Sunday.
                         // But wait, the date constructor might use local time.
                         // The expandedDay.date is YYYY-MM-DD.
                         const [y, m, d] = expandedDay.date.split('-').map(Number);
                         const dateObj = new Date(y, m - 1, d);
                         const isSun = dateObj.getDay() === 0;
                         onEventHover?.(event.image_path || '', isSun ? 'left' : 'right');
                      }}
                      onMouseLeave={() => onEventHover?.(null)}
                      className="w-full text-left group"
                    >
                      <p className="text-[length:var(--text-label)] font-normal text-brand-white leading-[20px] group-hover:underline" style={{ fontFamily: "'Funnel Display', sans-serif" }}>
                        {event.title}
                      </p>
                    </button>
                    {index < expandedDay.events.length - 1 && (
                      <div className="w-full h-[1px] bg-brand-white/20 my-2" />
                    )}
                  </div>
                ))}
              </div>

              {/* "Less" button to close */}
              <button
                onClick={() => setExpandedDay(null)}
                className="mt-3 text-[length:var(--text-subheading)] text-brand-white/50 hover:text-brand-white/70 transition-colors"
              >
                Less
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div 
        className="absolute left-[26px] w-[398px] z-10 pointer-events-none"
        style={{ top: `calc(62px + (100% - 78px) * (${numberOfRows} - 1.5) / ${numberOfRows})` }}
      >
        <p className="font-['Stylish',sans-serif] text-[length:var(--text-p)] leading-[24px] text-brand-white whitespace-pre-wrap text-[#dfd7d999]">
          {`forthesharedexperience gathers runs, races, and community events—no algorithm, just what’s worth showing up for. (around GTA)`}
        </p>
      </div>
    </div>
  );
}