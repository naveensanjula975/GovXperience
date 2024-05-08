import React from 'react'
import './Help.css'
import "@fontsource/lato";
import carbo from './suv.png';
import nitro from './bmw.png';

const help = () => {
  return (
    <div>
      <div className="helpl">
        <div className="hyd">Streamline Vehicle Ownership Transfer</div>
        <div className="hel">Simplifying the Process for<br/> Seamless Transfers</div>
        <div className="lit">Our platform offers a hassle-free solution for transferring vehicle ownership,<br/> making the process efficient and straightforward.</div>
        <div className="ber"><button id="bor">More Details</button></div>
        <div class="vl"></div>
        <div><img src={nitro} className="flo"/></div>
      </div>
      <div className="helpr">
      <div><img src={carbo} className="oxy"/></div>
      <div className="neo">Streamline Your Vehicle Ownership Transfer Process</div>
      <div className="sod">Efficiency at Your Fingertips</div>
        <div className="mag">Welcome to our streamlined platform where transferring vehicle ownership is<br/>as easy as a few clicks. Say goodbye to paperwork hassles and long queues.<br/>Experience a seamless process designed to save you time and effort.</div>
        <div className="alu"><button id="bor">More Details</button></div>
        <div class="vl2"></div>
      </div>
    </div>
  )
}

export default help