// src/App.js
import React, { useEffect, useState } from "react";
import { fetchPatients } from "./services/api"; // Importing the API function

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      const data = await fetchPatients();
      setPatients(data);
    };

    getPatients();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h1>Patients List</h1>
      <ul>
        {patients.length > 0 ? (
          patients.map((patient) => (
            <li key={patient.id}>
              {patient.name} - {patient.age} years old
            </li>
          ))
        ) : (
          <li>No patients available</li>
        )}
      </ul>
    </div>
  );
}

export default App;
