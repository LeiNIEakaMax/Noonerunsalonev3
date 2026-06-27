function Frame1() {
  return (
    <div className="content-stretch flex gap-[57px] items-center relative shrink-0">
      <p className="relative shrink-0">about</p>
      <p className="relative shrink-0">Feedback</p>
      <p className="relative shrink-0">Suggest Events</p>
      <p className="relative shrink-0">Newsletter</p>
      <p className="relative shrink-0">Photo Albums</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="capitalize content-stretch flex font-['Funnel_Sans:Regular',sans-serif] font-normal items-baseline justify-between leading-[normal] pb-[32px] pt-[16px] relative size-full text-[#591c2f] text-[16px]">
      <Frame1 />
      <p className="relative shrink-0">Created by Max Nie @leitothmax</p>
    </div>
  );
}