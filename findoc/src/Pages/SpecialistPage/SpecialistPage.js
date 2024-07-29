import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SpecialistCard from '../../Components/SpecialistCard/SpecialistCard';
import './SpecialistPage.css';

const specialties = [
  { name: 'Cardiology', image: require('../../Assert/cardio.jpg') },
  { name: 'Neurologists', image: require('../../Assert/Neuro.jpg') },
  { name: 'Orthopedics', image: require('../../Assert/ortho.jpeg') },
  { name: 'Nephrologists', image: require('../../Assert/Nephro.jpg') },
  { name: 'Dermatology', image: require('../../Assert/Derm.jpeg') },
  { name: 'Pediatrics', image: require('../../Assert/Pedi.jpg') },
  { name: 'Oncology', image: require('../../Assert/Onco.webp') },
  { name: 'Psychiatry', image: require('../../Assert/Psyc.jpg') },
  { name: 'Gastroenterology', image: require('../../Assert/Gastro.jpg') }, 
  { name: 'Endocrinology', image: require('../../Assert/Endo.jpg') },
  // Add more specialties as needed
];

const SpecialistPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSpecialtyClick = (specialty) => {
    setSelectedSpecialty(specialty);
  };


  return (
    <div className="specialist-page">
      <div className="spec-search">
        <SearchBar onChange={handleSearchChange} value={searchTerm} />
      </div>
      <div className="specialty-cards">
        {specialties.map((specialty) => (
          <SpecialistCard 
            key={specialty.name} 
            specialty={specialty.name} 
            image={specialty.image} 
            onClick={handleSpecialtyClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialistPage;
