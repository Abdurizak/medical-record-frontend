import React, { useState } from "react";
import axios from "axios";

const AddPatient = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/patients/", { name, age, gender }).then(() => {
      alert("Patient added successfully!");
      setName("");
      setAge("");
      setGender("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Patient</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPatient;
