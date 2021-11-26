import React from "react";

import orderLogo from "../assets/order.png";
import completedLogo from "../assets/cOrder.png";
import pendingOrder from "../assets/pOrder.png";
import revenueLogo from "../assets/tRevenue.png";

export default function OrderCards() {
  const data = [
    {
      icon: orderLogo,
      title: "Total Orders",
      value: "1020",
    },

    {
      icon: completedLogo,
      title: "Completed Order",
      value: "960",
    },

    {
      icon: pendingOrder,
      title: "Pending Order",
      value: "60",
    },

    {
      icon: revenueLogo,
      title: "Total Revenue",
      value: "3,500,000 Rs",
    },
  ];

  return (
    <div className="orderCards">
      <h2>Order</h2>
      <div className="orderContainer">
        {data.map((order, index) => {
          return (
            <div className="ordercard">
              <img src={order.icon} alt="" />

              <div className="title">
                <h2>{order.title}</h2>
              </div>
              <div className="value">
                <h2>{order.value}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
