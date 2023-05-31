import React from "react";
import cassBiscuit from "../images/cassBiscuit.jpeg";

function About() {
  return (
    <div className=" hero min-h-screen bg-gradient-to-l from-red-200 to-red-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={cassBiscuit}
          alt="Me and my dog Biscuit"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">
            I grew up in the beautiful city of Santa Barbara, California. After
            completing my high school education, I pursued my Bachelor's Degree
            in Psychology at California State University Northridge. Initially,
            I worked in the hospitality industry for a number of years before
            deciding to shift my career focus to human resources. Currently, I
            am on the verge of completing the Full Stack Web Development course
            at UC Berkeley Extension, which has been an incredible experience.
            Outside of my professional pursuits, I enjoy spending quality time
            with my family, including our dog Biscuit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
