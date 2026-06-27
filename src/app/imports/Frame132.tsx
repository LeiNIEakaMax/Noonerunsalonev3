function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="relative shrink-0 uppercase w-[85px]">Project</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">for the shared experience</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="relative shrink-0 uppercase w-[85px]">Purpose</p>
      <div className="min-w-full relative shrink-0 w-[min-content]">
        <p className="mb-0">{`The event calendar gathers runs, races, and community events—no algorithm, just what’s worth showing up for. `}</p>
        <p>The photo album directory preserves the moments we’ve shared.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="relative shrink-0 uppercase w-[85px]">Why</p>
      <div className="min-w-full relative shrink-0 w-[min-content]">
        <p className="mb-0">I had been struggling with doomscrolling. It pulled me away from myself, left me unfocused and disconnected, and by the fall of 2025, I’d reached my limit.</p>
        <p className="mb-0">{`So I tried something simple but hard—I quietly went offline for a week. That week turned into weeks, then months. It wasn’t easy or perfect, but I felt less anxious and more present. The only problem was FOMO. So much of my connection to the running community lives on Instagram. `}</p>
        <p>I built this calendar to solve that—a simple way to stay connected without staying glued to the feed. One less reason to scroll.</p>
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Funnel_Sans:Regular',sans-serif] font-normal gap-[25px] items-start leading-[24px] relative size-full text-[#1e529a] text-[16px] whitespace-pre-wrap">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}