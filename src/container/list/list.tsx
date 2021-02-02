import React from "react";
import { connect } from "react-redux";
import Contact from "../../component/contact/contact";

import { rootState } from "../../types";
import "./list.scss";

import { selectContact } from "../../store/actions";

import db from "../../firebase";

interface Props {
  user: string;
  select: any;
}

const List: React.FC<Props> = ({ user, select }) => {
  const [contact, setContact] = React.useState(Array);

  React.useEffect(() => {
    loadConvo();
  }, []);

  const loadConvo = async () => {
    console.log(user);
    const resp = db.collection("users").doc("htehnd");
    const json = await resp.get();
    const data = json.data();

    const arr = Object.keys(data!.conversatoin).map((data) => data);
    setContact(arr);
  };

  const selectContact = (username: string) => {
    select(username);
  };

  return (
    <div className="list">
      <div className="search">
        <input placeholder="search" />
      </div>

      {contact.map((data: any, index) => (
        <Contact key={index} name={data} selectContact={selectContact} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: rootState) => {
  return {
    user: state.user.username,
  };
};

const mapActionToProps = (dispatch: any) => {
  return {
    select: (user: string) => {
      dispatch(selectContact(user));
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(List);
