import { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface NewsletterModalProps {
  onClose: () => void;
}

export function NewsletterModal({ onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8ddba6eb/newsletter`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.details || errorData.error || 'Failed to subscribe');
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-[600px] bg-brand-blue rounded-[16px] overflow-hidden shadow-xl z-10 p-[16px] md:p-[32px] border-[0.769px] border-brand-white/30">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-white/60 hover:text-brand-white transition-colors rounded-full hover:bg-brand-white/10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h2 
              className="text-[32px] font-semibold text-brand-white tracking-[-0.48px] leading-[48px]"
              style={{ fontFamily: "'Funnel Sans', sans-serif" }}
            >
              Stay in the loop
            </h2>
            <p 
              className="text-[16px] text-brand-white leading-[22.4px]"
              style={{ fontFamily: "'Funnel Sans', sans-serif" }}
            >
              I’m still working on the newsletter. Subscribe now to be the first to know :)
            </p>
          </div>

          {status === 'success' ? (
            <div className="py-8 text-center bg-brand-white/10 rounded-[16px]">
              <p className="text-brand-white font-semibold text-lg">Thanks for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[60px] px-[16px] py-[12px] bg-transparent border-[0.769px] border-brand-white/40 rounded-full text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-white focus:ring-1 focus:ring-brand-white transition-all"
                  style={{ fontFamily: "'Funnel Sans', sans-serif" }}
                  required
                />
              </div>

              {errorMessage && (
                <p className="text-red-300 text-sm px-2">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[48px] bg-brand-white text-brand-blue rounded-[4px] font-normal text-[16px] hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Funnel Sans', sans-serif" }}
              >
                {isSubmitting ? <Loader2 className="animate-spin text-brand-blue" /> : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
