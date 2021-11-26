import React from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrHistory } from "react-icons/gr";
import plus from "../../assets/plus.png";
import history from "../../assets/history.png";

export default function OrderButtons() {
  return (
    <div className="orderButtons">
      <div className="one">
        <h1>Add New Order</h1>
        <img src={plus} alt="" />
      </div>
      <div className="two">
        <h1>Order History</h1>
        <img src={history} alt="" />
      </div>
    </div>
  );
}
