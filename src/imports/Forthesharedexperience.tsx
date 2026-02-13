import svgPaths from "./svg-hjlkzvkc0a";

function Paragraph() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-[53.149px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Display:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#fefefe] text-[12px] top-[0.54px]">Thursday</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[17.999px] opacity-50 relative shrink-0 w-[56.016px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Display:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#fefefe] text-[12px] top-[0.54px] uppercase">JANUARY</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.998px] items-start left-0 top-0 w-[56.016px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[35.673px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Stylish:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">1</p>
    </div>
  );
}

function DateDisplay() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[430.871px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">YET ANOTHER EVENT IN 1ST DAY OF 2026</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[454.868px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text />
        <Icon />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-4hzbpn font-['Funnel_Sans:Light',sans-serif] font-light leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px] w-[700px]">This is an unsanctioned event - We expect all runners to be courteous and give pedestrians/cyclists the right of way on the path. As always be a good neighbour and look out for eachother!!</p>
      </div>
    </div>
  );
}

function EventItem() {
  return (
    <div className="content-stretch flex flex-col h-[75.006px] items-start relative shrink-0 w-full" data-name="EventItem">
      <Link />
      <Paragraph3 />
    </div>
  );
}

function Container3() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[92.001px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem />
      <Container3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[385.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">EXHIBITION PLACE RESOLUTION RUN</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[409.231px]" data-name="Link">
      <Text1 />
      <Icon1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[42.007px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Funnel_Sans:Light',sans-serif] font-light leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px] w-[661px]">Start the year loud and on pace at the first-ever Exhibition Place Resolution Run – a fast and unique 5K through the iconic grounds of Exhibition Place that finishes under the Princes’ Gates.</p>
    </div>
  );
}

function EventItem1() {
  return (
    <div className="h-[75.006px] relative shrink-0 w-full" data-name="EventItem">
      <Link1 />
      <Paragraph4 />
    </div>
  );
}

function Container5() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[92.001px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem1 />
      <Container5 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[412.819px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">New Year Stacked with Events Absolutely</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[436.815px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text2 />
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[42.007px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-4hzbpn font-['Funnel_Sans:Light',sans-serif] font-light leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px] w-[701px]">This is the first global league ranking dedicated to the consumer and corporate brand design, we hope it’s as insightful as it is inspiring.</p>
      </div>
    </div>
  );
}

function EventItem2() {
  return (
    <div className="content-stretch flex flex-col h-[75.006px] items-start relative shrink-0 w-full" data-name="EventItem">
      <Link2 />
      <Paragraph5 />
    </div>
  );
}

function Container7() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[92.001px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem2 />
      <Container7 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[291.076px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Eastbound Brewery Run Club</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[315.072px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text3 />
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[42.007px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-4hzbpn font-['Funnel_Sans:Light',sans-serif] font-light leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px] w-[698px]">World Brand Design Society league table ranking represents the top 50 most awarded creative agencies and designers in the field of consumer and corporate brand design.</p>
      </div>
    </div>
  );
}

function EventItem3() {
  return (
    <div className="content-stretch flex flex-col h-[75.006px] items-start relative shrink-0 w-full" data-name="EventItem">
      <Link3 />
      <Paragraph6 />
    </div>
  );
}

function Container9() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[92.001px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem3 />
      <Container9 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[328.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">No One Runs Alone Launch Party</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[352.704px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text4 />
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Light',sans-serif] font-light leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">*This is an event added from mobile* Lets celebrating this project finally crossed the finish line. Medals pls!</p>
      </div>
    </div>
  );
}

function EventItem4() {
  return (
    <div className="content-stretch flex flex-col h-[54.002px] items-start relative shrink-0 w-full" data-name="EventItem">
      <Link4 />
      <Paragraph7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[485.998px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.998px] items-start relative size-full">
        <Container2 />
        <Container4 />
        <Container6 />
        <Container8 />
        <EventItem4 />
      </div>
    </div>
  );
}

function EventGroup() {
  return (
    <div className="h-[502.764px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[23.996px] items-start pb-[0.769px] relative size-full">
        <DateDisplay />
        <Container1 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-[42.296px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[17.999px] opacity-50 relative shrink-0 w-[56.016px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Display:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#fefefe] text-[12px] top-[0.54px] uppercase">JANUARY</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.998px] items-start left-0 top-0 w-[56.016px]" data-name="Container">
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[71.34px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Stylish:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">11</p>
    </div>
  );
}

function DateDisplay1() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container10 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[237.464px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">{`New Year's Run Toronto`}</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[261.46px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text5 />
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Light',sans-serif] font-light leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A popular resolution run to kick off the year in North York.</p>
      </div>
    </div>
  );
}

function EventItem5() {
  return (
    <div className="content-stretch flex flex-col h-[54.002px] items-start relative shrink-0 w-full" data-name="EventItem">
      <Link5 />
      <Paragraph11 />
    </div>
  );
}

function Container13() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[70.998px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem5 />
      <Container13 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[221.19px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">The Bridges Marathon</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[245.186px]" data-name="Link">
      <Text6 />
      <Icon6 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[63.011px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Funnel_Sans:Light',sans-serif] font-light leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px] w-[675px]">Get ready to experience the thrill of the Tartan Ottawa International Marathon, one of Canada’s most celebrated marathons for over 50 years! With breathtaking scenic routes that weave through the nation’s capital, this race offers an unforgettable backdrop for runners of all levels.</p>
    </div>
  );
}

function EventItem6() {
  return (
    <div className="h-[96.01px] relative shrink-0 w-full" data-name="EventItem">
      <Link6 />
      <Paragraph12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[183.005px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.998px] items-start relative size-full">
        <Container12 />
        <EventItem6 />
      </div>
    </div>
  );
}

function EventGroup1() {
  return (
    <div className="h-[199.772px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[23.996px] items-start pb-[0.769px] relative size-full">
        <DateDisplay1 />
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Funnel_Display:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[56.016px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Funnel_Display:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#fefefe] text-[12px] top-[0.54px] uppercase">JANUARY</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[56.016px]" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[67.861px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Stylish:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">17</p>
    </div>
  );
}

function DateDisplay2() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[134.91px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Jollie to Jollie</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[158.906px]" data-name="Link">
      <Text7 />
      <Icon7 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Funnel_Sans:Light',sans-serif] font-light leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">Run from one Jolliebee to another Jolliebee, in brutal Toronto Winter morning</p>
    </div>
  );
}

function EventItem7() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link7 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function EventGroup2() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay2 />
      <EventItem7 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[42.296px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[56.016px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">JANUARY</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[56.016px]" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[68.732px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Stylish:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">18</p>
    </div>
  );
}

function DateDisplay3() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container15 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[227.212px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Robbie Burns Day 8km</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[251.208px]" data-name="Link">
      <Text8 />
      <Icon8 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Funnel_Sans:Light',sans-serif] font-light leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A winter tradition in Burlington celebrating the Scottish poet.</p>
    </div>
  );
}

function EventItem8() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link8 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function EventGroup3() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay3 />
      <EventItem8 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[62.043px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">FEBRUARY</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[62.043px]" data-name="Container">
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[71.34px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Stylish:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">21</p>
    </div>
  );
}

function DateDisplay4() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container16 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[162.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Move Your Paws</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[186.496px]" data-name="Link">
      <Text9 />
      <Icon9 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[63.011px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Funnel_Sans:Light',sans-serif] font-light leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px] w-[703px]">The Move Your Paws for the Polar Bear Cause Run/Walk is a family-friendly event supporting polar bear conservation. Open to all ages and abilities, it combines fitness and fundraising, with proceeds benefiting the Toronto Zoo’s animal enrichment programs and conservation efforts for polar bears and Arctic wolves.</p>
    </div>
  );
}

function EventItem9() {
  return (
    <div className="h-[96.01px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link9 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function EventGroup4() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay4 />
      <EventItem9 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[42.296px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[44.05px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">MARCH</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[44.05px]" data-name="Container">
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[35.673px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">1</p>
    </div>
  );
}

function DateDisplay5() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[202.758px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Funnel_Sans:SemiBold',sans-serif] font-semibold leading-[33px] left-0 text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Chilly Half Marathon</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[226.755px]" data-name="Link">
      <Text10 />
      <Icon10 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A major early-season race in Burlington known for fast courses.</p>
    </div>
  );
}

function EventItem10() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link10 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function EventGroup5() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay5 />
      <EventItem10 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[44.05px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">MARCH</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[50.661px]" data-name="Container">
      <Paragraph29 />
      <Paragraph30 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[63.51px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">14</p>
    </div>
  );
}

function DateDisplay6() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container18 />
        <Paragraph31 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[221.424px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">{`Frigid 10K & Frosty 5K`}</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[245.421px]" data-name="Link">
      <Text11 />
      <Icon11 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A scenic road race through the waterfront paths of Hamilton.</p>
    </div>
  );
}

function EventItem11() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link11 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function EventGroup6() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay6 />
      <EventItem11 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[42.296px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[44.05px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">MARCH</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[44.05px]" data-name="Container">
      <Paragraph33 />
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[68.732px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">15</p>
    </div>
  );
}

function DateDisplay7() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container19 />
        <Paragraph35 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[206.749px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">{`St. Patrick's Day Run`}</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[230.745px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text12 />
        <Icon12 />
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A festive, green-themed run through downtown Toronto.</p>
      </div>
    </div>
  );
}

function EventItem12() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link12 />
        <Paragraph36 />
      </div>
    </div>
  );
}

function EventGroup7() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay7 />
      <EventItem12 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[44.05px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">MARCH</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[50.661px]" data-name="Container">
      <Paragraph37 />
      <Paragraph38 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[70.469px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">28</p>
    </div>
  );
}

function DateDisplay8() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container20 />
        <Paragraph39 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[168.227px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Spring Fling 5km</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[192.224px]" data-name="Link">
      <Text13 />
      <Icon13 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A local Hamilton favorite to welcome the spring season.</p>
    </div>
  );
}

function EventItem13() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link13 />
        <Paragraph40 />
      </div>
    </div>
  );
}

function EventGroup8() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay8 />
      <EventItem13 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[33.317px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">APRIL</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[50.661px]" data-name="Container">
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[33.93px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">4</p>
    </div>
  );
}

function DateDisplay9() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
        <Paragraph43 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[230.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Beneva Spring Run-Off</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[254.441px]" data-name="Link">
      <Text14 />
      <Icon14 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">The traditional spring opener through the hilly paths of High Park.</p>
    </div>
  );
}

