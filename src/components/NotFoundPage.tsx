import imgPhoto from "figma:asset/3f00e63f0234536662c1d6eccdf882c6631b0a65.png";

interface NotFoundPageProps {
  onBackToHome?: () => void;
}

export function NotFoundPage({ onBackToHome }: NotFoundPageProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-blue flex flex-col">
      {/* Rotated Calendar Image Background */}
      <div 
        className="absolute flex items-center justify-center mix-blend-lighten"
        style={{
          left: 'calc(50% + 307.57px)',
          top: 'calc(50% + 0.14px)',
          transform: 'translate(-50%, -50%)',
          width: '989px',
          height: '1484px',
        }}
      >
        <div className="rotate-90">
          <div className="relative w-[1484px] h-[989px] rotate-180">
            <img 
              alt="Scattered calendar pages" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src={imgPhoto}
            />
          </div>
        </div>
      </div>

      {/* 404 Text Content */}
      <div 
        className="absolute flex flex-col gap-[8px] items-start justify-center text-brand-white"
        style={{
          left: 'calc(50% - 407.43px)',
          top: 'calc(50% - 0.36px)',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="flex flex-col h-[94px] justify-center w-[335px]">
          <p 
            className="text-[40px] leading-[32px] tracking-[-1.25px] text-left"
            style={{ fontFamily: "'Vina Sans', sans-serif" }}
          >
            oops! page not found
          </p>
        </div>
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="mt-4 px-6 py-3 bg-brand-white text-brand-blue rounded hover:bg-brand-white/90 transition-colors"
          >
            Back to Home
          </button>
        )}
      </div>

      {/* Photo Credit - Bottom Right */}
      <div className="absolute bottom-0 right-0 bg-brand-blue flex items-center justify-center p-[8px]">
        <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-center text-nowrap text-brand-white">
          <span>Photo by </span>
          <a 
            className="underline decoration-solid cursor-pointer hover:opacity-80 transition-opacity" 
            href="https://unsplash.com/@purzlbaum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claudio Schwarz
          </a>
          <span> on </span>
          <a 
            className="underline decoration-solid cursor-pointer hover:opacity-80 transition-opacity" 
            href="https://unsplash.com/photos/white-and-brown-printer-paper-TEF3woGG3b0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
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