import React from "react";

// import "./chat.scss";

interface Props {
  msg: { text: string; user: string };
  index: number;
}

const Chat: React.FC<Props> = ({ msg }) => {
  return (
    <div className="chatbubble">
      {msg.user} : {msg.text}
    </div>
  );
};

export default Chat;
