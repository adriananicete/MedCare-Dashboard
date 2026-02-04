import { TbDots } from "react-icons/tb";

function PatientCard({ name, gender, age, img, onClick }) {
  return (
    <div onClick={onClick} className="bg-[] rounded-[5px] px-[10px] cursor-pointer w-full flex justify-between items-center hover:bg-[#d8fcf7] transition-all duration-300">
      <div className="flex justify-center items-center gap-2 p-[10px]">
        <div className="bg-gray-400 w-[48px] h-[48px] rounded-full overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="text-[14px]">
          <p className="font-[600]">{name}</p>
          <p className="text-[#707070]">{gender}, {age}</p>
        </div>
      </div>
      <div>
        <TbDots size={30} />
      </div>
    </div>
  );
}
export default PatientCard;
