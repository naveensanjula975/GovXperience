import React from "react";
import "./AccountDashboard.css";
import RequestCard from "./RequestCard/RequestCard";
import InvitationCard from "./InvitationCard/InvitationCard";
import VehicleCard from "./VehicleCard/VehicleCard";

const AccountDashboard = () => {
  return (
    <div>
      <div className="requestSection">
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
      <div className="invitationSection">
        <InvitationCard />
      </div>
      <div className="myVehicle">
        My Vehicles
        <div className="vehicleSection">
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
