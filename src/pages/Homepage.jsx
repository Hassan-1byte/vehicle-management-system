import React from "react";

import OrderCards from "../components/OrderCards";
import OrderButtons from "../components/OrderButtons";
import Appointment from "../components/Appointment";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="home_first_half">
        {/* .......ORDER BOX........ */}

        <div className="order_box">
          <div className="order_cards">
            <OrderCards />
          </div>
          <div className="order_buttons">
            <OrderButtons />
          </div>
        </div>

        {/* .......APPOINTMENT BOX........ */}

        <div className="appointment_box">
          <Appointment />
        </div>
      </div>
    </div>
  );
}
