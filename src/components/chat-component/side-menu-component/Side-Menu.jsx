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
        <ul className="side-menu">
          <li className="item user">
            <a href="">
              <img src={userico} alt="" />
            </a>
          </li>
          <li className="item chat">
            <a href="">
              <img src={chatico} alt="" />
            </a>
          </li>
          <li className="item group">
            <a href="">
              <img src={groupico} alt="" />
            </a>
          </li>
          <li className="item contact">
            <a href="">
              <img src={contactico} alt="" />
            </a>
          </li>
          <li className="item setting">
            <a href="">
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
