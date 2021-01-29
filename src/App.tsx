import React from "react";
import { Route } from "react-router";

import Home from "./container/home";
import Login from "./container/login/login";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        margin: "50px",
      }}
    >
      <Route path="/" exact component={Login} />
      <Route path="/:user" exact component={Home} />
    </div>
  );
};

export default App;