function EventItem14() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link14 />
        <Paragraph44 />
      </div>
    </div>
  );
}

function EventGroup9() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay9 />
      <EventItem14 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[42.296px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[33.317px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">APRIL</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[42.296px]" data-name="Container">
      <Paragraph45 />
      <Paragraph46 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[68.732px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">12</p>
    </div>
  );
}

function DateDisplay10() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container22 />
        <Paragraph47 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[153.564px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Around the Bay</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[177.56px]" data-name="Link">
      <Text15 />
      <Icon15 />
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">{`North America's oldest road race, featuring the famous "Grimsby" hills.`}</p>
    </div>
  );
}

function EventItem15() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link15 />
        <Paragraph48 />
      </div>
    </div>
  );
}

function EventGroup10() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay10 />
      <EventItem15 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[33.317px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">APRIL</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[50.661px]" data-name="Container">
      <Paragraph49 />
      <Paragraph50 />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[68.732px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">18</p>
    </div>
  );
}

function DateDisplay11() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container23 />
        <Paragraph51 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[266.899px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Under Armour Toronto 10K</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[290.895px]" data-name="Link">
      <Text16 />
      <Icon16 />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">{`A high-energy, fast 10k through Toronto's Exhibition Place.`}</p>
    </div>
  );
}

