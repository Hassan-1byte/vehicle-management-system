import React from "react";
import Appointment from "./Appointment";
import OrderButtons from "./OrderButtons";
import OrderCards from "./OrderCards";
import OrderChart from "../../components/OrderChart";
import RecentOrders from "../../components/RecentOrders";

export default function Homepage() {
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
