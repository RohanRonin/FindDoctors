import React, { useState } from "react";
import "../Component/DoctorCard.css";
import DoctorCard from "../Component/DoctorCard";
import "./Doctors.css";
import NavBar from "./NavBar";
import doctorData from "../Component/doctorData"; // Import doctorData from the provided file

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = doctorData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="doctors-container">
        <h1>Doctors</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search doctors..."
            className="search-input"
          />
        </div>
        <div className="doctor-cards-container">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
