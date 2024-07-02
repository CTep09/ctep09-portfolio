import React from "react";
import cassBiscuit from "../images/cassBiscuit.jpeg";

function About() {
  return (
    <div className=" hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={cassBiscuit}
          alt="Me and my dog Biscuit"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6 mr-16">
            Experienced Developer with a strong background in full-stack
            JavaScript development, including the MERN stack and React Native.
            Co-founding and developing Friendly Rex has equipped me with a deep
            understanding of both client and server-side development, and a
            knack for creating user-centric, responsive web and mobile
            applications. I excel in leveraging technology for enhanced service
            delivery, with a particular focus on robust testing frameworks to
            ensure high-quality software solutions. Outside of my professional
            pursuits, I enjoy spending quality time with my family, including
            our dog Biscuit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
