import { IoIosSearch } from "react-icons/io";
import PatientCard from "./PatientCard";
import { useContext } from "react";
import { PatientContext } from "../../../assets/context/PatientContext";

function Patient() {
  const { patients, setSelectedPatient } = useContext(PatientContext);

  return (
    <article className="bg-[#ffffff] w-full h-[100%] flex-[0.8] shadow-md rounded-[16px] p-[20px] flex flex-col justify-start items-start gap-5 ">
      <div className="w-full flex justify-between items-center ">
        <p className="text-[24px] font-[600]">Patients</p>
        <IoIosSearch size={25} />
      </div>
      <div className="w-full h-[1040px] flex flex-col justify-start items-center gap-2  overflow-y-scroll">
        {patients.map((patient, index) => (
          <PatientCard
            key={index}
            img={patient.profile_picture}
            name={patient.name}
            gender={patient.gender}
            age={patient.age}
            onClick={() => {
              setSelectedPatient(patient);
              console.log(patient)
            }}
          />
        ))}
      </div>
    </article>
  );
}

export default Patient;
