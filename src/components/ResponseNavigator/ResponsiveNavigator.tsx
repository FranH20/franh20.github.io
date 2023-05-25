import React, { forwardRef, useRef } from "react";
import "./ResponsiveNavigator.css";
import { FaTimes } from "react-icons/fa";
import ButttonIconFa from "../ButtonIconFa/ButttonIconFa";

const ResponsiveNavigator = forwardRef((props: any, ref: any) => {
  return (
    <>
      <ul className="responsiveNavigator responsiveNavigator--closed" ref={ref}>
        <li>
          <a href="#home" onClick={props.toggleClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={props.toggleClick}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={props.toggleClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={props.toggleClick}>
            Contact
          </a>
        </li>
        <li>
          <ButttonIconFa Icon={FaTimes} onClick={props.toggleClick} />
        </li>
      </ul>
    </>
  );
});

export default ResponsiveNavigator;
