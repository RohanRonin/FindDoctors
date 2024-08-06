import React from 'react';
import Drawer from '@mui/material/Drawer';
import './UserProfile.css';
import profile from '../../Assert/Doc.jpg';

const UserProfile = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
        className="profile-drawer-content"
      >
        <div className="general-info">
          <div className="profile-pic">
            <img src={profile} alt="Profile" />
          </div>
          <div className="details">
            <h2>Darlene Gibbs (34/F)</h2>
            <p>Email: darlene_gibbs@gmail.com</p>
            <p>Phone: (219) 555-0114</p>
            <p>Job Type: Private</p>
            <p>Age: 34</p>
            <p>Address: 6391 Elgin St. Celina, Delaware 10299</p>
            <p>Birthday: 1984-07-09</p>
            <button className="edit-button">Edit Profile</button>
          </div>
        </div>

        <div className="appointment-info">
          <h3>Appointment Information</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Date/Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Therapist</td>
                <td>2021-05-20/13:00 pm</td>
                <td>Scheduled</td>
              </tr>
              <tr>
                <td>Dentist</td>
                <td>2021-05-17/10:45 am</td>
                <td>Scheduled</td>
              </tr>
              <tr>
                <td>Antimicrosomal Antibody Assay</td>
                <td>2021-05-10/09:00 am</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>Analysis of bacterial seeding of detachable NDP</td>
                <td>2021-05-09/15:15 pm</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>Dentist</td>
                <td>2021-04-28/11:10 am</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>Therapist</td>
                <td>2021-04-22/14:20 pm</td>
                <td>Confirmed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="insurance-benefits">
          <h3>Insurance Benefits</h3>
          <table>
            <thead>
              <tr>
                <th>Insurance Benefits</th>
                <th>Payout</th>
                <th>Date/Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Add insurance benefits data here */}
            </tbody>
          </table>
          <button className="edit-button">Edit Insurance Benefits</button>
        </div>
      </div>
    </Drawer>
  );
};

export default UserProfile;
