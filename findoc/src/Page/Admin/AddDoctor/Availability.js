import React from 'react';

const Availability = () => {
  return (
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
  );
};

export default Availability;
