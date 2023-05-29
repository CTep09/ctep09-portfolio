import React from "react";
import cassBiscuit from '../images/cassBiscuit.jpeg'

function About() {
  return (
    <div className="hero min-h-screen bg-red-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={cassBiscuit} alt="Me and my dog Biscuit"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
