import React from "react";
import ctepperResume from "../images/ctepperResume.png";

function Resume() {
  return (
    <div className="">
      <h2 className="text-5xl font-mono">Skills</h2>

      {/* Link to Download Resume */}
      <div className="m-8">
        <a href="https://drive.google.com/file/d/1MfZQGlk7EFF_nY22_eTxwROZnBKdSh6g/view?usp=share_link">
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
            <li className="font-semibold font-mono">React</li>
            <li className="font-semibold font-mono">JavaScript</li>
            <li className="font-semibold font-mono">jQuery</li>
            <li className="font-semibold font-mono">CSS/HTML</li>
            <li className="font-semibold font-mono">Bootstrap/Tailwind</li>
          </div>
        </div>

        {/* Back End Skills Card */}
        <div className="card flex flex-row mx-4 mt-2 shadow-xl border-solid border-2 border-orange-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold font-mono">Back End:</h3>
            <li className="font-semibold font-mono">Node.js</li>
            <li className="font-semibold font-mono">Express</li>
            <li className="font-semibold font-mono">Sequelize</li>
          </div>
        </div>

        {/* Databases Skills Card */}
        <div className="card flex flex-row mx-4 mt-2 shadow-xl border-solid border-2 border-yellow-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold font-mono">Databases:</h3>
            <li className="font-semibold font-mono">MySQL</li>
            <li className="font-semibold font-mono">MongoDB</li>
          </div>
        </div>

        {/* More Skills Card */}
        <div className="card flex flex-row mx-4 mt-2 shadow-xl border-solid border-2 border-green-600 m-9">
          <div className="card-body">
            <h3 className="card-title font-semibold font-mono">More:</h3>
            <li className="font-semibold font-mono">Devops: Heroko</li>
            <li className="font-semibold font-mono">Testing: Jest</li>
            <li className="font-semibold font-mono">Other: Git, VSCode</li>
          </div>
        </div>
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
