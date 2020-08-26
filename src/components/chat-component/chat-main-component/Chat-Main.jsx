import React, { Component } from "react";
import "./Chat-Main-Styl.css";
import arabic from "../../../assets/avatar/arabic.png";
import sendico from "../../../assets/chat/sendico.png";
class ChatMain extends Component {
  state = {};
  render() {
    return (
      <div className="user-chat">
        {/* Conversation header */}
        <div className="chat-header">
          <div className="chat-header-row">
            <div className="user">
              <div className="avatar">
                <img src={arabic} alt="arabic" />
              </div>
              <div className="user-name">
                <h5>
                  <a href="">Arabic</a>
                </h5>
              </div>
            </div>
            <div className="user-tools">
              <div className="name-status"></div>
            </div>
          </div>
        </div>

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
                      className="btn-send"
                      onClick={this.handleSubmit}
                      type="submit"
                    >
                      <img src={sendico} alt="" />
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

export default ChatMain;
