import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Event, EventType } from '../App';
import { ExternalLink } from 'lucide-react';

interface CalendarViewProps {
  events: Event[];
  selectedType: EventType | 'all';
}

export function CalendarView({ events, selectedType }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

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
    return events.filter(event => event.date === dateStr);
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

  return (
    <div className="h-full flex flex-col overflow-hidden pb-[16px]">
      {/* Calendar Header */}
      <div className="flex items-center justify-between pb-[1px] mb-0 pt-[0px] pr-[0px] pl-[0px] px-[0px] py-[1px] flex-shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="text-[20px] font-semibold leading-[30px] text-brand-white">{monthName} {year}</h2>
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
      <div className="grid grid-cols-7 pb-[-3px] border-b border-brand-white mt-6 pt-[0px] pr-[0px] pl-[0px] flex-shrink-0">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="pl-[12px] text-left text-[12px] font-medium leading-[18px] text-brand-white/70"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div 
        className="grid grid-cols-7 flex-1 mt-[0px] mr-[0px] mb-[0px] ml-[0px] min-h-0"
        style={{
          gridTemplateRows: `repeat(${numberOfRows}, 1fr)`
        }}
      >
        {calendarDays.map((calendarDay, index) => {
          const dayEvents = getEventsForDate(calendarDay);
          const isTodayDate = isToday(calendarDay);
          const isLastInRow = (index + 1) % 7 === 0;
          const rowIndex = Math.floor(index / 7);
          const isLastRow = rowIndex === Math.floor((totalCells - 1) / 7);
          const isOtherMonth = calendarDay.month !== 'current';

          return (
            <motion.div
              key={index}
              layout
              transition={{
                layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              className={`pl-[12px] pr-3 pt-[4px] pb-[1px] relative border-b border-brand-white flex flex-col min-h-0 overflow-hidden`}
            >
              {calendarDay.day && (
                <>
                  {/* Date number */}
                  <div className="flex justify-start mb-[-4px] mt-[0px] mr-[0px] ml-[0px] m-[0px]">
                    {isTodayDate ? (
                      <div className="bg-brand-white text-brand-blue w-[24px] h-[24px] rounded-full flex items-center justify-center">
                        <span className="text-[14px] font-medium leading-[21px]">{calendarDay.day}</span>
                      </div>
                    ) : (
                      <span className={`text-[14px] font-normal leading-[30px] ${
                        isOtherMonth ? 'text-brand-white/40' : 'text-brand-white/70'
                      }`}>
                        {calendarDay.day}
                      </span>
                    )}
                  </div>
                  
                  {/* Events */}
                  <motion.div 
                    layout
                    className="flex flex-col"
                  >
                    <AnimatePresence mode="popLayout">
                      {dayEvents.slice(0, 3).map((event, eventIndex) => (
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
                            className={`block py-1 cursor-pointer transition-opacity w-full text-left group ${
                              isOtherMonth ? 'opacity-60' : ''
                            }`}
                          >
                            <p className="text-[13px] font-normal text-brand-white leading-[20px] truncate group-hover:underline">
                              {event.title}
                            </p>
                          </button>
                          {/* Dividing line between events */}
                          {eventIndex < Math.min(dayEvents.length, 3) - 1 && (
                            <div className="w-full h-[1px] bg-brand-white/20" />
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {dayEvents.length > 3 && (
                      <motion.div 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`py-2 text-[14px] text-brand-white/50 ${
                          isOtherMonth ? 'opacity-60' : ''
                        }`}
                      >
                        +{dayEvents.length - 3} more
                      </motion.div>
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
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-brand-blue border border-brand-white/20 rounded-lg max-w-md w-full p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <a 
                  href={selectedEvent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[22px] font-semibold text-brand-white leading-normal hover:opacity-80 transition-opacity inline-flex items-center gap-2 group"
                >
                  <span>{selectedEvent.title}</span>
                  <ExternalLink className="w-4 h-4 text-brand-white/60 group-hover:text-brand-white transition-colors" />
                </a>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-brand-white/60 hover:text-brand-white transition-colors ml-4"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Organizer */}
            {selectedEvent.organizer && (
              <p className="text-[14px] font-normal text-brand-white leading-normal mb-4">
                {selectedEvent.organizer}
              </p>
            )}

            {/* Description */}
            {selectedEvent.description && (
              <p className="text-[14px] font-normal text-brand-white leading-normal">
                {selectedEvent.description}
              </p>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}