function EventItem16() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link16 />
        <Paragraph52 />
      </div>
    </div>
  );
}

function EventGroup11() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay11 />
      <EventItem16 />
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[42.296px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[33.317px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">APRIL</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[42.296px]" data-name="Container">
      <Paragraph53 />
      <Paragraph54 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[68.732px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">19</p>
    </div>
  );
}

function DateDisplay12() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container24 />
        <Paragraph55 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[210.769px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Run4Hope Brampton</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[234.766px]" data-name="Link">
      <Text17 />
      <Icon17 />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A community-focused run supporting local health initiatives.</p>
    </div>
  );
}

function EventItem17() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link17 />
        <Paragraph56 />
      </div>
    </div>
  );
}

function EventGroup12() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay12 />
      <EventItem17 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-[42.296px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[17.999px] opacity-50 relative shrink-0 w-[33.317px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">APRIL</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.998px] items-start left-0 top-0 w-[42.296px]" data-name="Container">
      <Paragraph57 />
      <Paragraph58 />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[70.469px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">26</p>
    </div>
  );
}

function DateDisplay13() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container25 />
        <Paragraph59 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[224.718px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Mississauga Marathon</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link18() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[248.714px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text18 />
        <Icon18 />
      </div>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A fast, net-downhill course that is a popular Boston Qualifier.</p>
      </div>
    </div>
  );
}

function EventItem18() {
  return (
    <div className="content-stretch flex flex-col h-[54.002px] items-start relative shrink-0 w-full" data-name="EventItem">
      <Link18 />
      <Paragraph60 />
    </div>
  );
}

function Container28() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[70.998px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem18 />
      <Container28 />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[236.538px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">{`Nature's Emporium Run`}</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[260.535px]" data-name="Link">
      <Text19 />
      <Icon19 />
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A fundraiser in Newmarket supporting the Southlake Regional Health Centre.</p>
    </div>
  );
}

function EventItem19() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link19 />
      <Paragraph61 />
    </div>
  );
}

function Container30() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[70.998px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem19 />
      <Container30 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[160.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Bumrun Toronto</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[184.465px]" data-name="Link">
      <Text20 />
      <Icon20 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">{`A lighthearted run through Queen's Park for colon cancer awareness.`}</p>
    </div>
  );
}

function EventItem20() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link20 />
      <Paragraph62 />
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] h-[227.993px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.998px] items-start relative size-full">
        <Container27 />
        <Container29 />
        <EventItem20 />
      </div>
    </div>
  );
}

