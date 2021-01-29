import React from "react";
import { connect } from "react-redux";
import Contact from "../../component/contact/contact";

import { rootState } from "../../types";
import "./list.scss";

import db from "../../firebase";

interface Props {
  user: string;
}

const List: React.FC<Props> = ({ user }) => {
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

  return (
    <div className="list">
      <div className="search">
        <input placeholder="search" />
      </div>

      {contact.map((data: any, index) => (
        <Contact key={index} name={data} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: rootState) => {
  return {
    user: state.user.username,
  };
};

export default connect(mapStateToProps)(List);
