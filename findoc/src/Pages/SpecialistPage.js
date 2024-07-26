import React from 'react';
import './SpecialistPage.css'; // Create this file for styling if needed

const SpecialistPage = () => {
  return (
    <div className="specialist-page">
      <section className="specialist-info">
        <h2>About Dr. John Doe</h2>
        <p>Dr. John Doe is a leading orthopedic specialist with over 20 years of experience in treating musculoskeletal issues.</p>
        <img src="doctor.jpg" alt="Dr. John Doe" />
        <p>Specializes in joint replacement, sports medicine, and spinal disorders.</p>
      </section>
      
      <section className="appointment-form">
        <h2>Schedule an Appointment</h2>
        <form>
          <label>
            Name:
            <input type="text" required />
          </label>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Preferred Date:
            <input type="date" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default SpecialistPage;
