import React from 'react';
import './Header.css';
import "@fontsource/poppins";

const Header = () => {
  return (
    <div className='headerContainor'>
      <div className="logo">
        <h2>TransferEase</h2>
      </div>
      <div className="menuContainor">
        <ul className='menu'>
          <li><a href="">Home</a></li>
          <li><a href="">Downloads</a></li>
          <li><a href="">Transfer</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Login</a></li>
          <li><button id="van">Sign Up</button></li>
        </ul>
      </div>
      </div>
  
  )
}

export default Header