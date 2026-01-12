function Text() {
  return (
    <div className="absolute h-[20.999px] left-[12px] top-[12px] w-[17.667px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-[rgba(254,254,254,0.7)] text-nowrap top-[-0.21px]">20</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16.501px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#fefefe] text-[11px] text-nowrap top-[0.43px]">{`Event Name Here 1 What `}</p>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[23.929px] relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[3px] px-[9.71px] relative size-full">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16.501px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#fefefe] text-[11px] text-nowrap top-[0.43px]">Test Event 2</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[23.929px] relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[3px] px-[9.71px] relative size-full">
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.996px] h-[51.853px] items-start left-[12px] top-[40.99px] w-[136.004px]" data-name="Container">
      <Link />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136.004 0.5">
            <line id="Line 5" stroke="var(--stroke-0, white)" strokeWidth="0.5" x2="136.004" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <Link1 />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="border-[#fefefe] border-[0px_0px_0.714px] border-solid relative size-full" data-name="Container">
      <Text />
      <Container />
    </div>
  );
}