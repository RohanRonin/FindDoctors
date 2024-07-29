import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import DoctorCard from '../../Components/DoctorCards/DoctorCard';
import doctorData from '../../Components/DoctorCards/doctorData'; 
import './DoctorPage.css';

const DoctorPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="doctor-page">
      <NavBar />
      <div className="doctor-search-container">
        <center>
          <SearchBar 
            searchTerm={searchTerm} 
            handleSearchChange={handleSearchChange} 
            placeholder="Search for doctors..." 
          />
        </center>
      </div>
      <div className="doctor-cards-container">
        {doctorData.map((doctor, index) => (
          <DoctorCard 
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            hospital={doctor.hospital}
            image={doctor.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorPage;
