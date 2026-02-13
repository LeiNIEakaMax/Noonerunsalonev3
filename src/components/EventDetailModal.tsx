import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { Event } from '../App';
import svgPaths from '../imports/svg-o4wz1nx3e0';
import placeholderImage from 'figma:asset/cbb500d97a058e030e8e7d5f2ca54503b804ff3c.png';
import { createPortal } from 'react-dom';

interface EventDetailModalProps {
  event: Event | null;
  onClose: () => void;
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16">
      <g>
        <path d={svgPaths.p30f0ac80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66617" />
        <path d={svgPaths.p3b673b60} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66617" />
      </g>
    </svg>
  );
}

export function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  if (!event) return null;

  const formatDate = (dateStr: string) => {
    // Parse date string as local date to avoid timezone offset issues
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const modalContent = (
    <AnimatePresence>
      {event && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="w-full max-w-[900px] h-[600px] max-h-[90vh] bg-brand-blue flex relative pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side - Image */}
              <div className="w-[487px] h-full relative overflow-visible shrink-0 hidden md:block">
                <img 
                  src={event.image_path || placeholderImage} 
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                />
                {/* Color tint overlay - uses dark theme color in light mode, light theme color in dark mode */}
                <div className="absolute inset-0 bg-[var(--brand-blue)] dark:bg-[var(--brand-white)] mix-blend-screen opacity-80 pointer-events-none" />
              </div>

              {/* Large Title Overlay - Inside modal container, outside blend mode */}
              <div className="absolute bottom-[-32px] left-[-32px] w-[545px] h-[152px] flex flex-col justify-end pointer-events-none hidden md:flex">
                <p 
                  className="text-[length:var(--text-date-large)] font-semibold leading-[0.85] text-white"
                  style={{ fontFamily: "'Funnel Display', sans-serif" }}
                >
                  {event.title}
                </p>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 flex flex-col h-full md:overflow-hidden overflow-y-auto">
                <div className="flex flex-col h-full">
                  <div className="flex flex-col gap-[24px] p-[24px] md:flex-1 md:overflow-y-auto shrink-0">
                    {/* Header */}
                    <div className="flex flex-col gap-[24px] shrink-0">
                      <div className="flex gap-[24px] items-center justify-between w-full">
                        <p 
                          className="flex-1 text-[length:var(--text-event-title)] font-semibold leading-normal text-brand-white"
                          style={{ 
                            fontFamily: "'Funnel Sans', sans-serif"
                          }}
                        >
                          {event.title}
                        </p>
                        <button
                          onClick={onClose}
                          className="w-[19.994px] h-[19.994px] shrink-0 text-brand-white hover:opacity-70 transition-opacity"
                          aria-label="Close"
                        >
                          <CloseIcon className="w-full h-full" />
                        </button>
                      </div>

                      {/* Date and Location */}
                      <div 
                        className="flex items-center justify-between w-full text-[length:var(--text-subheading)] font-normal leading-[21px] text-brand-white"
                        style={{ 
                          fontFamily: "'Funnel Sans', sans-serif"
                        }}
                      >
                        <p>{formatDate(event.date)}</p>
                        <p>({event.location})</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div 
                      className="text-[length:var(--text-subheading)] font-normal leading-[21px] text-brand-white"
                      style={{ 
                        fontFamily: "'Funnel Sans', sans-serif"
                      }}
                    >
                      {event.description ? (
                        <div className="space-y-[21px]">
                          {event.description.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                        </div>
                      ) : (
                        <p>No description available.</p>
                      )}

                      {/* Photo Credit */}
                      {event.profile_url ? (
                        <p className="mt-[21px]">
                          Photo by{' '}
                          <a 
                            href={event.profile_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity underline"
                          >
                            {event.display_name || 'photographer name'} {event.handle ? (event.handle.startsWith('@') ? event.handle : `@${event.handle}`) : '@photographer'}
                          </a>
                        </p>
                      ) : (
                        event.display_name && (
                          <p className="mt-[21px]">
                            Photo by {event.display_name} {event.handle ? (event.handle.startsWith('@') ? event.handle : `@${event.handle}`) : ''}
                          </p>
                        )
                      )}
                    </div>
                  </div>

                  {/* Desktop Buttons (Hidden on Mobile) */}
                  <div className="hidden md:flex gap-[8px] shrink-0 p-[24px] pt-0">
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 h-[40px] bg-brand-white rounded-[9999px] hover:opacity-90 transition-opacity"
                      >
                        <div className="flex items-center justify-center p-[12px] h-full">
                          <p 
                            className="text-[length:var(--text-p)] font-normal text-brand-blue"
                            style={{ 
                              fontFamily: "'Funnel Sans', sans-serif"
                            }}
                          >
                            More Info
                          </p>
                        </div>
                      </a>
                    )}
                  </div>

                  {/* Mobile Image Section (Hidden on Desktop) */}
                  <div className="flex-1 relative w-full min-h-[200px] md:hidden">
                    <img 
                      src={event.image_path || placeholderImage} 
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-[var(--brand-blue)] dark:bg-[var(--brand-white)] mix-blend-screen opacity-80 pointer-events-none" />
                    
                    {event.link && (
                      <div className="absolute bottom-[24px] right-[24px]">
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-[32px] h-[40px] bg-brand-white rounded-[9999px] hover:opacity-90 transition-opacity shadow-lg"
                        >
                          <p 
                            className="text-[length:var(--text-p)] font-normal text-brand-blue"
                            style={{ 
                              fontFamily: "'Funnel Sans', sans-serif"
                            }}
                          >
                            More Info
                          </p>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}