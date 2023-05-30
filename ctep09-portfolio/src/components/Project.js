import React from "react";

function Project(props) {
  const img = require(`./images/${props.img}`);
  return (
    <div className="card mx-4 mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 glass">
      <figure>
        <img
          src={img}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={props.alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
        <a
          target="_blank"
          href={props.site}
          className="btn btn-outline"
          rel="noreferrer"
        >
          Visit {props.name} Site
        </a>
        <a
          target="_blank"
          href={props.repo}
          className="btn btn-outline"
          rel="noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
