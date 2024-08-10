import React from 'react';
import Drawer from '@mui/material/Drawer';
import './Profile.css';

const Profile = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
        className="profile-drawer-content"
      >
        <div className="profile-info">
          <div className="profile-pic">
            <img src="" alt="Profile" />
          </div>
          <div className="details">
            <h2>Darlene Gibbs (34/F)</h2>
            <table className="profile-table">
              <tbody>
                <tr>
                  <td>Email:</td>
                  <td>darlene_gibbs@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>(219) 555-0114</td>
                </tr>
                <tr>
                  <td>Job Type:</td>
                  <td>Private</td>
                </tr>
                <tr>
                  <td>Age:</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>6391 Elgin St. Celina, Delaware 10299</td>
                </tr>
                <tr>
                  <td>Birthday:</td>
                  <td>1984-07-09</td>
                </tr>
              </tbody>
            </table>
            <div className="button-group">
              <button className="edit-button">Edit Profile</button>
              <button className="logout-button">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Profile;
