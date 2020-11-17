import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Chat from "../../component/chat/chat";
import Header from "../../component/header/header";
import Input from "../../component/input/input";
import { updateMessageHistory } from "../../store/actions";
import { rootState } from "../../types";

// import "./chatbox.scss";

interface Props {
  history: any;
  update: any;
  user: any;
  username: string;
}

const URL = "ws://localhost:3030";

const Chatbox: React.FC<Props> = ({ history, update, user }) => {
  let ws = new WebSocket(URL);

  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };
    ws.onclose = () => {
      console.log("disconnected");
    };
    ws.onmessage = (evt) => {
      const { text, sender } = JSON.parse(evt.data);
      if (sender !== user.username) {
        addMessage(text, sender);
      }
    };
  }, []);

  const addMessage = (text: string, username: string) => {
    update(text, username);
  };

  const handleSend = (text: string) => {
    ws.send(JSON.stringify({ text, sender: user.username }));
    addMessage(text, user.username);
  };

  return (
    <div className="chatbox">
      {/* <Header /> */}
      <div>username is : {user.username}</div>

      <div className="chat">
        {history.map((msg: any, index: number) => {
          return <Chat msg={msg} index={index} />;
        })}
      </div>
      <Input handleSend={handleSend} />
    </div>
  );
};

const mapStateToProps = (state: rootState) => {
  return {
    history: state.history,
    user: state.user,
  };
};

const mapActionToProps = (dispatch: any) => {
  return {
    update: (msg: string, user: string) => {
      dispatch(updateMessageHistory(msg, user));
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(Chatbox);
