import React from 'react';
import './AccountHeader.css';
import likeImg from '../../../Assets/Like.svg';
import notificationImg from '../../../Assets/Notification.svg';
import settingsImg from '../../../Assets/Settings.svg';
import profileImg from '../../../Assets/Profile.svg';

const AccountHeader = () => {
  return (
    <div className="accountHeader">
        <div className="logo">
            <h2 className="logoText">TransferEase</h2>
        </div>
        <div className="accountMenu">
            <ul className="menu">
                <li><a href=""><img src={likeImg} alt="hart" /></a></li>
                <li><a href=""><img src={notificationImg} alt="hart" /></a></li>
                <li><a href=""><img src={settingsImg} alt="hart" /></a></li>
                <li><a href=""><img src={profileImg} alt="hart" /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default AccountHeader