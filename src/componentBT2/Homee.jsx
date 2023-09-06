import React from "react";
import { Outlet } from "react-router-dom";
import Nav3 from "./Nav3";
import Clients from "./Clients";
import Footer from "./Footer";

export default function Homee() {
  return (
    <div>
      <Nav3 />
      <Outlet />
      <Clients />
      <Footer />
    </div>
  );
}
