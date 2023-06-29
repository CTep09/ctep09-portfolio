import React from "react";
import ctepperResume from "../images/resume.png";

function Resume() {
  return (
    <div className="">
      <h2 className="text-5xl font-mono">Skills</h2>

      {/* Link to Download Resume */}
      <div className="m-8">
        <a href="https://drive.google.com/file/d/1SBZmntf_eTF50V0T-XhoGd6VX96BZp6j/view?usp=drive_link">
          <button className="btn btn-outline btn-primary font-mono">
            Click Here to Download My Resume
          </button>
        </a>
      </div>
      <div className="grid grid-cols-2">
        {/* Front End Skills Card */}
        <div className="flex flex-row card mx-4 mt-2 shadow-xl border-solid border-2 border-red-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold font-mono">Front End:</h3>
            <li className="font-semibold font-mono">HTML</li>
            <li className="font-semibold font-mono">CSS</li>
            <li className="font-semibold font-mono">JavaScript</li>
            <li className="font-semibold font-mono">Bootstrap</li>
            <li className="font-semibold font-mono">Web API</li>
            <li className="font-semibold font-mono">jQuery</li>
            <li className="font-semibold font-mono">AJAX</li>
            <li className="font-semibold font-mono">Fetch</li>
            <li className="font-semibold font-mono">JSON</li>
            <li className="font-semibold font-mono">React | React Hooks</li>
            <li className="font-semibold font-mono">
              PWA (Progressive Web App)
            </li>
            <li className="font-semibold font-mono">Apollo GraphQL</li>
          </div>
        </div>

        {/* Back End Skills Card */}
        <div className="card flex flex-row mx-4 mt-2 shadow-xl border-solid border-2 border-orange-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold font-mono">Back End:</h3>
            <li className="font-semibold font-mono">Node.js</li>
            <li className="font-semibold font-mono">Express.js</li>
            <li className="font-semibold font-mono">Rest API</li>
            <li className="font-semibold font-mono">
              Serverside Templating(Handlebars.js)
            </li>
            <li className="font-semibold font-mono">Express Sessions</li>
            <li className="font-semibold font-mono">bcrypt</li>
            <li className="font-semibold font-mono">
              MySQL | Relational Databses
            </li>
            <li className="font-semibold font-mono">Sequelize ORM</li>
            <li className="font-semibold font-mono">
              MongoDB | Non-Relational Databases
            </li>
            <li className="font-semibold font-mono">
              Object-Oriented Programming(OOP)
            </li>
            <li className="font-semibold font-mono">Unit Testing | Jest </li>
            <li className="font-semibold font-mono">MERN Stack</li>
          </div>
        </div>

        {/* Tools Skills Card */}
        <div className="card flex flex-row mx-4 mt-2 shadow-xl border-solid border-2 border-yellow-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold font-mono">
              Development Tools and Environments::
            </h3>
            <li className="font-semibold font-mono">
              Developer Tools (Elements, Console, Network, Sources, Application,
              etc)
            </li>
            <li className="font-semibold font-mono">Insomnia / Postman</li>
            <li className="font-semibold font-mono">Git | GitHub</li>
            <li className="font-semibold font-mono">Heroku</li>
          </div>
        </div>

        {/* <div className="card flex flex-row mx-4 mt-2 shadow-xl border-solid border-2 border-green-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold font-mono">More:</h3>
            <li className="font-semibold font-mono">Devops: Heroko</li>
            <li className="font-semibold font-mono">Testing: Jest</li>
            <li className="font-semibold font-mono">Other: Git, VSCode</li>
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
