import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeNavLink = ({ isActive }) => ({
    color: isActive ? "orange" : "blue",
  });
  return (
    <>
      <ul>
        <li>
          <NavLink style={activeNavLink} to="/">
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink style={activeNavLink} to="/aboutpage">
            AboutPage
          </NavLink>
          <ul>
            <li>
              <NavLink style={activeNavLink} to="/aboutpage/about-user">
                AboutUser
              </NavLink>
            </li>
            <li>
              <NavLink style={activeNavLink} to="/aboutpage/about-product">
                AboutProduct
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink style={activeNavLink} to="/contactpage">
            ContactPage
          </NavLink>
        </li>
      </ul>
    </>
  );
}