function EventGroup13() {
  return (
    <div className="h-[244.76px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[23.996px] items-start pb-[0.769px] relative size-full">
        <DateDisplay13 />
        <Container26 />
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[25.871px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">MAY</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[50.661px]" data-name="Container">
      <Paragraph63 />
      <Paragraph64 />
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[35.673px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">2</p>
    </div>
  );
}

function DateDisplay14() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container31 />
        <Paragraph65 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[355.811px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Culture Toronto Marathon Shakeout</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[379.808px]" data-name="Link">
      <Text21 />
      <Icon21 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">Get ready to run or cheer for Toronto Marathon with your running besties from Culture Athletics</p>
    </div>
  );
}

function EventItem21() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link21 />
      <Paragraph66 />
    </div>
  );
}

function Container34() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[70.998px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem21 />
      <Container34 />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[222.542px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">5 Peaks Race 1 - Kelso</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link22() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[246.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text22 />
        <Icon22 />
      </div>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A rugged trail running experience at Kelso Conservation Area.</p>
      </div>
    </div>
  );
}

function EventItem22() {
  return (
    <div className="content-stretch flex flex-col h-[54.002px] items-start relative shrink-0 w-full" data-name="EventItem">
      <Link22 />
      <Paragraph67 />
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] h-[143.498px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.998px] items-start relative size-full">
        <Container33 />
        <EventItem22 />
      </div>
    </div>
  );
}

function EventGroup14() {
  return (
    <div className="h-[160.264px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[23.996px] items-start pb-[0.769px] relative size-full">
        <DateDisplay14 />
        <Container32 />
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[42.296px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[25.871px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">MAY</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[42.296px]" data-name="Container">
      <Paragraph68 />
      <Paragraph69 />
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[35.673px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">3</p>
    </div>
  );
}

function DateDisplay15() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container35 />
        <Paragraph70 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[177.668px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Toronto Marathon</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link23() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[201.665px]" data-name="Link">
      <Text23 />
      <Icon23 />
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">Terribly organized race, but it bears the name Toronto Marathon</p>
    </div>
  );
}

function EventItem23() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link23 />
      <Paragraph71 />
    </div>
  );
}

function Container38() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[70.998px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem23 />
      <Container38 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[177.668px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Toronto Marathon</p>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link24() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[201.665px]" data-name="Link">
      <Text24 />
      <Icon24 />
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A scenic city route from North York down to the Lake Ontario shore.</p>
    </div>
  );
}

function EventItem24() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link24 />
      <Paragraph72 />
    </div>
  );
}

function Container40() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[70.998px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem24 />
      <Container40 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[215.018px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Georgina Spring Fling</p>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link25() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[239.014px]" data-name="Link">
      <Text25 />
      <Icon25 />
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A flat and fast Boston Qualifier along the shores of Lake Simcoe.</p>
    </div>
  );
}

function EventItem25() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link25 />
      <Paragraph73 />
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] h-[227.993px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.998px] items-start relative size-full">
        <Container37 />
        <Container39 />
        <EventItem25 />
      </div>
    </div>
  );
}

function EventGroup15() {
  return (
    <div className="h-[244.76px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[23.996px] items-start pb-[0.769px] relative size-full">
        <DateDisplay15 />
        <Container36 />
      </div>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[25.871px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">MAY</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[50.661px]" data-name="Container">
      <Paragraph74 />
      <Paragraph75 />
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[35.673px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">9</p>
    </div>
  );
}

function DateDisplay16() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container41 />
        <Paragraph76 />
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[216.028px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Strides for Mackenzie</p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link26() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[240.024px]" data-name="Link">
      <Text26 />
      <Icon26 />
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A community run in Vaughan supporting Mackenzie Health.</p>
    </div>
  );
}

function EventItem26() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link26 />
      <Paragraph77 />
    </div>
  );
}

function Container44() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[70.998px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem26 />
      <Container44 />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[170.595px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Seaton Scramble</p>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link27() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[194.591px]" data-name="Link">
      <Text27 />
      <Icon27 />
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A challenging trail race through the Seaton hiking trails.</p>
    </div>
  );
}

function EventItem27() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link27 />
      <Paragraph78 />
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[1_0_0] h-[143.498px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.998px] items-start relative size-full">
        <Container43 />
        <EventItem27 />
      </div>
    </div>
  );
}

function EventGroup16() {
  return (
    <div className="h-[160.264px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[23.996px] items-start pb-[0.769px] relative size-full">
        <DateDisplay16 />
        <Container42 />
      </div>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[42.296px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[25.871px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">MAY</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[42.296px]" data-name="Container">
      <Paragraph79 />
      <Paragraph80 />
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[68.816px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">10</p>
    </div>
  );
}

function DateDisplay17() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container45 />
        <Paragraph81 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[171.43px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Sporting Life 10K</p>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link28() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[195.427px]" data-name="Link">
      <Text28 />
      <Icon28 />
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">{`One of Canada's largest races, running straight down Yonge Street.`}</p>
    </div>
  );
}

function EventItem28() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link28 />
        <Paragraph82 />
      </div>
    </div>
  );
}

