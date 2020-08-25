import React, { Component } from "react";
import { auth } from "../../services/firebase";
import { db } from "../../services/firebase";
import './Chat.css'

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
      <div className="w-100">
        {/* Conversation header */}
        <div className="p-3 p-lg-4 border-bottom"></div>

        {/* Conversation body */}
        <div className="chat-conversation p-3 p-lg-4">
          <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
            <div
              className="simplebar-mask"
              style={{ right: "-17px", bottom: "0px" }}
            >
              <div
                className="simplebar-content-wrapper"
                style={{ height: "100%", overflow: "hidden" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Conversation bottom */}
        <div className="p-3 p-lg-4 mb-0 border-top">
          <div className="row no-gutters">
            <div className="col">
              <div>
                <input
                  placeholder="Enter Message..."
                  className="form-control form-control-lg bg-light border-light"
                  onChange={this.handleChange}
                  value={this.state.content}
                />
              </div>
            </div>
            <div className="col-auto">
              <div className="chat-input-links ml-md-2">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item"></li>
                  <li className="list-inline-item"></li>
                  <li className="list-inline-item">
                    <button
                      onClick={this.handleSubmit}
                      className="btn btn-primary"
                      type="submit"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;
