import React from "react";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-menus flex-direct-col">
      <div className="brand-box">
        <a href="" className="logo">
          <span className="logo">
            <img src="" alt="" />
          </span>
        </a>
      </div>
      <div className="flex-direct-col margin-auto">
        <ul className="nav nav-pills side-menu-nav justify-content-center">
          <li className="nav-item">
            <a href="">AAAA</a>
          </li>
          <li className="nav-item">
            <a href="">A</a>
          </li>
          <li className="nav-item">
            <a href="">A</a>
          </li>
          <li className="nav-item">
            <a href="">A</a>
          </li>
          <li className="nav-item">
            <a href="">A</a>
          </li>
        </ul>
      </div>
      <div className="flex-lg-column d-none d-lg-block"></div>
    </div>
  );
};

export default SideMenu;
