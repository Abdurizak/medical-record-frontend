import React, { useState, useEffect } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/doctors/").then((response) => {
      setDoctors(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
