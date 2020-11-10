import React from "react";
import { connect } from "react-redux";
import Chat from "../../component/chat/chat";
import Header from "../../component/header/header";
import Input from "../../component/input/input";
import { sendMessage } from "../../store/actions";
import { rootState } from "../../types";

import "./chatbox.scss";

interface Props {
  history: any;
  sendMessage: any;
}

const Chatbox: React.FC<Props> = ({ history, sendMessage }) => {
  const handleSend = (msg: string, user: string) => {
    sendMessage(msg, user);
  };

  return (
    <div className="chatbox">
      <Header />
      <div className="chat">
        {history.map(() => {
          return <Chat />;
        })}
      </div>
      <Input handleSend={handleSend} />
    </div>
  );
};

const mapStateToProps = (state: rootState) => {
  return {
    history: state.history,
  };
};

const mapActionToProps = (dispatch: any) => {
  return {
    sendMessage: (msg: string, user: string) => {
      dispatch(sendMessage(msg, user));
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(Chatbox);
