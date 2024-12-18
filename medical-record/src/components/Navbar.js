import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/patients">Patients</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/appointments">Appointments</Link>
      <Link to="/add-patient">Add Patient</Link>
      <Link to="/add-doctor">Add Doctor</Link>
      <Link to="/add-appointment">Add Appointment</Link>
    </nav>
  );
};

export default Navbar;
