import React from "react";
import Chatbox from "../chatbox/chatbox";
import List from "../list/list";

import "./index.scss";

const Home = () => {
  return (
    <div className="homeContainer">
      <List />

      <Chatbox />
    </div>
  );
};

export default Home;
