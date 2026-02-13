import svgPaths from "./svg-mcu3g83v90";

function Paragraph() {
  return (
    <div className="h-[18.001px] relative shrink-0 w-[50.666px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#1c5359] text-[12px] top-[0.59px]">Saturday</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-50 relative w-[62.053px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#1c5359] text-[12px] top-[0.59px] uppercase">FEBRUARY</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.003px] items-start left-0 top-0 w-[62.053px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[130.496px] left-0 top-[13.01px] w-[72.992px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Stylish:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#1c5359] text-[87px] top-[10.45px]">21</p>
    </div>
  );
}

function DateDisplay() {
  return (
    <div className="absolute h-[143.503px] left-0 top-0 w-[103.994px]" data-name="DateDisplay">
      <Container />
      <Paragraph2 />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] not-italic relative shrink-0 text-[#1c5359] text-[22px] tracking-[-0.2578px]">Move Your Paws</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[13.509px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5088 13.5088">
        <g id="Icon">
          <path d={svgPaths.p22c34140} id="Vector" stroke="var(--stroke-0, #1C5359)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.12574" />
          <path d={svgPaths.p3d3bdd40} id="Vector_2" stroke="var(--stroke-0, #1C5359)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.12574" />
          <path d={svgPaths.p29aa6980} id="Vector_3" stroke="var(--stroke-0, #1C5359)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.12574" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative w-full">
        <Text />
        <Icon />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[105px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal h-full leading-[21px] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c5359] text-[14px] text-ellipsis tracking-[-0.1504px]">The Move Your Paws for the Polar Bear Cause Run/Walk is a family-friendly event supporting polar bear conservation. Open to all ages and abilities, it combines fitness and fundraising, with proceeds benefiting the Toronto Zoo’s animal enrichment programs and conservation efforts for polar bears and Arctic wolves.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[20.999px] relative shrink-0 w-[66.049px]" data-name="Button">
      <p className="absolute css-ew64yg decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[33px] not-italic text-[14px] text-[rgba(28,83,89,0.7)] text-center top-[-0.01px] tracking-[-0.1504px] translate-x-[-50%] underline">view more</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20.999px] relative shrink-0 w-[58.584px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1c5359] text-[14px] top-[-0.01px] tracking-[-0.3008px] w-[59px]">(Toronto)</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Button />
      <Paragraph4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative size-full">
        <Paragraph3 />
        <Frame />
      </div>
    </div>
  );
}

function EventItem() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link />
        <Container2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[154.591px] items-start left-[103.99px] top-0 w-[233.349px]" data-name="Container">
      <EventItem />
    </div>
  );
}

function EventGroup() {
  return (
    <div className="h-[171.383px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(28,83,89,0.2)] border-b-[0.794px] border-solid inset-0 pointer-events-none" />
      <DateDisplay />
      <Container1 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18.001px] relative shrink-0 w-[50.666px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#1c5359] text-[12px] top-[0.59px]">Saturday</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-50 relative w-[62.053px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#1c5359] text-[12px] top-[0.59px] uppercase">FEBRUARY</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.003px] items-start left-0 top-0 w-[62.053px]" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[130.496px] left-0 top-[13.01px] w-[72.992px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Stylish:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#1c5359] text-[87px] top-[10.45px]">1</p>
    </div>
  );
}

function DateDisplay1() {
  return (
    <div className="absolute h-[143.503px] left-0 top-0 w-[103.994px]" data-name="DateDisplay">
      <Container3 />
      <Paragraph7 />
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] not-italic relative shrink-0 text-[#1c5359] text-[22px] tracking-[-0.2578px]">Chilly Half Marathon</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[13.509px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5088 13.5088">
        <g id="Icon">
          <path d={svgPaths.p22c34140} id="Vector" stroke="var(--stroke-0, #1C5359)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.12574" />
          <path d={svgPaths.p3d3bdd40} id="Vector_2" stroke="var(--stroke-0, #1C5359)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.12574" />
          <path d={svgPaths.p29aa6980} id="Vector_3" stroke="var(--stroke-0, #1C5359)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.12574" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative w-full">
        <Text1 />
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[105px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal h-full leading-[21px] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c5359] text-[14px] text-ellipsis tracking-[-0.1504px]">A major early-season race in Burlington known for fast courses.</p>
    </div>
  );
}

function Button1() {
  return <div className="h-[20.999px] shrink-0 w-[66.049px]" data-name="Button" />;
}

function Paragraph9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1c5359] text-[14px] tracking-[-0.3008px]">(Burlington)</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Button1 />
      <Paragraph9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[121.591px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative size-full">
        <Paragraph8 />
        <Frame1 />
      </div>
    </div>
  );
}

function EventItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Link1 />
        <Container5 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[154.591px] items-start left-[103.99px] top-0 w-[233.349px]" data-name="Container">
      <EventItem1 />
    </div>
  );
}

function EventGroup1() {
  return (
    <div className="h-[171.383px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(28,83,89,0.2)] border-b-[0.794px] border-solid inset-0 pointer-events-none" />
      <DateDisplay1 />
      <Container4 />
    </div>
  );
}

function EventList() {
  return (
    <div className="content-stretch flex flex-col gap-[15.997px] h-[5798.239px] items-start relative shrink-0 w-full" data-name="EventList">
      <EventGroup />
      <EventGroup1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[381.251px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pl-[15.997px] pr-[27.911px] relative rounded-[inherit] size-full">
        <EventList />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#d7dedf] content-stretch flex flex-col h-[852.254px] items-start left-0 pt-[97.987px] top-0 w-[381.251px]" data-name="App">
      <MainContent />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[36.003px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="css-ew64yg font-['Stylish:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#1c5359] text-[25px]">for the shared experience</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[13.999px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Stylish:Regular',sans-serif] leading-[14px] min-h-px min-w-px not-italic relative text-[#1c5359] text-[14px] tracking-[-0.1504px]">events worth showing up for</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Heading />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[23.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9957 23.9957">
        <g id="Icon">
          <path d="M3.99929 4.99911H19.9964" id="Vector" stroke="var(--stroke-0, #1C5359)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99964" />
          <path d="M3.99929 11.9979H19.9964" id="Vector_2" stroke="var(--stroke-0, #1C5359)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99964" />
          <path d="M3.99929 18.9966H19.9964" id="Vector_3" stroke="var(--stroke-0, #1C5359)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99964" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[39.999px] relative rounded-[6px] shrink-0 w-[55.99px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[15.997px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(254,254,254,0)] content-stretch flex gap-[34px] h-[50px] items-center left-[16px] pr-[-66.551px] top-[24px] w-[338px]" data-name="Header">
      <Container6 />
      <Button2 />
    </div>
  );
}

export default function Forthesharedexperience() {
  return (
    <div className="bg-white relative size-full" data-name="forthesharedexperience">
      <App />
      <Header />
    </div>
  );
}