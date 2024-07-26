import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import DoctorCard from '../Components/DoctorCards/DoctorCard';
import doctorData from '../Components/DoctorCards/doctorData';  // Adjust the path as necessary
import './DoctorPage.css';

const DoctorPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = doctorData.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="doctor-page">
      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <div className="doctor-list">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard 
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            address={doctor.address}
            image={doctor.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorPage;
