import React from "react";
import ctepperResume from "../images/ctepperResume.png";

function Resume() {
  return (
    <div className="flex flex-col">
      {/* Link to Download Resume */}
      <div className="m-8">
        <a href="https://drive.google.com/file/d/1MfZQGlk7EFF_nY22_eTxwROZnBKdSh6g/view?usp=share_link">
          <button className="btn btn-outline btn-info">
            Click Here to Download My Resume
          </button>
        </a>
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
