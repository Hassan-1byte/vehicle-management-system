import React from "react";
import RecentOrders from "../../components/RecentOrders";
import Appointment from "../home-page/Appointment";
import OrderButtons from "../home-page/OrderButtons";
import OrderCards from "../home-page/OrderCards";
import OrderChart from "../home-page/OrderChart";

export default function Order() {
  return (
    <div className="homepage">
      <div className="home_first_half">
        {/* .......ORDER BOX........ */}
        <h2>Order</h2>
        <div className="order_box">
          <div className="order_cards">
            <OrderCards />
          </div>
          <div>
            <OrderButtons />
          </div>
        </div>

        {/* .......APPOINTMENT BOX........ */}

        <div className="appointment_box">
          <Appointment />
        </div>
      </div>
      {/* ......home_Second_half_Here...... */}
      <h1 className="order-heading">Order Chart</h1>
      <div className="home_second_half">
        <div className="apex_chart_container">
          <OrderChart />
        </div>
        <div className="recent_orders_container">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
