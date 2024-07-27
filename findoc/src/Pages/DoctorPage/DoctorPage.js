import React, { useState } from 'react';
import './DoctorPage.css';
import SearchBar from '../../Components/SearchBar/SearchBar';
import doctorData from '../../Components/DoctorCards/doctorData';
import DoctorCard from '../../Components/DoctorCards/DoctorCard';

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
      <h2>Our Doctors</h2>
      <div className="doctor-list">
        {filteredDoctors.map((doctor, index) => (
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
