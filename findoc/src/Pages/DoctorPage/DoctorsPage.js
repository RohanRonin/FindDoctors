import React from 'react';
import { useParams } from 'react-router-dom';
import DoctorCard from '../../Components/DoctorCards/DoctorCard';
import doctorData from '../../Components/DoctorCards/doctorData'; // Correct the import path
import './DoctorsPage.css';

const DoctorsPage = () => {
  const { specialty } = useParams(); // Get specialty from URL
  const filteredDoctors = doctorData.filter(doctor => doctor.specialty === specialty);

  return (
    <div className="doctors-page">
      <h1>Doctors specializing in {specialty}</h1>
      <div className="doctor-cards-container">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => (
            <DoctorCard 
              key={index}
              name={doctor.name} 
              image={doctor.image} 
              specialty={doctor.specialty} 
            />
          ))
        ) : (
          <p>No doctors found for {specialty}.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;
