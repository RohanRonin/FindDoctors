import React, { useState } from 'react';
import './Dashboard.css'; // Import CSS for styling
import DoctorForm from './AddDoctor'; // Assuming the form component is named DoctorForm

const Dashboard = () => {
  const [isHospitalDropdownOpen, setIsHospitalDropdownOpen] = useState(false);
  const [isDoctorDropdownOpen, setIsDoctorDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // Track the active section

  const toggleHospitalDropdown = () => {
    setIsHospitalDropdownOpen(!isHospitalDropdownOpen);
  };

  const toggleDoctorDropdown = () => {
    setIsDoctorDropdownOpen(!isDoctorDropdownOpen);
  };

  const handleAddDoctorClick = () => {
    setActiveSection('add-doctor'); // Set the active section to 'add-doctor'
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile">
          <img src="path_to_profile_image" alt="Profile" />
          <h3>Nick Gonzalez</h3>
          <p>Dept Admin</p>
        </div>
        <nav className="sidebar-nav">
          <div className="dropdown">
            <a href="#hospitals" onClick={toggleHospitalDropdown}>
              Hospitals
            </a>
            {isHospitalDropdownOpen && (
              <div className="dropdown-content">
                <a href="#hospital1" onClick={handleAddDoctorClick}>
                  Add Doctor
                </a>
                <a href="#hospital2">Hospitals List</a>
              </div>
            )}
          </div>

          <div className="dropdown">
            <a href="#doctors" onClick={toggleDoctorDropdown}>
              Doctors
            </a>
            {isDoctorDropdownOpen && (
              <div className="dropdown-content">
                <a href="#doctor1">Doctor Clinic</a>
                <a href="#doctor2">Doctors List</a>
              </div>
            )}
          </div>

          <a href="#accounts">Accounts</a>
        </nav>
      </aside>

      <main className="main-content">
        {/* Conditional rendering based on the active section */}
        {activeSection === 'add-doctor' && <DoctorForm />}
        {/* Other sections can be rendered based on different activeSection values */}
      </main>
    </div>
  );
};

export default Dashboard;
