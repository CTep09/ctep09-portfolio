import React from "react";
import cassBiscuit from "../images/cassBiscuit.jpeg";

function About() {
  return (
    <div className=" hero min-h-screen bg-gradient-to-l from-red-50 to-red-300 to-white to-red-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={cassBiscuit}
          alt="Me and my dog Biscuit"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">
            I was born and raised in Santa Barbara California which I visit as
            often as I can. I attended California State University Northridge
            where I obtained my Bachelors Degree in Psychology. I enjoy spending
            time with my wife and our dog Biscuit, traveling, and finding the
            best food any place can offer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
