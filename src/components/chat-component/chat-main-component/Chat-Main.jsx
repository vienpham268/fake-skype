import React, { Component } from "react";
import "./Chat-Main-Styl.css";

import ChatMainHeader from "./Chat-Main-Header";
import ChatMainBody from "./Chat-Main-Body";
import ChatMainFooter from "./Chat-Main-Footer";

class ChatMain extends Component {
  state = {};
  render() {
    return (
      <div className="chat-main">
        <ChatMainHeader />
        <ChatMainBody />
        <ChatMainFooter />
      </div>
    );
  }
}

export default ChatMain;