function EventGroup17() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay17 />
      <EventItem28 />
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[25.871px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">MAY</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[50.661px]" data-name="Container">
      <Paragraph83 />
      <Paragraph84 />
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[70.469px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">23</p>
    </div>
  );
}

function DateDisplay18() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container46 />
        <Paragraph85 />
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[232.272px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">{`PUMA Women's Spring`}</p>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link29() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[256.268px]" data-name="Link">
      <Text29 />
      <Icon29 />
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">An inclusive, women-focused race held in Sunnybrook Park.</p>
    </div>
  );
}

function EventItem29() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link29 />
      <Paragraph86 />
    </div>
  );
}

function Container49() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[70.998px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem29 />
      <Container49 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[257.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Run For Women - Oakville</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link30() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[281.052px]" data-name="Link">
      <Text30 />
      <Icon30 />
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">{`A charity run at Bronte Creek supporting women's mental health.`}</p>
    </div>
  );
}

function EventItem30() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link30 />
      <Paragraph87 />
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[1_0_0] h-[143.498px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.998px] items-start relative size-full">
        <Container48 />
        <EventItem30 />
      </div>
    </div>
  );
}

function EventGroup18() {
  return (
    <div className="h-[160.264px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[23.996px] items-start pb-[0.769px] relative size-full">
        <DateDisplay18 />
        <Container47 />
      </div>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[42.296px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[25.871px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">MAY</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[42.296px]" data-name="Container">
      <Paragraph88 />
      <Paragraph89 />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[64.381px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">24</p>
    </div>
  );
}

function DateDisplay19() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
        <Paragraph90 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[271.454px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Run For Women - Markham</p>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link31() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[295.451px]" data-name="Link">
      <Text31 />
      <Icon31 />
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">{`A local community run supporting women's health programs.`}</p>
    </div>
  );
}

function EventItem31() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link31 />
        <Paragraph91 />
      </div>
    </div>
  );
}

function EventGroup19() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay19 />
      <EventItem31 />
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-[34.934px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Friday</p>
      </div>
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[17.999px] opacity-50 relative shrink-0 w-[31.611px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">JUNE</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.998px] items-start left-0 top-0 w-[34.934px]" data-name="Container">
      <Paragraph92 />
      <Paragraph93 />
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[35.673px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">5</p>
    </div>
  );
}

function DateDisplay20() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container51 />
        <Paragraph94 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[121.587px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Riot Relay III</p>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link32() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[145.583px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text32 />
        <Icon32 />
      </div>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="h-[42.007px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px] w-[670px]">The Riot Relay is an annual, overnight, long-distance running event in Ontario, Canada, where teams run approximately 140 kilometers (87 miles) from Toronto to The Blue Mountains.</p>
      </div>
    </div>
  );
}

function EventItem32() {
  return (
    <div className="h-[75.006px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link32 />
        <Paragraph95 />
      </div>
    </div>
  );
}

function EventGroup20() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay20 />
      <EventItem32 />
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[31.611px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">JUNE</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[50.661px]" data-name="Container">
      <Paragraph96 />
      <Paragraph97 />
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[35.673px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">6</p>
    </div>
  );
}

function DateDisplay21() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container52 />
        <Paragraph98 />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[151.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">5 Peaks Race 2</p>
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link33() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[175.09px]" data-name="Link">
      <Text33 />
      <Icon33 />
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">Trail running through the woods of Crawford Lake.</p>
    </div>
  );
}

function EventItem33() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link33 />
      <Paragraph99 />
    </div>
  );
}

function Container55() {
  return <div className="bg-[rgba(254,254,254,0.2)] h-[0.998px] shrink-0 w-full" data-name="Container" />;
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] h-[70.998px] items-start relative shrink-0 w-full" data-name="Container">
      <EventItem33 />
      <Container55 />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[244.519px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Moon in June Road Race</p>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link34() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[268.516px]" data-name="Link">
      <Text34 />
      <Icon34 />
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">An evening race through downtown Burlington with a big party.</p>
    </div>
  );
}

function EventItem34() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-full" data-name="EventItem">
      <Link34 />
      <Paragraph100 />
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] h-[143.498px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.998px] items-start relative size-full">
        <Container54 />
        <EventItem34 />
      </div>
    </div>
  );
}

function EventGroup21() {
  return (
    <div className="h-[160.264px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[23.996px] items-start pb-[0.769px] relative size-full">
        <DateDisplay21 />
        <Container53 />
      </div>
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-[42.296px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
      </div>
    </div>
  );
}

function Paragraph102() {
  return (
    <div className="h-[17.999px] opacity-50 relative shrink-0 w-[31.611px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">JUNE</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.998px] items-start left-0 top-0 w-[42.296px]" data-name="Container">
      <Paragraph101 />
      <Paragraph102 />
    </div>
  );
}

function Paragraph103() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[35.673px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">7</p>
    </div>
  );
}

