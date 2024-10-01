import React from "react";
import "./Title.css";
function Title(props) {
  return (
    <div className="title__container">
      <div className="title__wrapper">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default Title;
