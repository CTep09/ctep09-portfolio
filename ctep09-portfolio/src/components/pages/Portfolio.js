import React from "react";
import barista from "../images/barista.gif";
import hopsHaven from "../images/hops-haven.png";
import noteTaker from "../images/note-taker.gif";
import techBlog from "../images/tech-blog.gif";

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
          <a
            href="https://jonnyboy808.github.io/barista/"
            className="btn btn-primary"
          >
            Visit barista Site
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
          <a
            href="https://hops-haven.herokuapp.com/"
            className="btn btn-primary"
          >
            Visit Hops Haven
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
          <a
            href="https://cass-note-taker.herokuapp.com/"
            className="btn btn-primary"
          >
            Visit Note Taker
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
          <a
            href="https://ct-tech-blog.herokuapp.com/"
            className="btn btn-primary"
          >
            Visit Tech Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
