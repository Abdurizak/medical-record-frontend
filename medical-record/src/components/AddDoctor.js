import React, { useState } from "react";
import axios from "axios";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/doctors/", { name, specialty }).then(() => {
      alert("Doctor added successfully!");
      setName("");
      setSpecialty("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Doctor</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddDoctor;
