function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start mb-[-23px] relative shrink-0 text-[12px] w-full">
      <p className="relative shrink-0 w-full">Next Monday</p>
      <p className="opacity-50 relative shrink-0 uppercase w-full">December</p>
    </div>
  );
}

export default function DateV() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] not-italic pb-[23px] pt-0 px-0 relative size-full text-[#fefefe]" data-name="date-v4">
      <Frame />
      <p className="font-['Vina_Sans:Regular',sans-serif] relative shrink-0 text-[87px] w-full">31</p>
    </div>
  );
}