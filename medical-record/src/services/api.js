// src/services/api.js

const API_BASE_URL = "https://medical-record-backend.onrender.com"; // Your backend URL

// Fetch all patients
export const fetchPatients = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/patients`);
    if (!response.ok) {
      throw new Error("Failed to fetch patients");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    return [];
  }
};

// Add a new patient
export const addPatient = async (patientData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/patients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patientData),
    });

    if (!response.ok) {
      throw new Error("Failed to add patient");
    }

    const newPatient = await response.json();
    return newPatient;
  } catch (error) {
    console.error("Error adding patient:", error);
  }
};
