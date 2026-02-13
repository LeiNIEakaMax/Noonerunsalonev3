import svgPaths from "./svg-o4wz1nx3e0";
import imgImage21 from "figma:asset/21a7448b629d55a9dcf36d3ce69725a002c1be41.png";

function Frame1() {
  return (
    <div className="h-full mix-blend-darken overflow-clip relative shrink-0 w-[487px]">
      <div className="absolute aspect-[2070/1380] bottom-[-1.79%] left-1/2 top-[-1.39%] translate-x-[-50%]" data-name="image 21">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage21} />
      </div>
      <div className="absolute bg-[#d9d9d9] inset-[-3.19%_-0.85%_-3.78%_-3.19%] mix-blend-color" data-name="bwfilter" />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[19.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6632 11.6632">
            <path d={svgPaths.p30f0ac80} id="Vector" stroke="var(--stroke-0, #591C2F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66617" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6632 11.6632">
            <path d={svgPaths.p3b673b60} id="Vector" stroke="var(--stroke-0, #591C2F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66617" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[19.994px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center mb-[-5px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Funnel_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#591c2f] text-[22px]">Move Your Paws</p>
      <Button />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Funnel_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[21px] mb-[-5px] relative shrink-0 text-[#591c2f] text-[14px] w-full">
      <p className="css-ew64yg relative shrink-0">January 17, 2026</p>
      <p className="css-ew64yg relative shrink-0">(Toronto)</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] relative shrink-0 w-full">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px opacity-0 relative rounded-[999px]" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#591c2f] text-[16px]">View Album</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#591c2f] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[9999px]" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[16px] text-white">More Info</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Frame4 />
        <div className="flex-[1_0_0] font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#591c2f] text-[14px] w-full">
          <p className="css-4hzbpn leading-[21px] mb-0">The Move Your Paws for the Polar Bear Cause Run/Walk is a family-friendly event supporting polar bear conservation. Open to all ages and abilities, it combines fitness and fundraising, with proceeds benefiting the Toronto Zoo’s animal enrichment programs and conservation efforts for polar bears and Arctic wolves.</p>
          <p className="css-4hzbpn leading-[21px] mb-0">&nbsp;</p>
          <p className="css-4hzbpn">
            <span className="leading-[21px]">Photo by Hans-jurgen Mager @</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[21px] text-[#591c2f] underline">coreofyoureye</span>
          </p>
        </div>
        <Frame3 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#dfd7d9] content-stretch flex items-start relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.769px] border-[rgba(223,215,217,0.2)] border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <Frame />
      <div className="absolute bottom-[-32px] flex flex-col font-['Funnel_Display:SemiBold',sans-serif] font-semibold h-[152px] justify-end leading-[0] left-[-32px] text-[89px] text-white w-[545px]">
        <p className="css-4hzbpn leading-[0.85]">Move Your Paws</p>
      </div>
    </div>
  );
}