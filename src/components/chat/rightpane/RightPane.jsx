import React, { Component } from "react";
import "./RightPaneStyl.css";
import { auth, db } from "../../../services/firebase";
import ChatMainHeader from "./Header";
import ChatMainBody from "./Body";
import ChatMainFooter from "./Footer";

class RightPane extends Component {
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
        timestamp: new Date().toLocaleTimeString(),
        fromID: this.state.user.uid,
        email: this.state.user.email,
      });     
      this.setState({ content: "" });
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  };

  handlePressEnter = (event) => {
    if (event.key === "Enter") {
      this.handleSubmit(event);
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
    const { user, chats, content } = this.state;
    return (
      <div className="chat-main">
        <ChatMainHeader />
        <ChatMainBody user={user} chats={chats} />
        <ChatMainFooter
          content={content}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handlePressEnter={this.handlePressEnter}
        />
      </div>
    );
  }
}

export default RightPane;
