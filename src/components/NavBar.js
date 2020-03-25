import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/NavBar.css";

export default function NavBar() {
  return (
    <div className="container">
      <div>
        <ul className="nav">
          <li>
            <NavLink to="/">Welcome</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/Register">Register</NavLink>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src="../public/MYtineraryLogo.png" alt="" />
      </div>
    </div>
  );
}
