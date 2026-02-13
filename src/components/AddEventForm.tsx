import { useState } from 'react';
import { X, Check } from 'lucide-react';

interface AddEventFormProps {
  onClose: () => void;
  onEventAdded: () => void;
  projectId: string;
  publicAnonKey: string;
  onView404?: () => void;
}

export function AddEventForm({ onClose, onEventAdded, projectId, publicAnonKey, onView404 }: AddEventFormProps) {
  const [formData, setFormData] = useState({
    event_title: '',
    event_date: '',
    event_link: '',
    city: '',
    event_type: 'Social' as 'Social' | 'Race',
    event_organizer: '',
    event_description: '',
    submitter_name: '',
    submitter_email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/rest/v1/event_submission`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
            'apikey': publicAnonKey,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit event');
      }

      console.log('Event submission created successfully');
      onEventAdded();
      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting event:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit event');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-brand-blue border border-brand-white/30 rounded-[16px] max-w-[800px] w-full p-4 max-h-[90vh] overflow-y-auto z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[length:var(--text-h1)] text-brand-white font-semibold tracking-[-0.48px]">
            {isSuccess ? 'Thank You!' : 'Event Suggestion'}
          </h2>
          <button
            onClick={onClose}
            className="text-brand-white/60 hover:text-brand-white transition-colors p-3 hover:bg-brand-white/10 rounded-full"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center gap-6 min-h-[300px]">
             <div className="w-16 h-16 bg-brand-white rounded-full flex items-center justify-center text-brand-blue mb-2">
                <Check size={32} />
             </div>
             <div className="space-y-2">
               <h2 className="text-[length:var(--text-h2)] text-brand-white font-semibold">Thanks for your suggestion!</h2>
               <p className="text-[length:var(--text-p)] text-brand-white/80 max-w-md mx-auto">
                 We will review it shortly. Once approved, it will appear on the calendar.
               </p>
             </div>
             <button
               onClick={onClose}
               className="mt-4 px-8 py-3 bg-brand-white text-brand-blue rounded-full hover:bg-brand-white/90 transition-colors font-medium text-[length:var(--text-p)]"
             >
               Close
             </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Event Title */}
            <div className="flex flex-col gap-2">
              <label htmlFor="event_title" className="text-[length:var(--text-p)] text-brand-white leading-[1.4]">
                Event Title*
              </label>
              <input
                type="text"
                id="event_title"
                required
                value={formData.event_title}
                onChange={(e) => setFormData({ ...formData, event_title: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-brand-white/40 rounded-full text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-white/60"
                placeholder="Name"
              />
            </div>

            {/* Event Type */}
            <div className="flex flex-col gap-2">
              <label htmlFor="event_type" className="text-[length:var(--text-p)] text-brand-white leading-[1.4]">
                Event Type
              </label>
              <select
                id="event_type"
                value={formData.event_type}
                onChange={(e) => setFormData({ ...formData, event_type: e.target.value as 'Social' | 'Race' })}
                className="w-full px-4 py-3 bg-transparent border border-brand-white/40 rounded-full text-brand-white focus:outline-none focus:border-brand-white/60 appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%23D9D9D9' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
              >
                <option value="Social">Social Run</option>
                <option value="Race">Race (Timed Bib)</option>
              </select>
            </div>

            {/* Event Date */}
            <div className="flex flex-col gap-2">
              <label htmlFor="event_date" className="text-[length:var(--text-p)] text-brand-white leading-[1.4]">
                Date*
              </label>
              <input
                type="date"
                id="event_date"
                required
                value={formData.event_date}
                onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-brand-white/40 rounded-full text-brand-white focus:outline-none focus:border-brand-white/60"
              />
            </div>

            {/* Your Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="submitter_name" className="text-[length:var(--text-p)] text-brand-white leading-[1.4]">
                Your Name
              </label>
              <input
                type="text"
                id="submitter_name"
                value={formData.submitter_name}
                onChange={(e) => setFormData({ ...formData, submitter_name: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-brand-white/40 rounded-full text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-white/60"
                placeholder="Thank you"
              />
            </div>

            {/* Location/City */}
            <div className="flex flex-col gap-2">
              <label htmlFor="city" className="text-[length:var(--text-p)] text-brand-white leading-[1.4]">
                Location
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-brand-white/40 rounded-full text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-white/60"
                placeholder="Toronto, Scarborough, Mississauga..."
              />
            </div>

            {/* Your Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="submitter_email" className="text-[length:var(--text-p)] text-brand-white leading-[1.4]">
                Your Email*
              </label>
              <input
                type="email"
                id="submitter_email"
                required
                value={formData.submitter_email}
                onChange={(e) => setFormData({ ...formData, submitter_email: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-brand-white/40 rounded-full text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-white/60"
                placeholder="In case we need to reachout"
              />
            </div>

            {/* Event Link */}
            <div className="flex flex-col gap-2">
              <label htmlFor="event_link" className="text-[length:var(--text-p)] text-brand-white leading-[1.4]">
                Event Link*
              </label>
              <input
                type="url"
                id="event_link"
                required
                value={formData.event_link}
                onChange={(e) => setFormData({ ...formData, event_link: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-brand-white/40 rounded-full text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-white/60"
                placeholder="https://"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="md:col-span-2 text-red-400 text-[length:var(--text-subheading)]">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-3 py-3 bg-brand-white text-brand-blue rounded-sm hover:bg-brand-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-[length:var(--text-p)]"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Event'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