function DateDisplay22() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container56 />
        <Paragraph103 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[223.413px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Honda Waterfront Run</p>
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link35() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[247.41px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text35 />
        <Icon35 />
      </div>
    </div>
  );
}

function Paragraph104() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">{`A beautiful waterfront run along Barrie's Kempenfelt Bay.`}</p>
      </div>
    </div>
  );
}

function EventItem35() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link35 />
        <Paragraph104 />
      </div>
    </div>
  );
}

function EventGroup22() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay22 />
      <EventItem35 />
    </div>
  );
}

function Paragraph105() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-[50.661px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
      </div>
    </div>
  );
}

function Paragraph106() {
  return (
    <div className="h-[17.999px] opacity-50 relative shrink-0 w-[31.611px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">JUNE</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.998px] items-start left-0 top-0 w-[50.661px]" data-name="Container">
      <Paragraph105 />
      <Paragraph106 />
    </div>
  );
}

function Paragraph107() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[68.732px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">13</p>
    </div>
  );
}

function DateDisplay23() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container57 />
        <Paragraph107 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[177.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Rainbow Trail Run</p>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link36() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[201.418px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text36 />
        <Icon36 />
      </div>
    </div>
  );
}

function Paragraph108() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">An ultra-distance trail event through Earl Rowe Provincial Park.</p>
      </div>
    </div>
  );
}

function EventItem36() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link36 />
        <Paragraph108 />
      </div>
    </div>
  );
}

function EventGroup23() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay23 />
      <EventItem36 />
    </div>
  );
}

function Paragraph109() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[50.661px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Saturday</p>
    </div>
  );
}

function Paragraph110() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[70.631px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">SEPTEMBER</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[70.631px]" data-name="Container">
      <Paragraph109 />
      <Paragraph110 />
    </div>
  );
}

function Paragraph111() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[68.732px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">12</p>
    </div>
  );
}

function DateDisplay24() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container58 />
        <Paragraph111 />
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[226.334px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Tough Mudder Toronto</p>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link37() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[250.331px]" data-name="Link">
      <Text37 />
      <Icon37 />
    </div>
  );
}

function Paragraph112() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A world-famous obstacle course challenge in Norfolk County.</p>
    </div>
  );
}

function EventItem37() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link37 />
        <Paragraph112 />
      </div>
    </div>
  );
}

function EventGroup24() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay24 />
      <EventItem37 />
    </div>
  );
}

function Paragraph113() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-[42.296px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
      </div>
    </div>
  );
}

function Paragraph114() {
  return (
    <div className="h-[17.999px] opacity-50 relative shrink-0 w-[70.631px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">SEPTEMBER</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.998px] items-start left-0 top-0 w-[70.631px]" data-name="Container">
      <Paragraph113 />
      <Paragraph114 />
    </div>
  );
}

function Paragraph115() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[68.732px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">13</p>
    </div>
  );
}

function DateDisplay25() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container59 />
        <Paragraph115 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[192.194px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Georgina Marathon</p>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link38() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[216.19px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text38 />
        <Icon38 />
      </div>
    </div>
  );
}

function Paragraph116() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">A flat fall Boston Qualifier along Lake Simcoe.</p>
      </div>
    </div>
  );
}

function EventItem38() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link38 />
        <Paragraph116 />
      </div>
    </div>
  );
}

function EventGroup25() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay25 />
      <EventItem38 />
    </div>
  );
}

function Paragraph117() {
  return (
    <div className="h-[17.999px] relative shrink-0 w-[42.296px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
      </div>
    </div>
  );
}

function Paragraph118() {
  return (
    <div className="h-[17.999px] opacity-50 relative shrink-0 w-[56.983px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">OCTOBER</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.998px] items-start left-0 top-0 w-[56.983px]" data-name="Container">
      <Paragraph117 />
      <Paragraph118 />
    </div>
  );
}

function Paragraph119() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[68.732px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">18</p>
    </div>
  );
}

function DateDisplay26() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container60 />
        <Paragraph119 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[209.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Waterfront Marathon</p>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link39() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[233.191px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Text39 />
        <Icon39 />
      </div>
    </div>
  );
}

function Paragraph120() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[705.271px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">{`Toronto's premier world-class marathon and fall Boston Qualifier.`}</p>
      </div>
    </div>
  );
}

function EventItem39() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link39 />
        <Paragraph120 />
      </div>
    </div>
  );
}

function EventGroup26() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay26 />
      <EventItem39 />
    </div>
  );
}

function Paragraph121() {
  return (
    <div className="absolute h-[17.999px] left-0 top-0 w-[42.296px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px]">Sunday</p>
    </div>
  );
}

function Paragraph122() {
  return (
    <div className="absolute h-[17.999px] left-0 opacity-50 top-[18px] w-[66.358px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#fefefe] text-[12px] top-[0.54px] uppercase">NOVEMBER</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[66.358px]" data-name="Container">
      <Paragraph121 />
      <Paragraph122 />
    </div>
  );
}

