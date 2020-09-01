import React, { Component } from "react";
import "./Chat-Left-Styl.css";
import searchico from "../../../assets/chat/searchico.png";

class ChatLeft extends Component {
  state = {};
  render() {
    return (
      <div className="chat-leftsidebar">
        <div className="content">
          <div className="pane active">
            <div className="pane-header">
              <h4 class="mb-4">Chats</h4>
              <div className="search mb-3">
                <div className="search-icon">
                  <button className="search-button" type="button">
                    <img src={searchico} alt="" />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search message or users"
                />
              </div>
            </div>
            <div className="pane-body"></div>
          </div>
          <div className="pane ">bbbb</div>
        </div>
      </div>
    );
  }
}

export default ChatLeft;
