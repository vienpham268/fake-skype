import React, { Component } from "react";
import { auth } from "../../services/firebase";
import { db } from "../../services/firebase";
import SideMenu from "../../components/chat-component/side-menu-component/Side-Menu";
import ChatLeft from "../../components/chat-component/chat-left-component/Chat-Left";
import ChatMain from "../../components/chat-component/chat-main-component/Chat-Main";

class Chat extends Component {
  state = {
    user: auth().currentUser,
    chats: [],
    content: "",
    readError: null,
    writeError: null,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ writeError: null });
    try {
      await db.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
      });
      this.setState({ content: "" });
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  };

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  async componentDidMount() {
    this.setState({ readError: null });
    try {
      db.ref("chats").on("value", (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        this.setState({ chats });
      });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }

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
