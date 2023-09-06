import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

export default function AboutPage() {
  // Outlet dùng để xác định vị trí hiển thị của component
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
