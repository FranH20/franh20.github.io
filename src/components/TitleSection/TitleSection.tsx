import React from "react";
import "./TitleSection.css";

const TitleSection = ({ title, subtitle }) => {
  return (
    <>
      <div className="titleSection">
        <span className="titleSection__title">{title}</span>
        <h2 className="titleSection__subtitle">{subtitle}</h2>
      </div>
    </>
  );
};

export default TitleSection;
