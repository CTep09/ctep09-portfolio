import React from "react";
import ctepperResume from "../images/resume.png";

function Resume() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mt-4 mb-8 text-center">Skills</h2>

      {/* Link to Download Resume */}
      <div className="text-center mb-8">
        <a
          href="https://drive.google.com/file/d/14gvIfVWwIWEYC6braQ4v-G5rBSDN9bJd/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-700 hover:text-white hover:border-cyan-700 py-2 px-4 rounded-lg"
        >
          Download Resume
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Front End Skills Card */}
        <div className="card shadow-xl border-solid border-2 border-cyan-600 p-6 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h3 className="card-title font-semibold text-lg mb-4">
              Front End:
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li className="font-medium">HTML</li>
              <li className="font-medium">CSS</li>
              <li className="font-medium">JavaScript</li>
              <li className="font-medium">Bootstrap</li>
              <li className="font-medium">Web API</li>
              <li className="font-medium">jQuery</li>
              <li className="font-medium">AJAX</li>
              <li className="font-medium">Fetch</li>
              <li className="font-medium">JSON</li>
              <li className="font-medium">React | React Hooks</li>
              <li className="font-medium">PWA (Progressive Web App)</li>
              <li className="font-medium">Apollo GraphQL</li>
            </ul>
          </div>
        </div>

        {/* Back End Skills Card */}
        <div className="card shadow-xl border-solid border-2 border-cyan-600 p-6 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h3 className="card-title font-semibold text-lg mb-4">Back End:</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li className="font-medium">Node.js</li>
              <li className="font-medium">Express.js</li>
              <li className="font-medium">Rest API</li>
              <li className="font-medium">
                Serverside Templating (Handlebars.js)
              </li>
              <li className="font-medium">Express Sessions</li>
              <li className="font-medium">bcrypt</li>
              <li className="font-medium">MySQL | Relational Databases</li>
              <li className="font-medium">Sequelize ORM</li>
              <li className="font-medium">
                MongoDB | Non-Relational Databases
              </li>
              <li className="font-medium">Object-Oriented Programming (OOP)</li>
              <li className="font-medium">Unit Testing | Jest</li>
              <li className="font-medium">MERN Stack</li>
            </ul>
          </div>
        </div>

        {/* Tools Skills Card */}
        <div className="card shadow-xl border-solid border-2 border-cyan-600 p-6 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h3 className="card-title font-semibold text-lg mb-4">
              Development Tools and Environments:
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li className="font-medium">
                Developer Tools (Elements, Console, Network, Sources,
                Application, etc)
              </li>
              <li className="font-medium">Insomnia | Postman</li>
              <li className="font-medium">Git | GitHub</li>
              <li className="font-medium">Heroku</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card for Resume */}
      <div className="flex justify-center mt-8">
        <div className="card card-side bg-base-100 shadow-xl rounded-lg overflow-hidden">
          <figure className="w-full">
            <img
              src={ctepperResume}
              alt="C Tepper Resume"
              className="object-cover"
            />
          </figure>
        </div>
        <div className="card-body w-1/2 p-6 flex items-center justify-center">
          <a
            href="https://drive.google.com/file/d/14gvIfVWwIWEYC6braQ4v-G5rBSDN9bJd/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-700 hover:text-white hover:border-cyan-700 py-2 px-4 rounded-lg"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
