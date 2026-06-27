import svgPaths from "./svg-ma27gsoh6a";
import imgImageUndaXTatsurosBrickBreakfast from "figma:asset/ab991496893eb618f55aa22a555d32b68a0a8cf3.png";

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-['Funnel_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#1f4926] text-[22px] w-[254px] whitespace-pre-wrap">{`ÜNDA x Tatsuro's: Brick & Breakfast`}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[5.21%_32.31%_32.31%_5.21%]" data-name="Group">
      <div className="absolute inset-[5.21%_32.31%_32.31%_5.21%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5726 14.5726">
            <path d={svgPaths.p33c53f80} id="Vector" stroke="var(--stroke-0, #1F4926)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.08181" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[5.21%_32.31%_32.31%_5.21%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5726 14.5726">
            <path d={svgPaths.p1515cf00} id="Vector" stroke="var(--stroke-0, #1F4926)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.08181" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="h-[19.991px] overflow-clip relative shrink-0 w-full" data-name="CloseIcon">
      <Group />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[19.991px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <CloseIcon />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[313.502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Paragraph />
        <Button />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20.997px] relative shrink-0 w-[134.474px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1f4926] text-[18px] top-[0.21px]">January 31, 2026</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20.997px] relative shrink-0 w-[72.743px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1f4926] text-[18px] top-[0.21px] w-[73px] whitespace-pre-wrap">(Toronto)</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20.997px] relative shrink-0 w-[313.502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[313.502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[21px] min-h-px min-w-px relative text-[#1f4926] text-[18px] whitespace-pre-wrap">{`In collaboration with the homies at Tatsuro's Join us for a full body workout at ÜNDA. Join us for a full body workout at ÜNDA. The session will be run-centric and lead into the second part of this event, a 5km run.`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[21px] min-h-px min-w-px relative text-[#1f4926] text-[18px] whitespace-pre-wrap">Photo by photographer name @photographer</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-[313.502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20.997px] items-start relative w-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[361.496px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.997px] items-start pl-[23.997px] py-[23.997px] relative w-full">
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

function ImageUndaXTatsurosBrickBreakfast() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[445px] left-1/2 top-[calc(50%-0.49px)] w-[361px]" data-name="Image (ÜNDA x Tatsuro\'s: Brick & Breakfast)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageUndaXTatsurosBrickBreakfast} />
    </div>
  );
}

function Container6() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1f4926] h-[444.764px] left-1/2 mix-blend-screen opacity-80 top-[calc(50%-0.61px)] w-[361px]" data-name="Container" />;
}

function EventDetailModal1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[361px]" data-name="EventDetailModal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ImageUndaXTatsurosBrickBreakfast />
        <Container6 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[69.165px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1f4926] text-[16px] top-[-0.01px]">More Info</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[39.995px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.006px] relative size-full">
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#d7ddd8] flex-[1_0_0] h-[39.995px] min-h-px min-w-px relative rounded-[9999px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-[24px] h-[39.995px] left-[24px] w-[313.502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[160.75px] relative size-full">
        <Link />
      </div>
    </div>
  );
}

function EventDetailModal() {
  return (
    <div className="flex-[1_0_0] h-[599.994px] min-h-px min-w-px relative" data-name="EventDetailModal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
        <EventDetailModal1 />
        <Container7 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#d7ddd8] content-stretch flex items-start relative size-full" data-name="Container">
      <EventDetailModal />
    </div>
  );
}