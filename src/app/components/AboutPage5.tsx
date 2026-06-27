import { Footer } from './Footer';
import imgImage151 from "figma:asset/906ad088b942773fac8296d53a23f1c97c8c5f5d.png";
import imgImage149 from "figma:asset/68e5c7c8f7711b48a6a5493466dec5ea6cd07117.png";
import imgImage155 from "figma:asset/7af666c36f6530f741fc490ad049db5163f2b54c.png";
import imgImage150 from "figma:asset/d5e389064278186581e29f26b5a0a531b29cc156.png";
import imgImage156 from "figma:asset/fcd64027c75809f9879c6297db79cdeac2043943.png";
import imgImage154 from "figma:asset/92de032dfb9b45c76c13e7faa39c3cdbd3ce3194.png";
import imgImage152 from "figma:asset/ec5db550a2ecf21f957443c2512ebd811485d667.png";
import imgImage153 from "figma:asset/bdc534bc27bd87fb58efe63aa18236a1891cc94d.png";
import imgImage157 from "figma:asset/fe6f482de8affa76409926caae9714ef30e8a733.png";

interface AboutPage5Props {
  onBack?: () => void;
}

export function AboutPage5({ onBack }: AboutPage5Props) {
  return (
    <div className="bg-brand-blue text-brand-white w-full h-full font-sans flex flex-col xl:overflow-hidden overflow-y-auto">
      <div className="flex-1 w-full max-w-7xl mx-auto px-[0px] md:px-12 py-[24px] flex flex-col xl:min-h-0 pt-[0px] pr-[48px] pb-[24px] pl-[48px] my-[0px]">
        
        <div className="flex-1 flex flex-col lg:flex-row gap-8 items-center justify-center xl:min-h-0">
          
          {/* Left Text Content */}
          <div className="flex flex-col gap-[25px] w-full max-w-[560px] xl:max-w-none lg:w-1/3 z-10 xl:overflow-y-auto xl:max-h-full p-[0px] shrink-0 self-start font-['Funnel_Sans',sans-serif] text-[length:var(--text-p)] text-brand-white font-[weight:var(--font-weight-regular)] leading-[24px]">
            
            {/* PROJECT */}
            <div className="flex flex-col items-start w-full">
              <p className="uppercase w-[85px] mb-0">PROJECT</p>
              <p className="w-full">for the shared experience</p>
            </div>

            {/* PURPOSE */}
            <div className="flex flex-col items-start w-full">
              <p className="uppercase w-[85px] mb-0">PURPOSE</p>
              <div className="w-full">
                <p className="mb-0">The event calendar gathers runs, races, and community events—no algorithm, just what’s worth showing up for.</p>
                <p>The photo album directory preserves the moments we’ve shared.</p>
              </div>
            </div>

            {/* WHY */}
            <div className="flex flex-col items-start w-full">
              <p className="uppercase w-[85px] mb-0">WHY</p>
              <div className="w-full flex flex-col gap-4">
                <p className="mb-0">I had been struggling with doomscrolling. It pulled me away from myself, left me unfocused and disconnected, and by the fall of 2025, I’d reached my limit.</p>
                <p className="mb-0">So I tried something simple but hard—I quietly went offline for a week. That week turned into weeks, then months. It wasn’t easy or perfect, but I felt less anxious and more present. The only problem was FOMO. So much of my connection to the running community lives on Instagram.</p>
                <p>I built this calendar to solve that—a simple way to stay connected without staying glued to the feed. One less reason to scroll.</p>
              </div>
            </div>
          </div>

          {/* Right Image Grid - Fills remaining height */}
          <div className="lg:w-2/3 w-full xl:h-full h-auto min-h-[300px]">
            <div className="grid grid-cols-3 xl:grid-rows-[1fr_1fr_1fr] grid-rows-[minmax(240px,auto)_minmax(240px,auto)_minmax(240px,auto)] gap-3 xl:h-full h-auto w-full">
              {/* Row 1 */}
              <div className="col-span-2 rounded-[32px] overflow-hidden bg-[var(--theme-green)] mix-blend-normal">
                <img src={imgImage151} alt="Runners" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="col-span-1 rounded-[32px] overflow-hidden bg-[var(--theme-green)] mix-blend-normal">
                 <img src={imgImage149} alt="Runners" className="w-full h-full object-cover grayscale" />
              </div>

              {/* Row 2 */}
              <div className="col-span-1 rounded-[32px] overflow-hidden bg-[var(--theme-green)] mix-blend-normal">
                <img src={imgImage150} alt="Runners" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="col-span-2 rounded-[32px] overflow-hidden bg-[var(--theme-green)] mix-blend-normal">
                <img src={imgImage155} alt="Runners" className="w-full h-full object-cover grayscale" />
              </div>

              {/* Row 3 (Formerly Row 4) */}
              <div className="col-span-1 rounded-[32px] overflow-hidden bg-[var(--theme-green)] mix-blend-normal">
                <img src={imgImage153} alt="Runners" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="col-span-1 rounded-[32px] overflow-hidden bg-[var(--theme-green)] mix-blend-normal">
                <img src={imgImage157} alt="Runners" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="col-span-1 rounded-[32px] overflow-hidden bg-[var(--theme-green)] mix-blend-normal">
                <img src={imgImage152} alt="Runners" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 shrink-0 m-[0px]">
          <Footer onAboutClick={undefined} onSuggestClick={undefined} />
        </div>
      </div>
    </div>
  );
}
