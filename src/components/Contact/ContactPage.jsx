import React from "react";
import NavBar from "../NavBar";
import { useLocation } from "react-router-dom";

export default function ContactPage() {
  const data = useLocation();
  console.log(data);
  return (
    <div>
      <NavBar />
      ContactPage
      <p>{data.state && data.state.userName}</p>
    </div>
  );
}
