import { useState } from 'react';
import { X } from 'lucide-react';
import type { EventType } from '../App';

interface AddEventFormProps {
  onClose: () => void;
  onEventAdded: () => void;
  projectId: string;
  publicAnonKey: string;
  onView404?: () => void;
}

export function AddEventForm({ onClose, onEventAdded, projectId, publicAnonKey, onView404 }: AddEventFormProps) {
  const [formData, setFormData] = useState({
    eventTitle: '',
    eventDate: '',
    eventDescription: '',
    type: 'social' as EventType,
    link: '',
    eventOrganizer: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-36165629/events`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Failed to create event');
      }

      console.log('Event created successfully');
      onEventAdded();
      onClose();
    } catch (err) {
      console.error('Error creating event:', err);
      setError(err instanceof Error ? err.message : 'Failed to create event');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-brand-blue border border-brand-white/20 rounded-lg max-w-md w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[20px] text-brand-white">Add New Event</h2>
          <button
            onClick={onClose}
            className="text-brand-white/60 hover:text-brand-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Event Title */}
          <div>
            <label htmlFor="eventTitle" className="block text-[14px] text-brand-white mb-2">
              Event Title *
            </label>
            <input
              type="text"
              id="eventTitle"
              required
              value={formData.eventTitle}
              onChange={(e) => setFormData({ ...formData, eventTitle: e.target.value })}
              className="w-full px-3 py-2 bg-brand-blue border border-brand-white/20 rounded text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-white/40"
              placeholder="e.g., High Park Morning Run"
            />
          </div>

          {/* Event Date */}
          <div>
            <label htmlFor="eventDate" className="block text-[14px] text-brand-white mb-2">
              Event Date *
            </label>
            <input
              type="date"
              id="eventDate"
              required
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              className="w-full px-3 py-2 bg-brand-blue border border-brand-white/20 rounded text-brand-white focus:outline-none focus:border-brand-white/40"
            />
          </div>

          {/* Event Type */}
          <div>
            <label htmlFor="type" className="block text-[14px] text-brand-white mb-2">
              Event Type *
            </label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as EventType })}
              className="w-full px-3 py-2 bg-brand-blue border border-brand-white/20 rounded text-brand-white focus:outline-none focus:border-brand-white/40"
            >
              <option value="social">Social</option>
              <option value="race">Race</option>
            </select>
          </div>

          {/* Event Organizer */}
          <div>
            <label htmlFor="eventOrganizer" className="block text-[14px] text-brand-white mb-2">
              Event Organizer *
            </label>
            <input
              type="text"
              id="eventOrganizer"
              required
              value={formData.eventOrganizer}
              onChange={(e) => setFormData({ ...formData, eventOrganizer: e.target.value })}
              className="w-full px-3 py-2 bg-brand-blue border border-brand-white/20 rounded text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-white/40"
              placeholder="e.g., Toronto Running Club"
            />
          </div>

          {/* Link */}
          <div>
            <label htmlFor="link" className="block text-[14px] text-brand-white mb-2">
              Link *
            </label>
            <input
              type="url"
              id="link"
              required
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              className="w-full px-3 py-2 bg-brand-blue border border-brand-white/20 rounded text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-white/40"
              placeholder="https://instagram.com/..."
            />
          </div>

          {/* Event Description */}
          <div>
            <label htmlFor="eventDescription" className="block text-[14px] text-brand-white mb-2">
              Event Description
            </label>
            <textarea
              id="eventDescription"
              value={formData.eventDescription}
              onChange={(e) => setFormData({ ...formData, eventDescription: e.target.value })}
              className="w-full px-3 py-2 bg-brand-blue border border-brand-white/20 rounded text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-white/40 min-h-[80px]"
              placeholder="e.g., Easy 5K social run through High Park trails"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-400 text-[14px]">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-brand-white/20 rounded text-brand-white hover:bg-brand-white/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-brand-white text-brand-blue rounded hover:bg-brand-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Adding...' : 'Add Event'}
            </button>
          </div>
          
          {/* View 404 Button */}
          {onView404 && (
            <div className="pt-2 border-t border-brand-white/20">
              <button
                type="button"
                onClick={onView404}
                className="w-full px-4 py-2 border border-brand-white/20 rounded text-brand-white hover:bg-brand-white/10 transition-colors"
              >
                View 404
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}