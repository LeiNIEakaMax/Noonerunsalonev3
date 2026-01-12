import type { Event } from '../App';
import { useState, useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface EventListProps {
  events: Event[];
}

export function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-brand-white/60">No events found for the selected filters</p>
      </div>
    );
  }

  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  return (
    <div className="space-y-4">
      {Object.entries(groupedEvents).map(([date, dateEvents]) => (
        <EventGroup key={date} date={date} events={dateEvents} />
      ))}
    </div>
  );
}

function EventGroup({ date, events }: { date: string; events: Event[] }) {
  const formatDate = (dateString: string) => {
    // Parse date string as YYYY-MM-DD in local timezone to avoid timezone offset issues
    const [year, month, day] = dateString.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day);
    const today = new Date();
    
    // Reset time to midnight for accurate date comparison
    today.setHours(0, 0, 0, 0);
    dateObj.setHours(0, 0, 0, 0);
    
    // Check if it's today
    const isToday = dateObj.toDateString() === today.toDateString();
    
    if (isToday) return 'Today';
    
    // Calculate days until the event
    const daysUntil = Math.ceil((dateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    // Get day of week name
    const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    
    // Check if it's in the current week (before next Sunday)
    const currentDayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
    const daysUntilNextSunday = currentDayOfWeek === 0 ? 7 : 7 - currentDayOfWeek;
    
    if (daysUntil > 0 && daysUntil <= daysUntilNextSunday) {
      // It's later this week (including tomorrow through Saturday/Sunday)
      return `This ${dayOfWeek}`;
    } else if (daysUntil > daysUntilNextSunday && daysUntil <= daysUntilNextSunday + 7) {
      // It's next week
      return `Next ${dayOfWeek}`;
    }
    
    // More than 2 weeks away, just show the day name
    return dayOfWeek;
  };

  const getDateParts = (dateString: string) => {
    // Parse date string as YYYY-MM-DD in local timezone to avoid timezone offset issues
    const [year, month, day] = dateString.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day);
    return {
      dayName: formatDate(dateString),
      month: dateObj.toLocaleDateString('en-US', { month: 'long' }).toUpperCase(),
      day: dateObj.getDate()
    };
  };

  const dateParts = getDateParts(date);

  return (
    <div className="flex gap-6 pb-4 border-b border-brand-white/20">
      {/* Date Display */}
      <div className="flex-shrink-0 w-[104px]">
        <DateDisplay 
          dayName={dateParts.dayName}
          month={dateParts.month}
          day={dateParts.day}
        />
      </div>

      {/* Events for this date */}
      <div className="flex-1 space-y-4">
        {events.map((event, eventIndex) => (
          <div key={event.id}>
            <EventItem event={event} />
            {eventIndex < events.length - 1 && (
              <div className="w-full h-[1px] bg-brand-white/20 mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function DateDisplay({ dayName, month, day }: { dayName: string; month: string; day: number }) {
  return (
    <div className="flex flex-col items-start text-brand-white pb-[-30px] pt-[0px] pr-[0px] pl-[0px]">
      <div className="flex flex-col items-start mb-[-23px]">
        <p className="text-[12px] leading-normal">{dayName}</p>
        <p className="text-[12px] uppercase opacity-50 leading-normal">{month}</p>
      </div>
      <p className="text-[87px] leading-normal" style={{ fontFamily: "'Vina Sans', sans-serif" }}>{day}</p>
    </div>
  );
}

function EventItem({ event }: { event: Event }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const descriptionText = event.description || `${event.time} at ${event.location}`;

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current && !isExpanded) {
        // Check if content is actually truncated by comparing scrollHeight to clientHeight
        setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight);
      }
    };

    checkTruncation();
    // Re-check on window resize
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [descriptionText, isExpanded]);

  return (
    <div className="flex flex-col gap-0.5">
      {event.organizer && (
        <p className="text-[14px] font-normal text-brand-white leading-normal">
          {event.organizer}
        </p>
      )}
      <div className="flex flex-col">
        <a 
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[22px] font-semibold text-brand-white leading-normal hover:underline transition-opacity cursor-pointer inline-flex items-center gap-2 group w-fit"
        >
          <span>{event.title}</span>
          <ExternalLink className="w-4 h-4 text-brand-white/60 group-hover:text-brand-white transition-colors" />
        </a>
        <div>
          <p 
            ref={textRef}
            className={`text-[14px] font-normal text-brand-white leading-normal max-w-[80ch] ${
              !isExpanded ? 'line-clamp-3' : ''
            }`}
          >
            {descriptionText}
          </p>
          {(isTruncated || isExpanded) && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[14px] font-normal text-brand-white/70 hover:text-brand-white transition-colors underline mt-1"
            >
              {isExpanded ? 'view less' : 'view more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}