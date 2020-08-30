import React from "react";
import sendico from "../../../assets/chat/sendico.png";

const ChatMainFooter = (props) => {
  const { content, handleChange, handleSubmit } = props;
  return (
    <div className="p-3 p-lg-4 mb-0 border-top">
      <div className="row no-gutters">
        <div className="col">
          <div>
            <input
              placeholder="Enter Message..."
              className="form-control form-control-lg bg-light border-light"
              onChange={handleChange}
              value={content}
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
                  className="button send"
                  onClick={handleSubmit}
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
  );
};

export default ChatMainFooter;
