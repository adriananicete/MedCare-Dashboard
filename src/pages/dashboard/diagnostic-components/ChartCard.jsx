function ChartCard({icon:Icon,title,num,average,color}) {
  return (
    <div className="bg-[] w-full flex flex-col justify-start items-start gap-2">
      <div className="flex justify-start items-center gap-2">
        <div style={{
            background: `#${color}`
        }} className=" rounded-[50%] w-[18px] h-[18px]"></div>
        <p className=" font-[700]">{title}</p>
      </div>
      <p className="text-[22px] font-[900]">{num}</p>
      <div className="flex justify-center items-center">
        <Icon size={25} />
        <p className="text-[#072635] text-[14px]">{average}</p>
      </div>
    </div>
  );
}

export default ChartCard;
