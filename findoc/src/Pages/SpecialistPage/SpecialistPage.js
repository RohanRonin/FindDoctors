import React, { useState } from 'react';
import './SpecialistPage.css';
import SearchBar from '../../Components/SearchBar/SearchBar';
import doctorData from '../../Components/DoctorCards/doctorData';
import DoctorCard from '../../Components/DoctorCards/DoctorCard';
import SpecialtyCard from '../../Components/SpecialistCard/SpecialistCard';

const specialties = [
  { name: 'Cardiology', image: 'path/to/cardiology.jpg' },
  { name: 'Pediatrics', image: 'path/to/pediatrics.jpg' },
  { name: 'Orthopedics', image: 'path/to/orthopedics.jpg' },
  { name: 'Emergency Medicine', image: 'path/to/emergency.jpg' },
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

  const filteredDoctors = doctorData.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSpecialty === '' || doctor.specialty === selectedSpecialty)
  );

  return (
    <div className="specialist-page">
      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <h2>Specialties</h2>
      {selectedSpecialty === '' ? (
        <div className="specialty-list">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              specialty={specialty.name}
              image={specialty.image}
              onClick={handleSpecialtyClick}
            />
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedSpecialty('')}>Back to Specialties</button>
          <h2>{selectedSpecialty} Doctors</h2>
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
      )}
    </div>
  );
};

export default SpecialistPage;
