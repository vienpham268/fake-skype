import React, { Component } from "react";
import "./Chat-Left-Styl.css";

class ChatLeft extends Component {
  state = {};
  render() {
    return (
      <div className="chat-leftsidebar">
        <div className="tab-content">
          <div className="tab-pane" id="pane-chat">
            <div className="tab-pane header">
               <h1>CHAT</h1> 
            </div>
            <div className="tab-pane recent"></div>
          </div>
          <div className="tab-pane" id="pane-groups">
            <h1>Groups</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatLeft;
