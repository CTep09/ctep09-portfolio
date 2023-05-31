import React from "react";

import Project from "../Project";

function Portfolio() {
  const projectData = [
    {
      img: "barista.gif",
      name: "barista",
      alt: "barista",
      description: `The barista webapp dynamically generates local cafe's, and displays
      a list cafe's and their address.`,
      site: "https://jonnyboy808.github.io/barista/",
      repo: "https://github.com/CTep09/barista",
    },
    {
      img: "hops-haven.png",
      name: "Hops Haven",
      alt: "Hops Haven",
      description: `Hops-Haven is a full-stack web application that beer enthusiasts can
      use to find data on the beers they love and discover new beers they
      might enjoy.`,
      site: "https://hops-haven.herokuapp.com/",
      repo: "https://github.com/CTep09/Hops-Haven",
    },
    {
      img: "note-taker.gif",
      name: "Note Taker",
      alt: "Note Taker",
      description: ` Note taking web application is simple and easy to use. The user
      simply needs to visit the link below, click "Get Started" and they
      are taken to a page with any notes they have previously saved.`,
      site: "https://cass-note-taker.herokuapp.com/",
      repo: "https://github.com/CTep09/note-taker",
    },
    {
      img: "tech-blog.gif",
      name: "Tech Blog",
      alt: "Tech Blog",
      description: `Tech Blog is a website where users can post their thoughts on the
      latest technology or anything they want. When a user visits the site
      they will see posts that other users have made and any comments as
      well.`,
      site: "https://ct-tech-blog.herokuapp.com/",
      repo: "https://github.com/CTep09/tech-blog",
    },
    {
      img: "textEditor.gif",
      name: "Text Editor",
      alt: "Text Editor",
      description: `Jate Text Editor is a browser-based text editor that meets the criteria of a
      Progressive Web App (PWA). It functions as a single-page application
      and incorporates multiple data persistence techniques to ensure
      redundancy in case browser support varies.`,
      site: "https://ct-jate.herokuapp.com/",
      repo: "https://github.com/CTep09/text-editor-pwa",
    },
    {
      img: "dailyPlanner.gif",
      name: "Daily Planner",
      alt: "Daily Planner",
      description: `Daily planner is a dynamic daily calendar that stores user inputted
      information for later use. It is a simple and easy to use digital
      planner that one can edit and adjust as needed throughout the day.`,
      site: "https://ctep09.github.io/daily-planner/",
      repo: "https://github.com/CTep09/daily-planner",
    },
  ];
  return (
    <div className="flex justify-center flex-wrap mx-8">
      {projectData.map((project, index) => (
        <Project
          key={index}
          img={project.img}
          name={project.name}
          alt={project.alt}
          description={project.description}
          site={project.site}
          repo={project.repo}
        />
      ))}
    </div>
  );
}

export default Portfolio;
