import React from 'react';
import './Feature.css'; // Import the CSS file

const Feature = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-text">
          <h3>Why Choose Us</h3>
          <h1>Choose The Best For Your Health</h1>
          <div className="features-list">
            <div className="feature-item">
              <div className="icon professional-staff-icon"></div>
              <div className="feature-content">
                <h4>Professional Staff</h4>
                <p>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon emergency-case-icon"></div>
              <div className="feature-content">
                <h4>Emergency Case</h4>
                <p>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon online-appointment-icon"></div>
              <div className="feature-content">
                <h4>Online Appointment</h4>
                <p>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon services-icon"></div>
              <div className="feature-content">
                <h4>24/7 Services</h4>
                <p>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-image">
          <img src="" alt="Medical Team" />
        </div>
      </div>
      <div className="features-stats">
        <div className="stat-item">
          <h3>75+</h3>
          <p>Expert Doctors</p>
        </div>
        <div className="stat-item">
          <h3>7k</h3>
          <p>Happy Patients</p>
        </div>
        <div className="stat-item">
          <h3>850</h3>
          <p>Modern Rooms</p>
        </div>
        <div className="stat-item">
          <h3>15</h3>
          <p>Awards Win</p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
