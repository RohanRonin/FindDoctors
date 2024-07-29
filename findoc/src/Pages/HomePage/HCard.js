import React from 'react';
import './HCard.css';
import hospitalImage1 from '../../Assert/logo.png';
import hospitalImage2 from '../../Assert/logo.png';
import hospitalImage3 from '../../Assert/logo.png';

const HospitalCard = () => {
  return (
    <div className="hospital-section">
      <h2>Hospital</h2>
      <div className="card-container">
        <div className="card">
          <img src={hospitalImage1} alt="Hospital 1" />
          <p>Hospital 1 Description</p>
        </div>
        <div className="card">
          <img src={hospitalImage2} alt="Hospital 2" />
          <p>Hospital 2 Description</p>
        </div>
        <div className="card">
          <img src={hospitalImage3} alt="Hospital 3" />
          <p>Hospital 3 Description</p>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
