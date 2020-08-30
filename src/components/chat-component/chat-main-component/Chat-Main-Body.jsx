import React from "react";
import arabic from "../../../assets/avatar/arabic.png";

const ChatMainBody = (props) => {
  const { user, chats } = props;
  function identifyActiveUser(chat) {
    let className = "li-conversation";
    if (user.uid === chat.uid) {
      className += " right";
    }

    return className;
  }
  return (
    <div className="conversation-body">
      <div className="conversations">
        <ul className="ul-conversation">
          {chats.map((chat) => (
            <li className={identifyActiveUser(chat)}>
              <div className="wrap-conversation">
                <div className="chat-avatar">
                  <img src={arabic} alt="" />
                </div>
                <div className="user-chat-content">
                  <div className="chat-name">{chat.email}</div>
                  <div className="wrap-text">
                    <div className="wrap-text-content">
                      <p className="mb-0">{chat.content}</p>
                      <p className="p-time mb-0">{chat.timestamp}</p>
                    </div>
                    <div className="text-wrap-dropdown"></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatMainBody;
