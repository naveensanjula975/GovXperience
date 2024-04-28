import React from 'react';
import './AccountSideBar.css';

const AccountSideBar = () => {
  return (
    <>
      <strong>User Profile</strong>
      <hr />
      <ul className='sideMenu'>
        <li>Dashboard</li>
        <li>Notification</li>
        <li>Security</li>
        <li>Settings</li>
        <li>Help</li>
      </ul>
      <button>Log out</button>
    </>
  )
}

export default AccountSideBar