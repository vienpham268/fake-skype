import React, { Component } from "react";
import SideBar from "../../components/chat/sidebar/SideBar";
import LeftPane from "../../components/chat/leftpane/LeftPane";
import RightPane from "../../components/chat/rightpane/RightPane";

class ChatContainer extends Component {
  render() {
    return (
      <div className="layout-wrapper d-lg-flex">
        <SideBar />
        <LeftPane />
        <RightPane />
      </div>
    );
  }
}
export default ChatContainer;
