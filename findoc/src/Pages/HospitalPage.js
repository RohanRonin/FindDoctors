import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import './HospitalPage.css';

const HospitalPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const hospitals = [
    'General Hospital',
    'City Hospital',
    'Regional Medical Center',
    'Community Health Clinic',
    'St. Mary’s Hospital'
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hospital-file">
      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <ul>
        {filteredHospitals.map((hospital, index) => (
          <li key={index}>{hospital}</li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalPage;
