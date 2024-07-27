import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, specialty, hospital, image }) => {
  return (
    <div className="doctor-card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p><strong>Specialty:</strong> {specialty}</p>
        <p><strong>Hospital:</strong> {hospital}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
