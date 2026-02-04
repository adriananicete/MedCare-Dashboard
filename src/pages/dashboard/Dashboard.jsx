import { PatientProvider } from "../../assets/context/PatientContext";
import Diagnostic from "./diagnostic-components/Diagnostic";
import Patient from "./patient-components/Patient";
import Profile from "./profile-components/Profile";


function Dashboard() {
    return ( 
        <PatientProvider>
            <section className="bg-[] w-full h-[auto] flex-1 flex justify-center items-start gap-10">

            <Patient />
            <Diagnostic />
            <Profile />
        </section>
        </PatientProvider>
     );
}

export default Dashboard;