import React from 'react';
import './RequestCard.css';
import icon from '../../../../Assets/vehicleicon.svg';

const RequestCard = () => {
  return (
    <div className="requestContainor">
        <div className="icon"><img src={icon} alt="" /></div>
        <strong>Transfer Request</strong>
        <h2>CAX-5603</h2>
        <div className="buttonContainor">
          <button className='accept'>accept</button>
          <button className='reject'>reject</button>
        </div>
    </div>
  )
}

export default RequestCard