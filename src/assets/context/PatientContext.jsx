import { createContext, useState, useEffect } from "react";

export const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Fetch patients from API
  useEffect(() => {
    async function getAllPatients() {
      try {
        const URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
        const username = "coalition";
        const password = "skills-test";
        const encoded = btoa(`${username}:${password}`);

        const response = await fetch(URL, {
          method: "GET",
          headers: {
            Authorization: `Basic ${encoded}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Fetch failed");

        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error(error);
      }
    }

    getAllPatients();
  }, []);

  
  useEffect(() => {
  if (patients.length > 0 && !selectedPatient) {
    const defaultPatient = patients.find(
      (p) => p.name === "Jessica Taylor"
    );

    setSelectedPatient(defaultPatient || patients[0]);
  }
}, [patients, selectedPatient]);
  return (
    <PatientContext.Provider value={{ patients, selectedPatient, setSelectedPatient }}>
      {children}
    </PatientContext.Provider>
  );
}
