import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import { BiSearch } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import avatar from "../assets/Oval.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="title">
            <h4>Vehicle Management</h4>
          </div>
          <div className="search">
            <BiSearch />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="profile">
          <div className="image">
            <img src={avatar} alt="" />
          </div>
          <div className="profile__name">
            <h4>Ronnie Woodkin</h4>
          </div>
          <div className="outineDown">
            <AiOutlineDown />
          </div>
        </div>
      </div>
      {/* <div style={{ padding: "200px" }}>hjgfyfyt</div> */}
      {/* <Sidebar /> */}
    </>
  );
}
