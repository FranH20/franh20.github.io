import React from "react";
import "./CardProject.css";
import * as Icons from "react-icons/fa";

const CardProject = (props) => {
  return (
    <>
      <article
        className={`cardProject ${
          props.index % 2 != 0 ? "cardProject--reverse" : ""
        }`}
      >
        <img src={`/images/${props.image}`} />
        <div className="cardProject__information">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div className="cardProject_skills">
            {props.skills.map((skill) => (
              <CardSkill key={skill} name={skill} />
            ))}
          </div>
          <div className="cardProject_links">
            {props.links.map((link) => (
              <CardLink key={link.id} {...link} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

const CardSkill = (props) => {
  return (
    <>
      <div className="cardSkill">
        <span>{props.name}</span>
      </div>
    </>
  );
};

const CardLink = (props) => {
  const IconComponent = Icons[props.icon];
  return (
    <>
      {props.link !== "" && (
        <div className="cardLink">
          <a target="_blank" href={props.link}>
            {props.title} <IconComponent size="2rem" />
          </a>
        </div>
      )}
    </>
  );
};

export default CardProject;
