

function DiagnosticCards({img, title,bpm,status, color}) {
  return (
    <div style={{
        background: `#${color}`
    }} className="w-full h-[100%] rounded-[12px] p-[20px] flex flex-col justify-center items-start gap-3">
      <img src={img} alt="" />

      <div>
        <p>{title}</p>
        <p className="text-[30px] font-[700]">{bpm}</p>
      </div>

      <p className="text-[14px]">{status}</p>
    </div>
  );
}

export default DiagnosticCards;
