import React, { useState, useEffect } from "react";
import axios from "axios";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/appointments/").then((response) => {
      setAppointments(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            Patient ID: {appointment.patient_id}, Doctor ID: {appointment.doctor_id}, Date: {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
