function Text() {
  return (
    <div className="relative shrink-0 w-[6.599px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <p className="font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[12px] text-[rgba(30,82,154,0.7)] w-full whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <p className="font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#1e529a] text-[12px] w-full whitespace-pre-wrap">Tokyo Marathon</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[30px] items-start left-[12px] top-[-4px] w-[280.517px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Funnel_Sans:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#1e529a] text-[16px] whitespace-pre-wrap">Chilly Half Marathon</p>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[280.517px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.996px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27.993px] items-start left-[12px] top-[22px] w-[280.517px]" data-name="Container">
      <Button />
    </div>
  );
}

export default function Container() {
  return (
    <div className="border-[#1e529a] border-b-[0.769px] border-solid relative size-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}