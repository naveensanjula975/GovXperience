import React from "react";
import "./VehicleCard.css";
import vehicleImg from "../../../../../src/Assets/carimg.svg";

function VehicleCard() {
  return (
    <div className="vehicleCard">
      <strong className="modleName">Mini Cooper</strong>
      <strong className="brandName">BMW</strong>
      <img src={vehicleImg} alt="" className="vehicleImg" />
      <strong className="details">
        <a href="">Details</a>
      </strong>
    </div>
  );
}

export default VehicleCard;
