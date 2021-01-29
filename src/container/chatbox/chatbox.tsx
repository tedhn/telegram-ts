import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Chat from "../../component/chat/chat";
import Input from "../../component/input/input";
import { updateMessageHistory } from "../../store/actions";
import { rootState } from "../../types";
import "./chatbox.scss";

import db from "../../firebase";

interface Param {
  user: any;
}

interface Props {
  history: Object[];
  update: any;
}

const URL = "ws://localhost:3030";

const Chatbox: React.FC<Props> = ({ history, update }) => {
  let ws = new WebSocket(URL);
  let param = useParams<Param>();
  const user = param.user;

  useEffect(() => {
    ws.onopen = () => {
      // loadChat();
      console.log("connected");
      console.log(param.user);
    };
    ws.onclose = () => {
      console.log("disconnected");
    };
    ws.onmessage = ({ data }) => {
      updateHistory(data);
    };
  }, []);

  const loadChat = async () => {
    const resp = db.collection("users").doc(user);
    const json = await resp.get();
    const data = json.data();

    data!["jolyntwl"].forEach((value: string) => {
      let arr = value.split("/");
      update(arr[0], arr[1]);
    });
  };

  const updateHistory = (data: string) => {
    let arr = data.split("/");

    update(arr[0], arr[1]);
  };

  const handleSend = async (text: string) => {
    // const resp = db.collection("users").doc(user);
    // const json = await resp.get();
    // const data = json.data();
    const msg = `${text}/${user}`;

    // console.log(typeof data!["jolyntwl"]);
    // data!["jolyntwl"].push(msg);
    // console.log(data);

    // db.collection("users");

    ws.send(msg);
  };

  return (
    <div className="chatbox">
      <div className="title">Dummy name</div>

      <div className="chat">
        {history.map((value: any, key: number) => {
          return <Chat msg={value} key={key} />;
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
