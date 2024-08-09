import React from 'react';

const PersonalDetails = () => {
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
};

export default PersonalDetails;