function Paragraph123() {
  return (
    <div className="absolute h-[130.499px] left-0 top-[13px] w-[35.673px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Vina_Sans:Regular',sans-serif] leading-[130.5px] left-0 not-italic text-[#fefefe] text-[87px] top-[0.31px]">1</p>
    </div>
  );
}

function DateDisplay27() {
  return (
    <div className="h-[143.498px] relative shrink-0 w-[103.996px]" data-name="DateDisplay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container61 />
        <Paragraph123 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[32.999px] relative shrink-0 w-[213.534px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#fefefe] text-[22px] top-[0.46px] tracking-[-0.2578px]">Hamilton Road2Hope</p>
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9976 15.9976">
        <g id="Icon">
          <path d="M9.99854 2H13.9979V5.9994" id="Vector" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d="M6.66553 9.33223L13.9978 2" id="Vector_2" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
          <path d={svgPaths.p3bce5f00} id="Vector_3" stroke="var(--stroke-0, #FEFEFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33313" />
        </g>
      </svg>
    </div>
  );
}

function Link40() {
  return (
    <div className="absolute content-stretch flex gap-[7.999px] h-[32.999px] items-center left-0 top-0 w-[237.53px]" data-name="Link">
      <Text40 />
      <Icon40 />
    </div>
  );
}

function Paragraph124() {
  return (
    <div className="absolute h-[21.004px] left-0 overflow-clip top-[33px] w-[705.271px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fefefe] text-[14px] top-[-0.08px] tracking-[-0.1504px]">{`Known as one of Canada's fastest courses with a major downhill.`}</p>
    </div>
  );
}

function EventItem40() {
  return (
    <div className="h-[54.002px] relative shrink-0 w-[992.007px]" data-name="EventItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link40 />
        <Paragraph124 />
      </div>
    </div>
  );
}

function EventGroup27() {
  return (
    <div className="content-stretch flex gap-[23.996px] h-[160.264px] items-start pb-[0.769px] relative shrink-0 w-full" data-name="EventGroup">
      <div aria-hidden="true" className="absolute border-[rgba(254,254,254,0.2)] border-b-[0.769px] border-solid inset-0 pointer-events-none" />
      <DateDisplay27 />
      <EventItem40 />
    </div>
  );
}

function EventList() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[5470.337px] items-start left-[218.46px] top-[-360.99px] w-[1120px]" data-name="EventList">
      <EventGroup />
      <EventGroup1 />
      <EventGroup2 />
      <EventGroup3 />
      <EventGroup4 />
      <EventGroup5 />
      <EventGroup6 />
      <EventGroup7 />
      <EventGroup8 />
      <EventGroup9 />
      <EventGroup10 />
      <EventGroup11 />
      <EventGroup12 />
      <EventGroup13 />
      <EventGroup14 />
      <EventGroup15 />
      <EventGroup16 />
      <EventGroup17 />
      <EventGroup18 />
      <EventGroup19 />
      <EventGroup20 />
      <EventGroup21 />
      <EventGroup22 />
      <EventGroup23 />
      <EventGroup24 />
      <EventGroup25 />
      <EventGroup26 />
      <EventGroup27 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1568.462px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <EventList />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#30224e] content-stretch flex flex-col h-[1006.154px] items-start left-0 pt-[87.987px] top-0 w-[1568.462px]" data-name="App">
      <MainContent />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Stylish:Regular',sans-serif] items-start leading-none not-italic pb-px relative">
        <p className="css-ew64yg relative shrink-0 text-[#fefefe] text-[36px]">for the shared experience</p>
        <p className="css-ew64yg relative shrink-0 text-[14px] text-white tracking-[-0.1504px]">events worth showing up for</p>
      </div>
    </div>
  );
}

function Paragraph125() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Funnel_Display:Light',sans-serif] font-light leading-[24px] relative shrink-0 text-[#fefefe] text-[16px] text-center tracking-[-0.3125px]">All</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[39.994px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[4px] relative">
        <Paragraph125 />
      </div>
    </div>
  );
}

function Paragraph126() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] relative">
        <p className="css-ew64yg font-['Funnel_Display:Light',sans-serif] font-light leading-[24px] relative shrink-0 text-[#fefefe] text-[16px] text-center tracking-[-0.3125px]">Social</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[39.994px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[4px] relative">
        <Paragraph126 />
      </div>
    </div>
  );
}

function Paragraph127() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] relative">
        <p className="css-ew64yg decoration-solid font-['Funnel_Display:Light',sans-serif] font-light leading-[24px] relative shrink-0 text-[#fefefe] text-[16px] text-center tracking-[-0.3125px] underline">Race</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[39.994px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[4px] relative">
        <Paragraph127 />
      </div>
    </div>
  );
}

