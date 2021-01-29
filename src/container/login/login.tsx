import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { updateUser } from "../../store/actions";
import { rootState } from "../../types";

import db from "../../firebase";

interface Props {
  update: any;
  user: any;
}

const Login: React.FC<Props> = ({ update, user }) => {
  const [username, setUsername] = useState("");

  const login = async () => {
    let resp = db.collection("users").doc(username);
    let data = await resp.get();

    update(username);
  };

  return (
    <div>
      <input
        placeholder={"username"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login();
        }}
      >
        Log In
      </button>

      {user.username && <Redirect to={`/${user.username}`} />}
    </div>
  );
};

const mapStatesToProps = (state: rootState) => {
  return {
    user: state.user,
  };
};

const mapActionToProps = (dispatch: any) => {
  return {
    update: (user: string) => {
      dispatch(updateUser(user));
    },
  };
};

export default connect(mapStatesToProps, mapActionToProps)(Login);
