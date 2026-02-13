import imgPhoto from "figma:asset/db9decd47b4e7ebd53bdee4f39a5e4e662b73128.png";

interface NotFoundPageProps {
  onBackToHome?: () => void;
}

export function NotFoundPage({ onBackToHome }: NotFoundPageProps) {
  return (
    <div className="fixed inset-0 overflow-hidden bg-brand-blue flex items-center justify-center">
      {/* Background Image */}
      <img 
        alt="Scattered calendar pages" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgPhoto}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col gap-[32px] items-start justify-center text-brand-white px-[32px]">
        <h1 
          className="text-[length:var(--text-h1)] leading-tight tracking-[-1.25px] uppercase"
          style={{ fontFamily: "'Funnel Sans', sans-serif" }}
        >
          OOPS! PAGE NOT FOUND
        </h1>
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="bg-brand-white hover:bg-brand-white/90 transition-colors px-[32px] py-[12px] rounded-[8px]"
          >
            <span 
              className="text-brand-blue text-[length:var(--text-p)] font-medium tracking-[-0.3125px]"
              style={{ fontFamily: "'Funnel Sans', sans-serif" }}
            >
              Back to Home
            </span>
          </button>
        )}
      </div>

      {/* Photo Credit - Bottom Right */}
      <div className="absolute bottom-[16px] right-[16px] z-20">
        <p 
          className="text-[length:var(--text-subheading)] leading-[20px] text-brand-white/80"
          style={{ fontFamily: "'Funnel Sans', sans-serif" }}
        >
          <span>Photo by </span>
          <a 
            className="underline hover:opacity-80 transition-opacity" 
            href="https://unsplash.com/@purzlbaum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claudio Schwarz
          </a>
          <span> on </span>
          <a 
            className="underline hover:opacity-80 transition-opacity" 
            href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
}