import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import HospitalCard from '../../Components/HospitalCards/HospitalCard';
import hospitalData from '../../Components/HospitalCards/hospitalData'; // Ensure you have hospital data
import './HospitalPage.css';

const HospitalPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHospitals = hospitalData.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hospital-page">
      <NavBar />
      <div className="hospital-search-container">
        <SearchBar 
          searchTerm={searchTerm} 
          handleSearchChange={handleSearchChange} 
          placeholder="Search for hospitals..." 
        />
      </div>
      <div className="hospital-list">
        {filteredHospitals.map((hospital, index) => (
          <HospitalCard 
            key={index}
            name={hospital.name}
            address={hospital.address}
            specialty={hospital.specialty}
            image={hospital.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HospitalPage;
