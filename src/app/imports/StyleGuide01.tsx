function Group() {
  return (
    <div className="absolute h-[12px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[29px]">
      <div className="absolute bottom-0 left-0 right-0 top-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 13">
          <g id="Group 1">
            <line id="Line 2" stroke="var(--stroke-0, white)" x2="29" y1="0.5" y2="0.5" />
            <line id="Line 3" stroke="var(--stroke-0, white)" x2="29" y1="6.5" y2="6.5" />
            <line id="Line 4" stroke="var(--stroke-0, white)" x2="29" y1="12.5" y2="12.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[28px] right-[22px] top-[21px] w-[33px]">
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-[#fefefe] w-[104px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-50 relative shrink-0 text-[12px] uppercase w-full">December</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[71px] w-full">24</p>
    </div>
  );
}

function DateV() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="date-v2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefefe] text-[12px] w-[min-content]">Saturday</p>
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-[#fefefe] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[22px] w-full">GT Christmas Party</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">Description of the event for things like what this event is about, why they should come.</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="list item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fefefe] text-[14px] w-full">Culture Athletics</p>
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-[#fefefe] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[22px] w-full">Group Training</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">Description of the event for things like what this event is about, why they should come.</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="list item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fefefe] text-[14px] w-full">Culture Athletics</p>
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[234px]">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[22px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#fefefe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <DateV />
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-[#fefefe] w-[104px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-50 relative shrink-0 text-[12px] uppercase w-full">December</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[71px] w-full">24</p>
    </div>
  );
}

function DateV1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="date-v2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefefe] text-[12px] w-[min-content]">Next Monday</p>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-[#fefefe] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[22px] w-full">Parkdale End of the year rumble</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">Description of the event for things like what this event is about, why they should come.</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="list item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fefefe] text-[14px] w-full">Parkdale Road Runners</p>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[234px]">
      <ListItem2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[22px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#fefefe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <DateV1 />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] not-italic pb-[10px] pt-0 px-0 relative shrink-0 text-[#fefefe] w-[104px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-50 relative shrink-0 text-[12px] uppercase w-full">December</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[71px] w-full">24</p>
    </div>
  );
}

function DateV2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="date-v2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefefe] text-[12px] w-[min-content]">Next Monday</p>
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-[#fefefe] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[22px] w-full">GT Christmas Party</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">Description of the event for things like what this event is about, why they should come.</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="list item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fefefe] text-[14px] w-full">Culture Athletics</p>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[234px]">
      <ListItem3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[22px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#fefefe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <DateV2 />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[21px] top-[110px] w-[360px]">
      <Frame4 />
      <Frame5 />
      {[...Array(3).keys()].map((_, i) => (
        <Frame6 key={i} />
      ))}
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-center justify-between leading-[normal] left-[21px] not-italic text-[#fefefe] text-[22px] text-nowrap top-[76px] w-[360px] whitespace-pre">
      <p className="relative shrink-0">DECEMBER</p>
      <p className="relative shrink-0 text-right">2025</p>
    </div>
  );
}

export default function StyleGuide() {
  return (
    <div className="bg-[#1e529a] relative size-full" data-name="style guide 01">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[21px] not-italic text-[#fefefe] text-[22px] text-nowrap top-[22px] whitespace-pre">No One Runs Alone</p>
      <Frame />
      <Frame14 />
      <Frame15 />
    </div>
  );
}