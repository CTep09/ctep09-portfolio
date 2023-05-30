import React from "react";
import ctepperResume from "../images/ctepperResume.png";

function Resume() {
  return (
    <div className="flex-auto card card-side bg-base-100 shadow-xl">
      <figure>
              <img
          src={ctepperResume}
          alt="C Tepper Resume"
          />
      </figure>
      <div className="card-body">
        <h2 className="card-title">My Resume</h2>
        <p>Please feel free to download a copy of my resume 📄</p>
        <div className="card-actions justify-end">
          <a href="https://drive.google.com/file/d/1MfZQGlk7EFF_nY22_eTxwROZnBKdSh6g/view?usp=share_link">
            <button className="btn btn-outline btn-info">
              Link to Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
