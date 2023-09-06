import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBarr() {
  const activeNavLink = ({ isActive }) => ({
    color: isActive ? "orange" : "black",
  });
  return (
    <div>
      <nav id="sidebar">
        <div className="p-4 pt-5">
          <a
            className="img logo rounded-circle mb-5"
            style={{ backgroundImage: "url(images/logo.jpg)" }}
          />
          <ul className="list-unstyled components mb-5">
            <li>
              <NavLink style={activeNavLink} to="/" className="dropdown-toggle">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={activeNavLink} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink style={activeNavLink} to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink style={activeNavLink} to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
