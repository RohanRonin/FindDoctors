import React from 'react';
import './ProcessSteps.css';

const ProcessSteps = () => {
  return (
    <section className="process-section">
      <h3 className="process-title">Process</h3>
      <h2 className="process-subtitle">How It Helps You To Keep Healthy</h2>
      <div className="process-steps">
        <div className="step">
          <div className="step-number">01</div>
          <img src="your-image1-url" alt="Get Appointment" className="step-image" />
          <h4 className="step-title">Get Appointment</h4>
          <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <img src="your-image2-url" alt="Start Check-Up" className="step-image" />
          <h4 className="step-title">Start Check-Up</h4>
          <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <img src="your-image3-url" alt="Enjoy Healthy Life" className="step-image" />
          <h4 className="step-title">Enjoy Healthy Life</h4>
          <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
