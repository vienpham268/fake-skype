import React, { Component } from "react";
import { auth, db } from "../../../services/firebase";
import "./LeftPaneStyl.css";
import searchico from "../../../assets/chat/searchico.png";
import arabic from "../../../assets/avatar/arabic.png";

class LeftPane extends Component {
  state = {
    users: [],
    readError: "",
  };

  componentDidMount() {
    this.setState({ readError: null });
    try {
      db.ref("users").on("value", (snapshot) => {
        let users = [];
        snapshot.forEach((snap) => {
          users.push(snap.val());
        });
        this.setState({ users });
      });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }

  isActiveUser = (user) => {
    let className = "li-recent";
    if (user._id === auth().currentUser.uid) {
      className += " hidden";
    }
    return className;
  };

  createGroupChat = (user) => {};

  render() {
    return (
      <div className="chat-leftsidebar">
        <div className="content">
          <div className="pane active">
            <div className="pane-header">
              <h4 class="mb-4">Chats</h4>
              <div className="search mb-3">
                <button className="search-button" type="button">
                  <img src={searchico} alt="" />
                </button>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search message or users"
                />
              </div>
            </div>
            <div className="pane-body">
              <h5 className="h5-recent">Friends</h5>
              <div className="list-recent-chat">
                <ul className="ul-recent">
                  {this.state.users.map((user) => (
                    <li
                      className={this.isActiveUser(user)}
                      onClick={() => {
                        this.createGroupChat(user);
                      }}
                    >
                      <a href="" className="li-recent-link">
                        <div className="recent-avatar">
                          <img src={arabic} alt="" />
                        </div>
                        <div className="recent-chat-content">
                          <h5 className="font-15">{user.email}</h5>
                          <p className="font-14">hello im here</p>
                        </div>
                        <div className="time-left">5 min</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pane ">bbbb</div>
        </div>
      </div>
    );
  }
}

export default LeftPane;
