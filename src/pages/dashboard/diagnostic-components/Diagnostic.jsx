import DiagnosticCards from "./DiagnosticCards";
import img1 from "../../../assets/respiratory-rate.svg";
import img2 from "../../../assets/temperature.svg";
import img3 from "../../../assets/HeartBPM.svg";

import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import ChartCard from "./ChartCard";
import { useContext, useState } from "react";
import { PatientContext } from "../../../assets/context/PatientContext";
import DiagnosticList from "./DiagnosticList";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

import { Line } from "react-chartjs-2";

function Diagnostic() {
  const { selectedPatient } = useContext(PatientContext);
  const [monthsToShow, setMonthsToShow] = useState(6);

  if (!selectedPatient) {
    return (
      <article className="w-full h-[100%] flex flex-col justify-start items-center flex-[2]">
        <div className="bg-[#ffffff] w-full h-[auto] flex flex-col justify-start items-start gap-5 rounded-[16px] shadow-sm p-[20px]">
          <p>Select a patient to view diagnostic history</p>
        </div>
      </article>
    );
  }

  const latestDiagnosis = selectedPatient.diagnosis_history?.[0] || {};

  const systolic = latestDiagnosis.blood_pressure?.systolic?.value || 0;
  const diastolic = latestDiagnosis.blood_pressure?.diastolic?.value || 0;
  const respiratory = latestDiagnosis.respiratory_rate?.value || "N/A";
  const temperature = latestDiagnosis.temperature?.value || "N/A";
  const heartRate = latestDiagnosis.heart_rate?.value || "N/A";

  const diagnosisHistory = selectedPatient?.diagnosis_history || [];

  const monthMap = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  
  const sortedHistory = [...diagnosisHistory].sort((a, b) => {
    const dateA = new Date(a.year, monthMap[a.month] - 1);
    const dateB = new Date(b.year, monthMap[b.month] - 1);
    return dateA - dateB;
  });

  
  const filteredHistory = sortedHistory.slice(-monthsToShow);

  const labels = filteredHistory.map((item) => `${item.month.slice(0,3)} ${item.year}`);
  const systolicData = filteredHistory.map(
    (item) => item.blood_pressure?.systolic?.value ?? 0,
  );
  const diastolicData = filteredHistory.map(
    (item) => item.blood_pressure?.diastolic?.value ?? 0,
  );

  return (
    <article className="  w-full h-[100%] flex flex-col justify-start items-center flex-[2] gap-5 ">
      <div className="bg-[#ffffff] w-full h-[auto] flex flex-col justify-start items-start gap-5 rounded-[16px] shadow-md p-[20px]">
        <h1 className="font-[600] text-[24px] mb-5">Diagnostic History</h1>

        <div className="bg-[#f4f0fe] w-full h-[auto] rounded-[12px] flex justify-center items-start p-[15px]">
          <div className="bg-[] w-full h-[100%] flex-[2] flex flex-col justify-center items-center gap-3">
            <div className="bg-[] w-full flex justify-between items-center px-[20px]">
              <p className="font-[700] text-[18px]">Blood Pressure</p>
              <select
                value={monthsToShow}
                onChange={(e) => setMonthsToShow(Number(e.target.value))}
                className="border-none rounded text-[14px]"
              >
                <option value={3}>Last 3 months</option>
                <option value={6}>Last 6 months</option>
                <option value={12}>Last 12 months</option>
                <option value={25}>All months</option>
              </select>
            </div>
            <Line
              data={{
                labels,
                datasets: [
                  {
                    data: systolicData,
                    borderColor: "#e66fd2",
                    backgroundColor: "#e66fd2",
                    tension: 0.4,
                  },
                  {
                    data: diastolicData,
                    borderColor: "#8c6fe6",
                    backgroundColor: "#8c6fe6",
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: { y: { beginAtZero: false } },
              }}
            />
          </div>
          <div className="bg-[] w-full h-[100%] flex-[0.7] px-[20px] flex flex-col justify-start items-start gap-3">
            <ChartCard
              title="Systolic"
              icon={MdOutlineArrowDropUp}
              num={systolic}
              average="Higher than Average"
              color="e66fd2"
            />
            <hr className="text-gray-300 w-full" />
            <ChartCard
              title="Diastolic"
              icon={MdOutlineArrowDropDown}
              num={diastolic}
              average="Lower than Average"
              color="8c6fe6"
            />
          </div>
        </div>

        <div className="bg-[] flex justify-center items-center w-full h-[250px] gap-10">
          <DiagnosticCards
            img={img1}
            title="Respiratory Rate"
            status="Normal"
            bpm={`${respiratory} bpm`}
            color="e0f3fa"
          />
          <DiagnosticCards
            img={img2}
            title="Temperature"
            status="Normal"
            bpm={`${temperature} °F`}
            color="ffe6e9"
          />
          <DiagnosticCards
            img={img3}
            title="Heart Rate"
            status="Lower than Average"
            bpm={`${heartRate} bpm`}
            color="ffe6f1"
          />
        </div>
      </div>
      <DiagnosticList />
    </article>
  );
}

export default Diagnostic;
