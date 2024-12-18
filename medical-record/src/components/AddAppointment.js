import React, { useState } from "react";
import axios from "axios";

const AddAppointment = () => {
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/appointments/", { patient_id: patientId, doctor_id: doctorId, date, reason }).then(() => {
      alert("Appointment added successfully!");
      setPatientId("");
      setDoctorId("");
      setDate("");
      setReason("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Appointment</h2>
      <input
        type="text"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Doctor ID"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddAppointment;
