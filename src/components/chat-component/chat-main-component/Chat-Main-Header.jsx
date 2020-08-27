import React, { Component } from "react";
import userinfo from "../../../assets/sidebar/userico.png";
import arabic from "../../../assets/avatar/arabic.png";
import searchico from "../../../assets/chat/searchico.png";
import threedots from "../../../assets/chat/threedot-ico.png";
class ChatMainHeader extends Component {
  state = {};
  render() {
    return (
      <div className="chat-header">
        <div className="chat-header-row">
          <div className="user">
            <div className="avatar">
              <img src={arabic} alt="arabic" />
            </div>
            <div className="user-name">
              <h5>
                <a href="">Arabic</a>
              </h5>
            </div>
          </div>
          <div className="user-tools">
            <ul className="ul-user-tools">
              <li className="li-user-tool search">
                <div className="dropdown">
                  <button className="button search">
                    <img src={searchico} alt="" />
                  </button>
                </div>
              </li>
              <li className="li-user-tool info">
                <button className="button user-profile-show">
                  <img src={userinfo} alt="" />
                </button>
              </li>
              <li className="li-user-tool threedots">
                <button className="button threedots">
                  <img src={threedots} alt="" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatMainHeader;
