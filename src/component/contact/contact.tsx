import React from "react";

import "./contact.scss";

const Contact: React.FC<{ name: any }> = ({ name }) => {
  return (
    <div className="user">
      <div className="name">{name}</div>
    </div>
  );
};

export default Contact;
