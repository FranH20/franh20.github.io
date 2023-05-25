import React from "react";
import "./CircleIcon.css";

export const CircleIcon = ({ image, alt }) => {
  return (
    <span className="circleIcon">
      <img src={image} alt={alt} className="circleIcon__image"/>
    </span>
  );
};

export const CircleIconFa = (props) => {
  return (
    <span className="circleIcon">
      <props.Image className="circleIcon__image--fa" />
    </span>
  );
};

export default CircleIcon;
