import React, { useState } from "react";
import { ReactComponent as Plane } from "../svg/paper-plane.svg";

import "./input.scss";

interface Props {
  handleSend: any;
}

const Input: React.FC<Props> = ({ handleSend }) => {
  const [msg, setMsg] = useState("");

  return (
    <div className="inputbox">
      <input
        className="input"
        placeholder="Write a message"
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          handleSend(msg, "asdf");
        }}
      >
        <Plane />
      </button>
    </div>
  );
};

export default Input;
