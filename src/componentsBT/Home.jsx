import React from "react";
import { Outlet } from "react-router-dom";
import NavBar2 from "./NavBar2";

export default function Home() {
  return (
    <div>
      <NavBar2 />
      <Outlet />
    </div>
  );
}
