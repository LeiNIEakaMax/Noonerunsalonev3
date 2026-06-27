function Paragraph() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-[42.296px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#30224e] text-[12px] top-[0.54px]">Sunday</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[17.999px] opacity-50 relative shrink-0 w-[44.05px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#30224e] text-[12px] top-[0.54px] uppercase">MARCH</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.998px] items-start left-0 top-0 w-[44.05px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[31.755px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Stylish:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#30224e] text-[87px] top-[10.54px]">1</p>
    </div>
  );
}

function DateDisplay() {
  return (
    <div className="h-[144px] relative shrink-0 w-[73px]" data-name="DateDisplay">
      <Container />
      <Paragraph2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
        <p className="css-ew64yg decoration-solid font-['Funnel_Sans:SemiBold',sans-serif] font-semibold leading-[33px] relative shrink-0 text-[#30224e] text-[22px] tracking-[-0.2578px] underline">Chilly Half Marathon</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex h-[32.999px] items-center relative shrink-0" data-name="Link">
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
        <Link />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <p className="css-4hzbpn font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#30224e] text-[14px] tracking-[-0.1504px] w-[705px]">{`Join us on the first Sunday in March for Ontario's Premier Racing Event, The Chilly Half Marathon. This fast, flat and certified course will take you along Burlington's Beautiful downtown and waterfront.`}</p>
      </div>
    </div>
  );
}

function EventItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[54.002px] items-start min-h-px min-w-px relative" data-name="EventItem">
      <Frame />
      <Paragraph3 />
    </div>
  );
}

export default function EventGroup() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative size-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(48,34,78,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay />
      <EventItem />
      <p className="css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#30224e] text-[14px] tracking-[-0.1504px]">(Toronto)</p>
    </div>
  );
}