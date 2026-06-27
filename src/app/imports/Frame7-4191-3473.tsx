import svgPaths from "./svg-piegknnwap";

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p2edaeb50} fill="var(--fill-0, #F5F5F5)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[32px] shrink-0 size-[40px]" data-name="Icon Button">
      <Close />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] min-h-px min-w-px not-italic relative text-[#f3f3f3] text-[24px] tracking-[-0.48px]">Event Suggestion</p>
      <IconButton />
    </div>
  );
}

function Input() {
  return (
    <div className="min-w-[120px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-h-px min-w-px not-italic relative text-[#b3b3b3] text-[16px]">Name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#f3f3f3] text-[16px] w-[min-content]">Event Title*</p>
      <Input />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d={svgPaths.p3a9103f0} id="Icon" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="h-[40px] min-w-[120px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-h-px min-w-px not-italic relative text-[#b3b3b3] text-[16px]">When</p>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

function DatePickerField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Date Picker Field">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#f3f3f3] text-[16px] w-full">Date*</p>
      <Input1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="min-w-[120px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-h-px min-w-px not-italic relative text-[#b3b3b3] text-[16px]">https://</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#f3f3f3] text-[16px] w-[min-content]">EventLink*</p>
      <Input2 />
    </div>
  );
}

function Input3() {
  return (
    <div className="min-w-[120px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-h-px min-w-px not-italic relative text-[#b3b3b3] text-[16px]">Toronto, Scarborough, Mississauga...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
    </div>
  );
}

function InputField2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#f3f3f3] text-[16px] w-[min-content]">Location</p>
      <Input3 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron down">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Select() {
  return (
    <div className="h-[40px] min-w-[120px] relative rounded-[9999px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-h-px min-w-px not-italic relative text-[#b3b3b3] text-[16px]">Do you wear a timed bib?</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function SelectField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Select Field">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#f3f3f3] text-[16px] w-full">Event Type</p>
      <Select />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <InputField />
      <DatePickerField />
      <InputField1 />
      <InputField2 />
      <SelectField />
    </div>
  );
}

function Input4() {
  return (
    <div className="min-w-[120px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-h-px min-w-px not-italic relative text-[#b3b3b3] text-[16px]">Who</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
    </div>
  );
}

function InputField3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#f3f3f3] text-[16px] w-[min-content]">Event Organizer</p>
      <Input4 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="min-h-[80px] min-w-[120px] relative rounded-[16px] shrink-0 w-full" data-name="Textarea">
      <div className="min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start min-h-[inherit] min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px not-italic relative text-[#b3b3b3] text-[16px]">1-2 sentence description of event</p>
          <div className="absolute bottom-[6.02px] right-[4.52px] size-[6.627px]" data-name="Drag">
            <div className="absolute inset-[-5.33%]" style={{ "--stroke-0": "rgba(179, 179, 179, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33423 7.33422">
                <path d={svgPaths.p6595600} id="Drag" stroke="var(--stroke-0, #B3B3B3)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
    </div>
  );
}

function TextareaField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textarea Field">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#f3f3f3] text-[16px] w-full">Event description</p>
      <Textarea />
    </div>
  );
}

function Input5() {
  return (
    <div className="min-w-[120px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-h-px min-w-px not-italic relative text-[#b3b3b3] text-[16px]">Thank you</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
    </div>
  );
}

function InputField4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#f3f3f3] text-[16px] w-[min-content]">Your Name</p>
      <Input5 />
    </div>
  );
}

function Input6() {
  return (
    <div className="min-w-[120px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-h-px min-w-px not-italic relative text-[#b3b3b3] text-[16px]">In case we need to reachout</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
    </div>
  );
}

function InputField5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#f3f3f3] text-[16px] w-[min-content]">Your Email*</p>
      <Input6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <InputField3 />
      <TextareaField />
      <InputField4 />
      <InputField5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#2c2c2c] text-[16px]">Submit Event</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px opacity-0 relative" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#2c2c2c] text-[16px]">Submit Event</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#1f4926] content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}