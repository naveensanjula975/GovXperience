import React from 'react';
import './Feature.css';
import "@fontsource/lato";
import pic from './Rectangle.png';
import ipc from './vehicle.png';
import cip from './Rectangle788.png';
import icp from './Report.png';
import pqr from './repeat.png';

const Feature = () => {
  return (
    <div id="l">
    <div className="how">How it works</div>
    <div className="tran">Transfer your vehicle with 3 steps</div>
    <div className="feature">

      <div className="pick">
        <div>
        <img src={pic} className="rec1"/>
        <img src={ipc} className="rec12"/>
        </div>
        <div>
        <h6 id="q1">Pick Vehicle</h6>
        <h6 id="q2">Create account and make<br/> transfer request</h6>
        </div></div>

        <hr class="new1"></hr>

      <div className="fill">
        <div>
        <img src={pic} className="rec11"/>
        <img src={pqr} className="rec32"/>
      </div>
      <div>
      <h6 id="t1">Transfer Vehicle</h6>
        <h6 id="t2">DMT will check your details and<br/>do the ownership transfer</h6>
        </div>
        </div>

        <hr class="new2"></hr>

      <div className="tra">
      <div>
        <img src={cip} className="rec2"/>
        <img src={icp} className="rec22"/>
      </div>
      <div>
      <h6 id="w1">Fill Out Forms</h6>
        <h6 id="w2">After owner accepting the request<br/>fill forms to transfer</h6>
        </div></div>
    </div>
    </div>
  )
}

export default Feature