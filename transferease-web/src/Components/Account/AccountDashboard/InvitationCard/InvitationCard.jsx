import React from "react";
import "./InvitationCard.css";

const InvitationCard = () => {
  return (
    <div className="invitationcardComponent">
      <div className="descText">
        <strong className="description">
          Welcome to our vehicle transfer request service! Please insert the
          registration number of your requesting vehicle here to start the
          smooth transition of your vehicle's ownership. Afterward, the owner of
          the vehicle will concern on your request.
        </strong>
      </div>
      <div className="requestsendContainor">
        <div className="vehicleNumberwithtext">
          <strong className="description">Vehicle Registration Number</strong>
          <input className="vehicleNumber" type="text" placeholder="CAX-5678" />
        </div>
        <button className="requestsendBtn">Request Transfer</button>
      </div>
    </div>
  );
};

export default InvitationCard;
