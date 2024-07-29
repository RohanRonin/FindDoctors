import React from 'react';
import './DCard.css';
import doctorImage1 from '../../Assert/logo.png';
import doctorImage2 from '../../Assert/logo.png';
import doctorImage3 from '../../Assert/logo.png';

const DCard = () => {
  return (
    <div className="doctor-section">
      <h2>Doctor</h2>
      <div className="card-container">
        <div className="card">
          <img src={doctorImage1} alt="Doctor 1" />
          <p>Doctor 1 Description</p>
        </div>
        <div className="card">
          <img src={doctorImage2} alt="Doctor 2" />
          <p>Doctor 2 Description</p>
        </div>
        <div className="card">
          <img src={doctorImage3} alt="Doctor 3" />
          <p>Doctor 3 Description</p>
        </div>
      </div>
    </div>
  );
};

export default DCard;