function DotsThree() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="DotsThree">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DotsThree">
          <g id="Vector" />
          <path d={svgPaths.p13c14fc0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p30660a00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1e9c4ff0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[39.994px] relative rounded-[6px] shrink-0 w-[47.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[15.998px] relative size-full">
        <DotsThree />
      </div>
    </div>
  );
}

function ListDashes() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ListDashes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ListDashes">
          <g id="Vector" />
          <path d="M6 4H13.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8H13.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 12H13.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.5 4H3.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.5 8H3.5" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.5 12H3.5" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#30224e] content-stretch flex h-full items-center justify-center relative shrink-0 w-[28px]" data-name="Button">
      <ListDashes />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <g id="Vector" />
          <path d={svgPaths.p1bb6cd00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 1.5V3.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 1.5V3.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.5 5.5H13.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 8L6.5 7.5V11.5" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2e18e90} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex h-full items-center justify-center opacity-60 relative rounded-[6px] shrink-0 w-[28px]" data-name="Button">
      <Calendar />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(255,255,255,0.19)] h-[40px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center p-[6px] relative">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[39.994px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-end relative">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Frame3 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[5.55px] bg-[rgba(48,34,78,0.53)] content-stretch flex h-[87.987px] items-center justify-between left-0 px-[224.231px] top-0 w-[1568.462px]" data-name="Header">
      <Heading />
      <Container62 />
    </div>
  );
}

function Container63() {
  return <div className="absolute h-[39.994px] left-[1117px] top-[91px] w-[227px]" data-name="Container" />;
}

function ClockCounterClockwise() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="ClockCounterClockwise">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="ClockCounterClockwise">
          <g id="Vector" />
          <path d={svgPaths.p3fc6f980} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.78125 6.90625H2.125V4.25" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3fb29500} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[6px] relative shrink-0 w-full">
      <ClockCounterClockwise />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#fefefe] text-[13px] tracking-[-0.0762px]">Include Past Events</p>
    </div>
  );
}

function CalendarPlus() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="CalendarPlus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="CalendarPlus">
          <g id="Vector" />
          <path d={svgPaths.p4744200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.6875 1.59375V3.71875" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.3125 1.59375V3.71875" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.65625 5.84375H14.3438" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.0938 10.0938H6.90625" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 8.5V11.6875" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[6px] relative shrink-0 w-full">
      <CalendarPlus />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#fefefe] text-[13px] tracking-[-0.0762px]">Suggest an Event</p>
    </div>
  );
}

function EnvelopeSimple() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="EnvelopeSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="EnvelopeSimple">
          <g id="Vector" />
          <path d={svgPaths.p9eb2700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p117a0e00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[6px] relative shrink-0 w-full">
      <EnvelopeSimple />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#fefefe] text-[13px] tracking-[-0.0762px]">Feedback</p>
    </div>
  );
}

function Palette() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Palette">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Palette">
          <g id="Vector" />
          <path d={svgPaths.p1ae91d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p201d6e70} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="0.125" />
          <path d={svgPaths.p12b93980} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p111f2580} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p28c72c0} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[6px] relative shrink-0 w-full">
      <Palette />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#fefefe] text-[13px] tracking-[-0.0762px]">Change Theme</p>
    </div>
  );
}

function SunDim() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SunDim">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SunDim">
          <g id="Vector" />
          <path d="M8.5 2.65625V2.125" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d72b780} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.25 4.25L3.71875 3.71875" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.25 12.75L3.71875 13.2812" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.75 4.25L13.2812 3.71875" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.75 12.75L13.2812 13.2812" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.65625 8.5H2.125" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 14.3438V14.875" id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.3438 8.5H14.875" id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[6px] relative shrink-0 w-full">
      <SunDim />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#fefefe] text-[13px] tracking-[-0.0762px]">Light Mode</p>
    </div>
  );
}

function Bug() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Bug">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Bug">
          <g id="Vector" />
          <path d={svgPaths.p371d0900} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="0.125" />
          <path d={svgPaths.p2e448d00} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="0.125" />
          <path d="M8.5 8.5V14.875" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p104ffd80} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p6331780} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1d086a00} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1af30080} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pb9d8000} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.0625 8.5H15.9375" id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[6px] relative shrink-0 w-full">
      <Bug />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#fefefe] text-[13px] tracking-[-0.0762px]">Debugging</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#30224e] content-stretch flex flex-col items-start left-[1079px] p-[12px] top-[68px] w-[181px]">
      <div aria-hidden="true" className="absolute border-[0.769px] border-[rgba(254,254,254,0.2)] border-solid inset-0 pointer-events-none" />
      <Frame5 />
      <Frame />
      <Frame2 />
      <Frame4 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

export default function Forthesharedexperience() {
  return (
    <div className="bg-white relative size-full" data-name="forthesharedexperience">
      <App />
      <Header />
      <Container63 />
      <Frame1 />
    </div>
  );
}