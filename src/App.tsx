import React from "react";
import { Route } from "react-router";

import Chatbox from "./container/chatbox/chatbox";
import Login from "./container/login/login";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Route path="/" exact component={Login} />
      <Route path="/:username" exact component={Chatbox} />
    </div>
  );
};

export default App;
