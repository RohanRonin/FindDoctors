import React, { useState } from 'react';
import './AddDoctor.css'; // Import your CSS file

const AddDoctor = () => {
  const [activeTab, setActiveTab] = useState('personalDetails');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personalDetails':
        return (
          <form className="add-doctor-form-container">
            {/* Personal Details form fields */}
            <div className="add-doctor-form-group">
              <label>First Name <span>*</span></label>
              <input type="text" placeholder="Enter First Name" required />
            </div>
            <div className="add-doctor-form-group">
              <label>Last Name <span>*</span></label>
              <input type="text" placeholder="Enter Last Name" required />
            </div>
            <div className="add-doctor-form-group">
              <label>Age <span>*</span></label>
              <select required>
                <option>Select Age</option>
                {/* Add options for age here */}
              </select>
            </div>
            <div className="add-doctor-form-group">
              <label>Gender <span>*</span></label>
              <div className="add-doctor-radio-group">
                <label>
                  <input type="radio" name="gender" value="Male" required /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="Female" required /> Female
                </label>
              </div>
            </div>
            <div className="add-doctor-form-group">
              <label>Create ID <span>*</span></label>
              <input type="text" placeholder="Create Unique ID" required />
            </div>
            <div className="add-doctor-form-group">
              <label>Email ID <span>*</span></label>
              <input type="email" placeholder="Enter Email ID" required />
            </div>
            <div className="add-doctor-form-group">
              <label>Mobile Number <span>*</span></label>
              <input type="tel" placeholder="Enter Mobile Number" required />
            </div>
            <div className="add-doctor-form-group">
              <label>Marital Status</label>
              <select>
                <option>Select</option>
                {/* Add options for marital status here */}
              </select>
            </div>
            <div className="add-doctor-form-group">
              <label>Qualification</label>
              <select>
                <option>Select</option>
                {/* Add options for qualification here */}
              </select>
            </div>
            <div className="add-doctor-form-group">
              <label>Designation</label>
              <select>
                <option>Select</option>
                {/* Add options for designation here */}
              </select>
            </div>
            <div className="add-doctor-form-group">
              <label>Blood Group <span>*</span></label>
              <select required>
                <option>Select</option>
                {/* Add options for blood group here */}
              </select>
            </div>
            <div className="add-doctor-form-group">
              <label>Address</label>
              <input type="text" placeholder="Enter Address" />
            </div>
            <div className="add-doctor-form-group">
              <label>Country</label>
              <select>
                <option>Select</option>
                {/* Add options for country here */}
              </select>
            </div>
            <div className="add-doctor-form-group">
              <label>State</label>
              <select>
                <option>Select</option>
                {/* Add options for state here */}
              </select>
            </div>
            <div className="add-doctor-form-group">
              <label>City</label>
              <input type="text" placeholder="Enter City" />
            </div>
            <div className="add-doctor-form-group">
              <label>Postal Code</label>
              <input type="text" placeholder="Enter Postal Code" />
            </div>
            <div className="add-doctor-form-actions">
              <button type="button" className="add-doctor-cancel-button">Cancel</button>
              <button type="submit" className="add-doctor-submit-button">Create Doctor Profile</button>
            </div>
          </form>
        );
      case 'profileAndBio':
        return (
          <div>
            <h3>Profile and Bio</h3>
            {/* Add fields specific to Profile and Bio */}
          </div>
        );
      case 'availability':
        return (
          <div>
            <h3>Availability</h3>
            <form className="add-doctor-form-container">
              <div className="add-doctor-form-group">
                <label>Sun</label>
                <select>
                  <option>From</option>
                  {/* Add options for time */}
                </select>
                <select>
                  <option>To</option>
                  {/* Add options for time */}
                </select>
              </div>
              <div className="add-doctor-form-group">
                <label>Mon</label>
                <select>
                  <option>From</option>
                  {/* Add options for time */}
                </select>
                <select>
                  <option>To</option>
                  {/* Add options for time */}
                </select>
              </div>
              <div className="add-doctor-form-group">
                <label>Tue</label>
                <select>
                  <option>From</option>
                  {/* Add options for time */}
                </select>
                <select>
                  <option>To</option>
                  {/* Add options for time */}
                </select>
              </div>
              <div className="add-doctor-form-group">
                <label>Wed</label>
                <select>
                  <option>From</option>
                  {/* Add options for time */}
                </select>
                <select>
                  <option>To</option>
                  {/* Add options for time */}
                </select>
              </div>
              <div className="add-doctor-form-group">
                <label>Thu</label>
                <select>
                  <option>From</option>
                  {/* Add options for time */}
                </select>
                <select>
                  <option>To</option>
                  {/* Add options for time */}
                </select>
              </div>
              <div className="add-doctor-form-group">
                <label>Fri</label>
                <select>
                  <option>From</option>
                  {/* Add options for time */}
                </select>
                <select>
                  <option>To</option>
                  {/* Add options for time */}
                </select>
              </div>
              <div className="add-doctor-form-group">
                <label>Sat</label>
                <select>
                  <option>From</option>
                  {/* Add options for time */}
                </select>
                <select>
                  <option>To</option>
                  {/* Add options for time */}
                </select>
              </div>
              <div className="add-doctor-form-actions">
                <button type="button" className="add-doctor-cancel-button">Cancel</button>
                <button type="submit" className="add-doctor-submit-button">Create Doctor Profile</button>
              </div>
            </form>
          </div>
        );
      case 'accountDetails':
        return (
          <div>
            <h3>Account Details</h3>
            {/* Add fields specific to Account Details */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="add-doctor-container">
      <div className="add-doctor-tabs">
        <button
          className={`add-doctor-tab ${activeTab === 'personalDetails' ? 'add-doctor-active' : ''}`}
          onClick={() => setActiveTab('personalDetails')}
        >
          Personal Details
        </button>
        <button
          className={`add-doctor-tab ${activeTab === 'profileAndBio' ? 'add-doctor-active' : ''}`}
          onClick={() => setActiveTab('profileAndBio')}
        >
          Profile and Bio
        </button>
        <button
          className={`add-doctor-tab ${activeTab === 'availability' ? 'add-doctor-active' : ''}`}
          onClick={() => setActiveTab('availability')}
        >
          Availability
        </button>
        <button
          className={`add-doctor-tab ${activeTab === 'accountDetails' ? 'add-doctor-active' : ''}`}
          onClick={() => setActiveTab('accountDetails')}
        >
          Account Details
        </button>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default AddDoctor;
