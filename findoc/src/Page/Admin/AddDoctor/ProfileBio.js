import React from 'react';

const ProfileBio = () => {
  return (
    <form className="add-doctor-form-container">
      <div className="add-doctor-form-group">
        <label>Upload Profile</label>
        <div className="add-doctor-upload-photo">
          <input type="file" id="profile-photo-upload" style={{ display: 'none' }} />
          <label htmlFor="profile-photo-upload" className="upload-photo-label">
            Click here to upload your photo.
          </label>
        </div>
      </div>
      <div className="add-doctor-form-group">
        <label>Write Bio</label>
        <textarea
          placeholder="Hello,\n\nMy name is Dr. David Kemrin. Write your bio here."
          rows="10"
          style={{ width: '100%', padding: '10px', fontSize: '16px', lineHeight: '1.5' }}
        />
      </div>
      <div className="add-doctor-form-actions">
        <button type="button" className="add-doctor-cancel-button">Cancel</button>
        <button type="submit" className="add-doctor-submit-button">Create Doctor Profile</button>
      </div>
    </form>
  );
};

export default ProfileBio;
