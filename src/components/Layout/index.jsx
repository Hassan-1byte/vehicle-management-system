import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="root">
        <div style={{ width: "250px" }}>
          <Sidebar />
        </div>
        <main className="content">{children}</main>
      </div>
    </>
  );
}
