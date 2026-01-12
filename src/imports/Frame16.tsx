export default function Frame() {
  return (
    <div className="bg-[#591c2f] content-stretch flex items-center justify-center p-[8px] relative size-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3125px]">
        <span>{`Photo by `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://unsplash.com/@purzlbaum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-white" href="https://unsplash.com/@purzlbaum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Claudio Schwarz
          </span>
        </a>
        <span>{` on `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://unsplash.com/photos/white-and-brown-printer-paper-TEF3woGG3b0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-white" href="https://unsplash.com/photos/white-and-brown-printer-paper-TEF3woGG3b0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </span>
        </a>
      </p>
    </div>
  );
}