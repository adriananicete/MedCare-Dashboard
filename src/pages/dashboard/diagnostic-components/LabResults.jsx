import { useContext } from "react";
import { PatientContext } from "../../../assets/context/PatientContext";
import { MdOutlineFileDownload } from "react-icons/md";

function LabResults() {
    const { selectedPatient } = useContext(PatientContext)
  return (
    <div className="bg-[#fff] w-full h-[210px] rounded-[16px] shadow-md p-[20px] flex flex-col justify-center items-start gap-5">
        <h2 className="text-[24px] font-[600]  ">Lab Result</h2>
        <div className="flex flex-col w-full h-[150px] justify-start items-center gap-5 overflow-y-scroll">
            {selectedPatient?.lab_results.map((item, index) => (
            <div key={index} className="bg-[] w-full flex justify-between items-center">
                <p>{item}</p>
                <MdOutlineFileDownload size={25} />
            </div>
        ))}
        </div>


    </div>
  );
}

export default LabResults;
