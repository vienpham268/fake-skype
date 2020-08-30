import React, { Component } from "react";
import SideMenu from "../../components/chat-component/side-menu-component/Side-Menu";
import ChatLeft from "../../components/chat-component/chat-left-component/Chat-Left";
import ChatMain from "../../components/chat-component/chat-main-component/Chat-Main";

class Chat extends Component {
  render() {
    return (
      <div className="layout-wrapper d-lg-flex">
        <SideMenu />
        <ChatLeft />
        <ChatMain/>
      </div>
    );
  }
}
export default Chat;
