import React from 'react';
import './HospitalCard.css';

const HospitalCard = ({ name, address, specialty, image }) => {
  return (
    <div className="hospital-card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Specialty:</strong> {specialty}</p>
      </div>
    </div>
  );
};

export default HospitalCard;
