function Paragraph() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Vina_Sans:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#fefefe] text-[40px] text-nowrap tracking-[-1.25px]">oops! page not found</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fefefe] h-[47.991px] relative rounded-[4px] shrink-0 w-[149.766px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[75.5px] not-italic text-[#591c2f] text-[16px] text-center text-nowrap top-[11.5px] tracking-[-0.3125px] translate-x-[-50%]">Back to Home</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#591c2f] content-stretch flex flex-col gap-[54.994px] items-start justify-center pb-0 pl-[31.998px] pr-[32px] pt-[30.999px] relative size-full" data-name="Container">
      <Paragraph />
      <Button />
    </div>
  );
}