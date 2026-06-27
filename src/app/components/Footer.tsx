import { projectId } from '../utils/supabase/info';

interface FooterProps {
  onAboutClick?: () => void;
  onSuggestClick?: () => void;
  onNewsletterClick?: () => void;
}

export function Footer({ onAboutClick, onSuggestClick, onNewsletterClick }: FooterProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-baseline justify-between pb-[32px] pt-[16px] w-full text-[length:var(--text-p)] capitalize text-brand-white/60 font-normal mt-auto">
      <div className="flex gap-[20px] md:gap-[57px] items-center flex-wrap justify-center md:justify-start">
        <button 
          onClick={onAboutClick}
          className="hover:text-brand-white transition-colors hover:underline"
          style={{ fontFamily: "'Funnel Sans', sans-serif" }}
        >
          About
        </button>
        <a 
          href="https://forms.gle/GCyMvrPiiyXrToVQ8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-white transition-colors hover:underline"
          style={{ fontFamily: "'Funnel Sans', sans-serif" }}
        >
          Feedback
        </a>
        <button 
          onClick={onSuggestClick}
          className="hover:text-brand-white transition-colors hover:underline"
          style={{ fontFamily: "'Funnel Sans', sans-serif" }}
        >
          Suggest Events
        </button>
        <button 
          onClick={onNewsletterClick}
          className="hover:text-brand-white transition-colors hover:underline"
          style={{ fontFamily: "'Funnel Sans', sans-serif" }}
        >
          Newsletter
        </button>
        <a 
          href="https://runsnaps.notion.site"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-white transition-colors hover:underline"
          style={{ fontFamily: "'Funnel Sans', sans-serif" }}
        >
          Photo Albums
        </a>
      </div>
      
      <div className="mt-6 md:mt-0 hover:text-brand-white transition-colors" style={{ fontFamily: "'Funnel Sans', sans-serif" }}>
        Created by Max Nie <a href="https://www.instagram.com/leitothemax/" target="_blank" rel="noopener noreferrer" className="hover:underline">@leitothemax</a>
      </div>
    </div>
  );
}
