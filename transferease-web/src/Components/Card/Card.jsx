import React from 'react';
import './Card.css';
import logo from './logo.svg';
import cur1 from './cur1.png';
import cur2 from './cur2.png';
import cur3 from './cur3.png';
import cur5 from './cur5.png';
import cur6 from './cur6.png';
import cur7 from './cur7.png';

const card = () => {
  return (
    <div>
    <div  className="card">
      <h6 id="enj">Enjoy with our service<br/>It's Free</h6>
      <h6 id="fas">For faster,easier transfering and save time.</h6>
     
      <img src={logo} className="trans"/>
      <img src={cur1} className="curve1"/>
      <img src={cur2} className="curve2"/>
      <img src={cur3} className="curve3"/>
      <img src={cur5} className="curve5"/>
      <img src={cur6} className="curve6"/>
      <img src={cur7} className="curve7"/>
      <button id="gets">Get Start</button>
    </div>
    </div>
  )
}

export default card