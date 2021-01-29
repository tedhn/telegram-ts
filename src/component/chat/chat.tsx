import React from "react";

import "./chat.scss";

interface Props {
  msg: { text: string; user: string };
}

const Chat: React.FC<Props> = ({ msg }) => {
  let { text, user } = msg;

  return (
    <div className="chatbubble">
      {/* <div className="name">{user} </div> */}
      <div className="msg">{text}</div>
    </div>
  );
};

export default Chat;
