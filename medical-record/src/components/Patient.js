import React, { useState, useEffect } from "react";
import axios from "axios";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/patients/").then((response) => {
      setPatients(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
