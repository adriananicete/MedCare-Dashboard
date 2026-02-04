import { useContext } from "react";
import { PatientContext } from "../../../assets/context/PatientContext";
import ProfileCards from "./ProfileCards";
import { MdOutlineDateRange } from "react-icons/md";
import { BsGenderFemale } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import LabResults from "../diagnostic-components/LabResults";

function Profile() {
  const { selectedPatient } = useContext(PatientContext);

  if (!selectedPatient) {
    return (
      <article className="w-full h-[100%] flex flex-col justify-start items-center flex-[2]">
        <div className="bg-[#ffffff] w-full h-[auto] flex flex-col justify-start items-start gap-5 rounded-[16px] shadow-sm p-[20px]">
          <p>Select a patient to view profile</p>
        </div>
      </article>
    );
  }

  return (
    <section className="bg-[] w-full h-[auto] flex-[1] flex flex-col justify-start items-center gap-5">
      <article className="bg-[#fff] shadow-md w-full h-[auto] flex flex-col justify-start items-center rounded-[16px] py-[20px]">
        <div className="w-full flex justify-center items-center flex-col py-[20px]">
          <div className="bg-gray-400 w-[160px] h-[160px] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={selectedPatient.profile_picture}
              alt={selectedPatient.name}
            />
          </div>
          <p className="text-[24px] font-[700]">{selectedPatient.name}</p>
        </div>

        <div className="bg-[] w-[70%] h-[350px] flex flex-col justify-between">
          <ProfileCards
            icon={MdOutlineDateRange}
            title="Date of Birth"
            data={selectedPatient.date_of_birth}
          />
          <ProfileCards
            icon={BsGenderFemale}
            title="Gender"
            data={selectedPatient.gender}
          />
          <ProfileCards
            icon={MdOutlinePhone}
            title="Contact Info"
            data={selectedPatient.phone_number}
          />
          <ProfileCards
            icon={MdOutlinePhone}
            title="Emergency Contacts"
            data={selectedPatient.emergency_contact}
          />
          <ProfileCards
            icon={LuShieldCheck}
            title="Insurance Provider"
            data={selectedPatient.insurance_type}
          />
        </div>

        <div className="w-full h-[85px] bg-[] flex justify-center items-end">
          <button className="font-[600] cursor-pointer bg-[#01f0d0] px-4 py-2 rounded-[41px] py-[15px] px-[40px]">
            Show All Information
          </button>
        </div>
      </article>

      <LabResults />
    </section>
  );
}

export default Profile;
