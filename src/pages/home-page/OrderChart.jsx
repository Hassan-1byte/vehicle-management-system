import React, { useState } from "react";
import down from "../../assets/icon.png";
import Chart from "react-apexcharts";

export default function OrderChart() {
  const [series, setSeries] = useState([
    {
      name: "Revenue",
      data: [10, 41, 25, 51, 49, 62, 60, 91, 48],
    },
    {
      name: "Order",
      data: [10, 41, 35, 51, 19, 62, 69, 11, 18],
    },
  ]);
  const [option, setOption] = useState({
    chart: {
      height: 250,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "top",
    },
    stroke: {
      curve: "straight",
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  });
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
      <div>
        <Chart height="300px" options={option} series={series} type="line" />
      </div>
    </div>
  );
}
