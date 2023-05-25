import React, { useRef } from "react";
import "./Navigator.css";

import { FaBars } from "react-icons/fa";
import ResponsiveNavigator from "../ResponseNavigator/ResponsiveNavigator";
import ButttonIconFa from "../ButtonIconFa/ButttonIconFa";

const Navigator = () => {

  const openContainer = () => {
    responseNavigatorContainer.current?.classList.toggle(
      "responsiveNavigator--closed"
    );  };

  const responseNavigatorContainer = useRef<HTMLUListElement>(null);

  return (
    <>
      <header >
        <ResponsiveNavigator ref={responseNavigatorContainer} toggleClick={openContainer}/>
        <nav className="navigatorFull">
          <span className="navigatorFull__name">Franklin.dev</span>
          <NavegatorList />
          <ButttonIconFa Icon={FaBars} onClick={openContainer} className="navigatorFull__iconButton"/>
        </nav>{" "}
      </header>
    </>
  );
};

const NavegatorList = () => {
  return (
    <>
      <ul className="navigatorList">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </>
  );
};

export default Navigator;
