function Heading() {
  return (
    <div className="absolute h-[35.998px] left-0 top-0 w-[359.82px]" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Stylish:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#d7dee9] text-[32px] top-[2.77px]">for the shared experience</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[14.002px] left-0 top-[36px] w-[359.82px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Stylish:Regular',sans-serif] leading-[14px] left-0 not-italic text-[#d7dee9] text-[18px] top-[0.08px] tracking-[-0.1504px]">events worth showing up for</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}