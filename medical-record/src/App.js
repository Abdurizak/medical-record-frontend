import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Patients from "./components/Patients";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/patients" element={<Patients />} />
      </Routes>
    </Router>
  );
};

export default App;