import svgPaths from "./svg-jznrru6mia";
import imgImageNewYearsRunToronto from "figma:asset/cbb500d97a058e030e8e7d5f2ca54503b804ff3c.png";

function Paragraph() {
  return (
    <div className="flex-[1_0_0] h-[32.999px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:SemiBold',sans-serif] font-semibold leading-[33px] left-0 text-[#1f4926] text-[22px] top-[-0.31px]">{`New Year's Run Toronto`}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[5.21%_32.31%_32.31%_5.21%]" data-name="Group">
      <div className="absolute inset-[5.21%_32.31%_32.31%_5.21%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5746 14.5746">
            <path d={svgPaths.p16073940} id="Vector" stroke="var(--stroke-0, #1F4926)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.08209" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[5.21%_32.31%_32.31%_5.21%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5746 14.5746">
            <path d={svgPaths.p2e2be040} id="Vector" stroke="var(--stroke-0, #1F4926)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.08209" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="h-[19.994px] overflow-clip relative shrink-0 w-full" data-name="CloseIcon">
      <Group />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[19.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <CloseIcon />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[365.006px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph />
        <Button />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20.998px] relative shrink-0 w-[104.579px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1f4926] text-[14px] top-[-0.46px]">January 11, 2026</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20.998px] relative shrink-0 w-[56.575px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1f4926] text-[14px] top-[-0.46px] w-[57px]">(Toronto)</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20.998px] relative shrink-0 w-[365.006px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.996px] h-[77.993px] items-start left-[24px] top-[24px] w-[365.006px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20.998px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1f4926] text-[14px] top-[-0.46px]">A popular resolution run to kick off the year in North York.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[386.022px] items-start left-[24px] overflow-clip top-[125.99px] w-[365.006px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[23.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d7ddd8] text-[16px] top-[-0.69px]">More Info</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#1f4926] content-stretch flex flex-col h-[39.994px] items-start left-[210.5px] pl-[53.347px] pr-[53.353px] pt-[7.999px] rounded-[9999px] top-[536px] w-[178.504px]" data-name="Link">
      <Paragraph4 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[599.994px] left-[487px] overflow-clip top-0 w-[412.999px]" data-name="Container">
      <Container1 />
      <Container4 />
      <Link />
    </div>
  );
}

function ImageNewYearsRunToronto() {
  return (
    <div className="absolute h-[599.994px] left-0 top-0 w-[486.995px]" data-name="Image (New Year\'s Run Toronto)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNewYearsRunToronto} />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#1f4926] h-[599.994px] left-0 mix-blend-screen opacity-80 top-0 w-[486.995px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[599.994px] left-0 top-0 w-[486.995px]" data-name="Container">
      <ImageNewYearsRunToronto />
      <Container6 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[151.298px] left-[-32px] top-[480.69px] w-[544.994px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Funnel_Display:SemiBold',sans-serif] font-semibold leading-[75.65px] left-0 text-[89px] text-white top-[-0.08px] w-[529px]">{`New Year's Run Toronto`}</p>
    </div>
  );
}

export default function EventDetailModal() {
  return (
    <div className="bg-[#d7ddd8] relative size-full" data-name="EventDetailModal">
      <Container />
      <Container5 />
      <Paragraph5 />
    </div>
  );
}