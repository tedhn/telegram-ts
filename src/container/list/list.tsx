import React from "react";
import Contact from "../../component/contact/contact";

// import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <div className="search">
        <input placeholder="search" />
      </div>

      <div className="contact">
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};

export default List;
