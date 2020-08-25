import React from "react";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-menu flex-lg-column mr-lg-1">
      <div className="navbar-brand-box"></div>
      <div className="flex-lg-column my-auto">
        <ul className="nav nav-pills side-menu-nav justify-content-center">
          <li className="nav-item">
            <a href="">
              <i className="fa fa-user fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fa fa-user fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fa fa-user fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fa fa-user fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fa fa-user fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-lg-column d-none d-lg-block"></div>
    </div>
  );
};

export default SideMenu;
