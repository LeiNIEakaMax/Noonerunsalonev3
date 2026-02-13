import imgImageJollieToJollie from "figma:asset/21a7448b629d55a9dcf36d3ce69725a002c1be41.png";

function ImageJollieToJollie() {
  return (
    <div className="absolute h-[599.225px] left-0 top-0 w-[486.995px]" data-name="Image (Jollie to Jollie)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageJollieToJollie} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#e7e7e7] h-[599.225px] left-0 mix-blend-color top-0 w-[486.995px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[75.649px] left-[-32px] top-[555.57px] w-[544.994px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Funnel_Display:SemiBold',sans-serif] font-semibold leading-[75.65px] left-0 text-[89px] text-white top-[-0.08px]">Jollie to Jollie</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="mix-blend-lighten relative size-full" data-name="Container">
      <ImageJollieToJollie />
      <Container1 />
      <Paragraph />
    </div>
  );
}