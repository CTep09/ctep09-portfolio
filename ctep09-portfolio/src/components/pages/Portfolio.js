import React from "react";
import barista from "../images/barista.gif";
import hopsHaven from "../images/hops-haven.png";
import noteTaker from "../images/note-taker.gif";
import techBlog from "../images/tech-blog.gif";
import textEditor from "../images/textEditor.gif";
import dailyPlanner from "../images/dailyPlanner.gif";

function Portfolio() {
  return (
    <div className="flex flex-wrap mx-8">
      {/* barista project */}
      <div className="card mx-4 mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 glass">
        <figure>
          <img
            src={barista}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="barista"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">barista</h2>
          <p>
            The barista webapp dynamically generates local cafe's, and displays
            a list cafe's and their address.
          </p>
          <a target="_blank"
            href="https://jonnyboy808.github.io/barista/"
            className="btn btn-outline" rel="noreferrer"
          >
            Visit barista Site
          </a>
          <a target="_blank"
            href="https://github.com/CTep09/barista"
            className="btn btn-outline" rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>

      {/* Hops Haven Project */}
      <div className="card mx-4 mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 glass">
        <figure>
          <img
            src={hopsHaven}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hops Haven"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Hops Haven</h2>
          <p>
            Hops-Haven is a full-stack web application that beer enthusiasts can
            use to find data on the beers they love and discover new beers they
            might enjoy.
          </p>
          <a target="_blank"
            href="https://hops-haven.herokuapp.com/"
            className="btn btn-outline" rel="noreferrer"
          >
            Visit Hops Haven
          </a>
          <a target="_blank"
            href="https://github.com/CTep09/Hops-Haven"
            className="btn btn-outline" rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>

      {/* Note Taker Project */}
      <div className="card mx-4 mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 glass">
        <figure>
          <img
            src={noteTaker}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hops Haven"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Note Taker</h2>
          <p>
            Note taking web application is simple and easy to use. The user
            simply needs to visit the link below, click "Get Started" and they
            are taken to a page with any notes they have previously saved.
          </p>
          <a target="_blank"
            href="https://cass-note-taker.herokuapp.com/"
            className="btn btn-outline" rel="noreferrer"
          >
            Visit Note Taker
          </a>
          <a target="_blank"
            href="https://github.com/CTep09/note-taker"
            className="btn btn-outline" rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>

      {/* Tech Blog Project */}
      <div className="card mx-4 mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 glass">
        <figure>
          <img
            src={techBlog}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hops Haven"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Tech Blog</h2>
          <p>
            Tech Blog is a website where users can post their thoughts on the
            latest technology or anything they want. When a user visits the site
            they will see posts that other users have made and any comments as
            well.
          </p>
          <a target="_blank"
            href="https://ct-tech-blog.herokuapp.com/"
            className="btn btn-outline" rel="noreferrer"
          >
            Visit Tech Blog
          </a>
          <a target="_blank"
            href="https://github.com/CTep09/tech-blog"
            className="btn btn-outline" rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>

      {/* Text Editor Project */}
      <div className="card mx-4 mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 glass">
        <figure>
          <img
            src={textEditor}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Text Editor"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Text Editor</h2>
          <p>
            Jate is a browser-based text editor that meets the criteria of a
            Progressive Web App (PWA). It functions as a single-page application
            and incorporates multiple data persistence techniques to ensure
            redundancy in case browser support varies.
          </p>
          <a target="_blank"
            href="https://ct-tech-blog.herokuapp.com/"
            className="btn btn-outline" rel="noreferrer"
          >
            Visit Text Editor
          </a>
          <a target="_blank"
            href="https://github.com/CTep09/text-editor-pwa"
            className="btn btn-outline" rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>

      {/* Daily Planner Project */}
      <div className="card mx-4 mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 glass">
        <figure>
          <img
            src={dailyPlanner}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Daily Planner"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Daily Planner</h2>
          <p>
            Daily planner is a dynamic daily calendar that stores user inputted
            information for later use. It is a simple and easy to use digital
            planner that one can edit and adjust as needed throughout the day.
          </p>
          <a target="_blank"
            href="https://ctep09.github.io/daily-planner/"
            className="btn btn-outline" rel="noreferrer"
          >
            Visit Daily Planner
          </a>
          <a target="_blank"
            href="https://github.com/CTep09/daily-planner"
            className="btn btn-outline" rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
