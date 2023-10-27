import React from "react";
import "./ComponentProject.css";

const ComponentProject = (props) => {
  return (
    <>
      <article className="componentProject">
        <img src={`/images/${props.image}`} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>
          <a target="_blank" href={props.codeLink}>
            Code
          </a>
          <a target="_blank" href={props.viewLink}>
            View
          </a>
        </p>
      </article>
    </>
  );
};

export default ComponentProject;
