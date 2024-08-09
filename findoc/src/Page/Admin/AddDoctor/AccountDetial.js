import React from 'react';

const AccountDetails = () => {
  return (
    <form className="add-doctor-form-container">
      <div className="add-doctor-form-group">
        <label>Username <span>*</span></label>
        <input type="text" placeholder="Enter Username" required />
      </div>
      <div className="add-doctor-form-group">
        <label>Password <span>*</span></label>
        <input type="password" placeholder="Enter Password" required />
      </div>
      <div className="add-doctor-form-group">
        <label>Confirm Password <span>*</span></label>
        <input type="password" placeholder="Confirm Password" required />
      </div>
      <div className="add-doctor-form-actions">
        <button type="button" className="add-doctor-cancel-button">Cancel</button>
        <button type="submit" className="add-doctor-submit-button">Create Doctor Profile</button>
      </div>
    </form>
  );
};

export default AccountDetails;
