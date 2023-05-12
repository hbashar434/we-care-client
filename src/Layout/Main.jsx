import React from "react";
import Navbar from "../pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-calc[(100vh-160px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
