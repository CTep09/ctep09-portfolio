import React from "react";
import ctepperResume from "../images/resume.png";

function Resume() {
  return (
    <div className="">
      <h2 className="text-5xl">Skills</h2>

      {/* Link to Download Resume */}
      <div className="m-8">
        <a
          href="https://drive.google.com/file/d/1SBZmntf_eTF50V0T-XhoGd6VX96BZp6j/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-outline btn-primary">
            Click Here to Download My Resume
          </button>
        </a>
      </div>
      <div className="grid grid-cols-2">
        {/* Front End Skills Card */}
        <div className="flex flex-row card mx-4 mt-2 shadow-xl border-solid border-2 border-red-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold">Front End:</h3>
            <li className="font-semibold">HTML</li>
            <li className="font-semibold">CSS</li>
            <li className="font-semibold">JavaScript</li>
            <li className="font-semibold">Bootstrap</li>
            <li className="font-semibold">Web API</li>
            <li className="font-semibold">jQuery</li>
            <li className="font-semibold">AJAX</li>
            <li className="font-semibold">Fetch</li>
            <li className="font-semibold">JSON</li>
            <li className="font-semibold">React | React Hooks</li>
            <li className="font-semibold">PWA (Progressive Web App)</li>
            <li className="font-semibold">Apollo GraphQL</li>
          </div>
        </div>

        {/* Back End Skills Card */}
        <div className="card flex flex-row mx-4 mt-2 shadow-xl border-solid border-2 border-orange-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold">Back End:</h3>
            <li className="font-semibold">Node.js</li>
            <li className="font-semibold">Express.js</li>
            <li className="font-semibold">Rest API</li>
            <li className="font-semibold">
              Serverside Templating(Handlebars.js)
            </li>
            <li className="font-semibold">Express Sessions</li>
            <li className="font-semibold">bcrypt</li>
            <li className="font-semibold">MySQL | Relational Databses</li>
            <li className="font-semibold">Sequelize ORM</li>
            <li className="font-semibold">
              MongoDB | Non-Relational Databases
            </li>
            <li className="font-semibold">Object-Oriented Programming(OOP)</li>
            <li className="font-semibold">Unit Testing | Jest </li>
            <li className="font-semibold">MERN Stack</li>
          </div>
        </div>

        {/* Tools Skills Card */}
        <div className="card flex flex-row mx-4 mt-2 shadow-xl border-solid border-2 border-yellow-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold">
              Development Tools and Environments:
            </h3>
            <li className="font-semibold">
              Developer Tools (Elements, Console, Network, Sources, Application,
              etc)
            </li>
            <li className="font-semibold">Insomnia | Postman</li>
            <li className="font-semibold">Git | GitHub</li>
            <li className="font-semibold">Heroku</li>
          </div>
        </div>

        {/* <div className="card flex flex-row mx-4 mt-2 shadow-xl border-solid border-2 border-green-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold">More:</h3>
            <li className="font-semibold">Devops: Heroko</li>
            <li className="font-semibold">Testing: Jest</li>
            <li className="font-semibold">Other: Git, VSCode</li>
          </div>
        </div> */}
      </div>

      {/* Card for Resume */}
      <div className="flex-auto card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={ctepperResume} alt="C Tepper Resume" />
        </figure>
        <div className="card-body"></div>
      </div>
    </div>
  );
}

export default Resume;
