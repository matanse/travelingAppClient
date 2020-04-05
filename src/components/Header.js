import React, { Component } from "react";
import "./css/header.css";
import NavBar from "./NavBar";
import Logo from "../img/MYtineraryLogo.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavBar
          toggleShowDropdown={this.props.toggleShowDropdown}
          showDropdown={this.props.showDropdown}
        />
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    );
  }
}
