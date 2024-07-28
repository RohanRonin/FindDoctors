import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
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
    </div>
  );
};

export default DoctorPage;
