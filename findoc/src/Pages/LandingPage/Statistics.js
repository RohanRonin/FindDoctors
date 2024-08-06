import React from 'react';
import './Statistics.css';

function Statistics() {
  return (
    <section className="statistics">
      <div className="stat-item">
        <h3>12</h3>
        <p>Hospitals</p>
      </div>
      <div className="stat-item">
        <h3>500 +</h3>
        <p>Doctors</p>
      </div>
      <div className="stat-item">
        <h3>50,000 +</h3>
        <p>Successful Surgeries</p>
      </div>
      <div className="stat-item">
        <h3>10,00,000 +</h3>
        <p>Happy Patients/Year</p>
      </div>
    </section>
  );
}

export default Statistics;
