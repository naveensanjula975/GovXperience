import React from 'react';
import './AccountSideBar.css';
import profileImg from '../../../Assets/Profile.svg';

const AccountSideBar = () => {
  return (
    <>
      <div className="sideMenu">
        <div className="profileDetails">
          <h5>User Profile</h5>
          <div className="line">
            <hr />
          </div>
          <img src={profileImg} alt="profile image" />
          <div className="details">
            <h6>Kumara Sangakkara</h6>
            <h6>19950265V</h6>
          </div>
        </div>
        <div className="menu">
          <ul>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Notification</a></li>
            <li><a href="">Security</a></li>
            <li><a href="">Settings</a></li>
            <li><a href="">Help</a></li>
          </ul>
        </div>
          <button>Log out</button>
      </div>
   </>
  )
}

export default AccountSideBar