import React from "react";

const ButttonIconFa = (props) => {
  const button = {
    backgroundColor: "transparent",
    cursor: "pointer",
    border: "none",
  };

  const icon = {
    fontSize: "1.3em",
  };

  return (
    <button style={button} onClick={props.onClick} className={props.className}>
      <props.Icon style={icon} />
    </button>
  );
};

export default ButttonIconFa;
