import imgPhoto from "figma:asset/3f00e63f0234536662c1d6eccdf882c6631b0a65.png";

interface NotFoundPageProps {
  onBackToHome?: () => void;
}

export function NotFoundPage({ onBackToHome }: NotFoundPageProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-blue flex flex-col">
      {/* Rotated Calendar Image Background */}
      <div 
        className="absolute flex items-center justify-center mix-blend-lighten right-0 top-1/2 -translate-y-1/2"
        style={{
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
        className="absolute flex flex-col gap-[54.994px] items-start justify-center text-brand-white bg-brand-blue left-0 top-1/2 -translate-y-1/2 pb-[30px] pl-[32px] pr-[32px] pt-[32px] p-[32px]"
      >
        <div className="relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
            <p 
              className="leading-[32px] not-italic relative shrink-0 text-brand-white text-[40px] text-nowrap tracking-[-1.25px]"
              style={{ fontFamily: "'Vina Sans', sans-serif" }}
            >
              oops! page not found
            </p>
          </div>
        </div>
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="bg-brand-white h-[47.991px] relative rounded-[4px] shrink-0 w-[149.766px] hover:opacity-90 transition-opacity"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-normal leading-[24px] left-1/2 not-italic text-brand-blue text-[16px] text-center text-nowrap top-1/2 tracking-[-0.3125px] -translate-x-1/2 -translate-y-1/2">
                Back to Home
              </p>
            </div>
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