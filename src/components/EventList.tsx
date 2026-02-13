import type { Event } from "../App";
import { useState, useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { EventDetailModal } from "./EventDetailModal";

interface EventListProps {
  events: Event[];
  onEventHover?: (image: string | null) => void;
}

export function EventList({ events, onEventHover }: EventListProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  if (events.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-brand-white/60">
          No events found for the selected filters
        </p>
      </div>
    );
  }

  // Group events by date
  const groupedEvents = events.reduce(
    (acc, event) => {
      if (!acc[event.date]) {
        acc[event.date] = [];
      }
      acc[event.date].push(event);
      return acc;
    },
    {} as Record<string, Event[]>,
  );

  return (
    <div className="space-y-4">
      {Object.entries(groupedEvents).map(
        ([date, dateEvents]) => (
          <EventGroup
            key={date}
            date={date}
            events={dateEvents}
            onEventClick={setSelectedEvent}
            onEventHover={onEventHover}
          />
        ),
      )}
      
      {/* Event Detail Modal */}
      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}

function EventGroup({
  date,
  events,
  onEventClick,
  onEventHover,
}: {
  date: string;
  events: Event[];
  onEventClick: (event: Event) => void;
  onEventHover?: (image: string | null) => void;
}) {
  const formatDate = (dateString: string) => {
    // Parse date string as YYYY-MM-DD in local timezone to avoid timezone offset issues
    const [year, month, day] = dateString
      .split("-")
      .map(Number);
    const dateObj = new Date(year, month - 1, day);
    const today = new Date();

    // Reset time to midnight for accurate date comparison
    today.setHours(0, 0, 0, 0);
    dateObj.setHours(0, 0, 0, 0);

    // Check if it's today
    const isToday =
      dateObj.toDateString() === today.toDateString();

    if (isToday) return "Today";

    // Calculate days until the event
    const daysUntil = Math.ceil(
      (dateObj.getTime() - today.getTime()) /
        (1000 * 60 * 60 * 24),
    );

    // Get day of week name
    const dayOfWeek = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
    });

    // Check if it's in the current week (before next Sunday)
    const currentDayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
    const daysUntilNextSunday =
      currentDayOfWeek === 0 ? 7 : 7 - currentDayOfWeek;

    if (daysUntil > 0 && daysUntil <= daysUntilNextSunday) {
      // It's later this week (including tomorrow through Saturday/Sunday)
      return `This ${dayOfWeek}`;
    } else if (
      daysUntil > daysUntilNextSunday &&
      daysUntil <= daysUntilNextSunday + 7
    ) {
      // It's next week
      return `Next ${dayOfWeek}`;
    }

    // More than 2 weeks away, just show the day name
    return dayOfWeek;
  };

  const getDateParts = (dateString: string) => {
    // Parse date string as YYYY-MM-DD in local timezone to avoid timezone offset issues
    const [year, month, day] = dateString
      .split("-")
      .map(Number);
    const dateObj = new Date(year, month - 1, day);
    return {
      dayName: formatDate(dateString),
      month: dateObj
        .toLocaleDateString("en-US", { month: "long" })
        .toUpperCase(),
      day: dateObj.getDate(),
    };
  };

  const dateParts = getDateParts(date);

  return (
    <div className="flex gap-0 md:gap-0 pb-4 md:pb-4 border-b border-brand-white/20">
      {/* Date Display */}
      <div className="flex-shrink-0 w-[104px]">
        <DateDisplay
          dayName={dateParts.dayName}
          month={dateParts.month}
          day={dateParts.day}
        />
      </div>

      {/* Events for this date */}
      <div className="flex-1">
        {events.map((event, eventIndex) => (
          <div key={event.id}>
            {/* Mobile layout: event content stacked with city at bottom */}
            <div className="md:hidden pb-4">
              <EventItem event={event} onEventClick={onEventClick} />
            </div>

            {/* Desktop layout: event content and city side by side */}
            <div className="hidden md:flex gap-4">
              {/* Event content */}
              <div className="flex-1">
                <div 
                  className={`max-w-[80ch] ${eventIndex > 0 ? 'pt-4' : ''} pb-4`}
                  onMouseEnter={() => onEventHover?.(event.image_path || '')}
                  onMouseLeave={() => onEventHover?.(null)}
                >
                  <EventItem event={event} onEventClick={onEventClick} />
                </div>
              </div>

              {/* City for this specific event */}
              {event.city && (
                <div className={`flex-shrink-0 self-start ${eventIndex > 0 ? 'pt-4' : ''} pb-4`}>
                  <p className="text-[length:var(--text-subheading)] font-normal leading-normal text-brand-white tracking-[-0.1504px]">
                    ({event.city})
                  </p>
                </div>
              )}
            </div>

            {/* Divider between events */}
            {eventIndex < events.length - 1 && (
              <div className="w-full h-[1px] bg-brand-white/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function DateDisplay({
  dayName,
  month,
  day,
}: {
  dayName: string;
  month: string;
  day: number;
}) {
  return (
    <div className="flex flex-col items-start text-brand-white pb-[-30px] pt-[0px] pr-[0px] pl-[0px]">
      <div className="flex flex-col items-start mb-[-23px]">
        <p className="text-[length:var(--text-label)] leading-normal">{dayName}</p>
        <p className="text-[length:var(--text-label)] uppercase opacity-50 leading-normal">
          {month}
        </p>
      </div>
      <p
        className="text-[length:var(--text-date-large)] leading-normal"
        style={{ fontFamily: "'Stylish', sans-serif" }}
      >
        {day}
      </p>
    </div>
  );
}

function EventItem({ 
  event, 
  onEventClick,
  onEventHover 
}: { 
  event: Event; 
  onEventClick?: (event: Event) => void;
  onEventHover?: (image: string | null) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const descriptionText =
    event.description || `${event.time} at ${event.location}`;

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current && !isExpanded) {
        // Check if content is actually truncated by comparing scrollHeight to clientHeight
        setIsTruncated(
          textRef.current.scrollHeight >
            textRef.current.clientHeight,
        );
      }
    };

    checkTruncation();
    // Re-check on window resize
    window.addEventListener("resize", checkTruncation);
    return () =>
      window.removeEventListener("resize", checkTruncation);
  }, [descriptionText, isExpanded]);

  return (
    <div 
      className="flex flex-col gap-0.5 max-w-[80ch]"
      onMouseEnter={() => onEventHover?.(event.image_path || '')}
      onMouseLeave={() => onEventHover?.(null)}
    >
      {event.organizer && (
        <p className="text-[length:var(--text-subheading)] font-normal text-brand-white leading-normal">
          {event.organizer}
        </p>
      )}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 w-fit text-[length:var(--text-event-title)] font-semibold text-brand-white leading-normal">
          <span 
            onClick={() => onEventClick && onEventClick(event)}
            className="hover:underline transition-opacity cursor-pointer"
          >
            {event.title}
          </span>
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center group"
            aria-label={`Visit external link for ${event.title}`}
          >
            <ExternalLink className="w-4 h-4 text-brand-white/60 group-hover:text-brand-white transition-colors" />
          </a>
        </div>
        <div>
          <p
            ref={textRef}
            className={`text-[length:var(--text-p)] font-normal text-brand-white leading-[1.5] max-w-[80ch] ${
              !isExpanded ? "line-clamp-5 md:line-clamp-3" : ""
            }`}
          >
            {descriptionText}
          </p>
          
          {/* Mobile: Button and city side by side at bottom */}
          <div className="md:hidden flex items-center justify-between mt-1">
            {(isTruncated || isExpanded) ? (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[length:var(--text-subheading)] font-normal text-brand-white/70 hover:text-brand-white transition-colors underline leading-[21px] tracking-[-0.1504px]"
              >
                {isExpanded ? "view less" : "view more"}
              </button>
            ) : (
              <div></div>
            )}
            
            {event.city && (
              <p className="text-[length:var(--text-subheading)] font-normal text-brand-white leading-[21px] tracking-[-0.3008px]">
                ({event.city})
              </p>
            )}
          </div>
          
          {/* Desktop: Just the button */}
          {(isTruncated || isExpanded) && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden md:block text-[length:var(--text-subheading)] font-normal text-brand-white/70 hover:text-brand-white transition-colors underline mt-1"
            >
              {isExpanded ? "view less" : "view more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}