import svgPaths from "./svg-zyzuwc2jsn";

function Heading() {
  return (
    <div className="h-[47.999px] relative shrink-0 w-[247.061px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Funnel_Sans:SemiBold',sans-serif] font-semibold leading-[48px] left-0 text-[#1e529a] text-[32px] top-[-0.15px] tracking-[-0.48px]">Stay in the loop</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[19.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6632 11.6632">
            <path d={svgPaths.p30f0ac80} id="Vector" stroke="var(--stroke-0, #1E529A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66617" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6632 11.6632">
            <path d={svgPaths.p3b673b60} id="Vector" stroke="var(--stroke-0, #1E529A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66617" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[12905600px] shrink-0 size-[43.984px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.995px] px-[11.995px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[47.999px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Button />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[60px] relative rounded-[12905600px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(30,82,154,0.4)]">Email</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.769px] border-[rgba(30,82,154,0.4)] border-solid inset-0 pointer-events-none rounded-[12905600px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <EmailInput />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[-0.006px] relative w-full">
        <Container3 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1e529a] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[346px] py-[12px] relative w-full">
          <p className="font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#d7dee9] text-[16px] text-center">Subscribe</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Button1 />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[15.998px] items-start relative shrink-0 w-full" data-name="Form">
      <Container2 />
      <Frame />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#d7dee9] relative rounded-[16px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15.998px] items-start overflow-clip pb-[16px] pt-[16.767px] px-[16.767px] relative rounded-[inherit] size-full">
        <Container1 />
        <p className="font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#1e529a] text-[16px]">Still working on the newsletter, you will be the first to know.</p>
        <Form />
      </div>
      <div aria-hidden="true" className="absolute border-[0.769px] border-[rgba(30,82,154,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}