import React from "react";
import down from "../assets/icon.png";

export default function OrderChart() {
  return (
    <div className="orderChart">
      <div className="head">
        <div className="head_left">
          <h1>Total Order</h1>
        </div>
        <div className="head-right">
          <h1>Last 12 Months</h1>
          <img className="down_sign" src={down} alt="" />
        </div>
      </div>
    </div>
  );
}
