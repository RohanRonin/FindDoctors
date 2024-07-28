import React, { useState } from 'react';
import './SpecialistPage.css';
import SearchBar from '../../Components/SearchBar/SearchBar';
import doctorData from '../../Components/DoctorCards/doctorData';
import DoctorCard from '../../Components/DoctorCards/DoctorCard';
import SpecialtyCard from '../../Components/SpecialistCard/SpecialistCard';

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

  const filteredDoctors = doctorData.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSpecialty === '' || doctor.specialty === selectedSpecialty)
  );

  return (
    <div className="specialist-page">
    <div className='specialistm'>
      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      </div>

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
