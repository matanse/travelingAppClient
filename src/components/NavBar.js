import React, { Component } from "react";
import "./css/NavBar.css";
import DropdownSideBar from "./DropdownSideBar";
import ProfileImg from "../img/profile_logo.png";
import menu from "../img/img menu.png";
// import PropTypes from "prop-types";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="profileMenu">
            <button className="dropbtn" onClick={this.props.toggleShowDropdown}>
              <img src={ProfileImg} alt="ProfileImg" />
            </button>
            {this.props.showDropdown ? (
              <DropdownSideBar
                toggleShowDropdown={this.props.toggleShowDropdown}
              />
            ) : null}
          </div>

          <div className="menu">
            <button className="dropbtn" onClick={this.props.toggleShowDropdown}>
              <img src={menu} alt="menu" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
