<<<<<<< HEAD
import React, { Component } from "react";
import { auth } from "../../services/firebase";
import { db } from "../../services/firebase";
import "./Chat.css";
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
      console.log(this.state.chats);
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
      <div className="chat container">
        {this.state.chats.map((chat) => {
          return (
            <div className="chat">
              <p key={chat.timestamp}>{chat.content}</p>
            </div>
          );
        })}

        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
        <div>Login in as: {this.state.user.email}</div>
      </div>
    );
  }
}

export default Chat;
=======
import React, { Component } from 'react';


class Chat extends Component {
    state = {  }
    render() { 
        return ( <h1>Chat</h1> );
    }
}
 
export default Chat;
>>>>>>> e27dcb219e6bb1be24dfc4ac6757f1576465d32f
