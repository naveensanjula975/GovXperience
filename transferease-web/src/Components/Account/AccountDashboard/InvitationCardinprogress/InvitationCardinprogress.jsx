import React from "react";
import "./InvitationCardinprogress.css";

const InvitationCardinprogress = () => {
  return (
    <div className="invitationcardComponent">
      <div className="descText">
        <strong className="description">
          Your request is being checked by DMT. If there are any mistakes in
          your documents, they’ll let you know to fix them. If everything good,
          they’ll finish your transfer.
        </strong>
      </div>
      <div className="progContainor">
        {/* <div className="vehicleNumberwithtext">
          <strong className="description">Vehicle Registration Number</strong>
          <input className="vehicleNumber" type="text" placeholder="CAX-5678" />
        </div> */}
        <div className="progressContainor">
          <strong className="prog">50%</strong>
          <div className="progressBar">
            <div className="progress"></div>
          </div>
        </div>
        <button className="requestsendBtn">refill form</button>
      </div>
    </div>
  );
};

export default InvitationCardinprogress;
