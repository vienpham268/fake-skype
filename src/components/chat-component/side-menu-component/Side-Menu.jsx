import React from "react";
import "./Side-Menu-Styl.css";
import userico from "../../../assets/sidebar/userico.png";
import chatico from "../../../assets/sidebar/chatico.png";
import groupico from "../../../assets/sidebar/groupico.png";
import contactico from "../../../assets/sidebar/contactico.png";
import settingico from "../../../assets/sidebar/settingico.png";

const SideMenu = () => {
  return (
    <div className="side-menu-container">
      <div className="brand-box">
        <a href="" className="logo">
          <span className="logo">
            <img src="" alt="" />
          </span>
        </a>
      </div>
      <div className="menu-box">
        <ul className="ul-side-menu">
          <li className="li-sidebar user">
            <a className="li-sidebar-link" href="">
              <img src={userico} alt="" />
            </a>
          </li>
          <li className="li-sidebar chat">
            <a className="li-sidebar-link" href="">
              <img src={chatico} alt="" />
            </a>
          </li>
          <li className="li-sidebar group">
            <a className="li-sidebar-link" href="">
              <img src={groupico} alt="" />
            </a>
          </li>
          <li className="li-sidebar contact">
            <a className="li-sidebar-link" href="">
              <img src={contactico} alt="" />
            </a>
          </li>
          <li className="li-sidebar setting">
            <a className="li-sidebar-link" href="">
              <img src={settingico} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="end-menu-box "></div>
    </div>
  );
};

export default SideMenu;
