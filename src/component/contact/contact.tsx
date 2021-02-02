import React from "react";

import "./contact.scss";

const Contact: React.FC<{ name: any; selectContact: any }> = ({
  name,
  selectContact,
}) => {
  const handleClick = () => {
    selectContact(name);
  };

  return (
    <div className="user">
      <div className="name" onClick={handleClick}>
        {name}
      </div>
    </div>
  );
};

export default Contact;
