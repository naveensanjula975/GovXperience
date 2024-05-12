import React from "react";
import "./InvitationCardfillform.css";

const InvitationCardfillform = () => {
  return (
    <div className="invitationcardComponent">
      <div className="descText">
        <strong className="description">
          Please select the “Fill forms to transfer” button to conveniently
          complete all necessary details for the vehicle transfer process.
        </strong>
      </div>
      <div className="fillformContainor">
        {/* <div className="vehicleNumberwithtext">
          <strong className="description">Vehicle Registration Number</strong>
          <input className="vehicleNumber" type="text" placeholder="CAX-5678" />
        </div> */}
        <button className="fillformsBtn">Fill forms to transfer</button>
      </div>
    </div>
  );
};

export default InvitationCardfillform;
