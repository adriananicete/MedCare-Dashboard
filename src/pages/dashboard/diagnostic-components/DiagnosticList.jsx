import { useContext } from "react";
import {
  PatientContext,
  PatientProvider,
} from "../../../assets/context/PatientContext";

function DiagnosticList({ name, description, status }) {
  const { selectedPatient } = useContext(PatientContext);

  const diagnosticList = selectedPatient.diagnostic_list;
  const listName = diagnosticList.map((patient) => patient.name);
  console.log(diagnosticList);

  return (
    <div className="bg-[#fff] w-full h-[auto] rounded-[16px] shadow-md p-[20px] flex flex-col justify-center items-start gap-5">
      <h2 className="text-[24px] font-[600]  ">Diagnosis List</h2>

      <div className=" w-full h-[auto] text-[] flex flex-col justify-center items-center gap-5 ">
        <div className="flex justify-between items-center w-full text-left font-[700]">
          <div className="flex-[1] bg-[] w-full">
            <p>Problem/Diagnosis</p>
          </div>
          <div className="flex-[2] bg-[] w-full">
            <p>Description</p>
          </div>
          <div className="flex-[1] bg-[] w-full">
            <p>Status</p>
          </div>
        </div>

        <div className="bg-[] h-[55px] w-full overflow-y-scroll flex justify-start items-center flex-col gap-4">
            {selectedPatient?.diagnostic_list?.map((item, index) => (
    <div key={index} className="w-full bg-[] flex justify-between items-center text-left ">
      <p className="flex-1">{item.name}</p>
      <p className="flex-2">{item.description}</p>
      <p className="flex-1">{item.status}</p>
    </div>
  ))}
        </div>
      </div>
    </div>
  );
}

export default DiagnosticList;
