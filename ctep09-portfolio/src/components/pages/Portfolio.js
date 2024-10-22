import React from "react";
import Project from "../Project";

function Portfolio() {
  const projectData = [
    {
      img: "frex.gif",
      name: "Friendly Rex",
      alt: "frex",
      description: `A platform for book enthusiasts, overseeing both client and server-side development using a MERN stack with GraphQL.`,
      site: "https://friendlyrex.com/auth",
    },
    {
      img: "hs.gif",
      name: "Howard M Steiermann Website",
      alt: "Howard M Steiermann Website",
      description: `Howard M Steiermann professional website. Website created using Next.js and React with Typescript for development, and Mantine UI for design components.`,
      site: "https://sfhoward.com/",
    },
    {
      img: "barista.gif",
      name: "barista",
      alt: "barista",
      description: `The barista webapp dynamically generates local cafes and displays a list of cafes and their addresses.`,
      site: "https://jonnyboy808.github.io/barista/",
      repo: "https://github.com/CTep09/barista",
    },
    {
      img: "tech-blog.gif",
      name: "Tech Blog",
      alt: "Tech Blog",
      description: `Tech Blog is a website where users can post their thoughts on the latest technology or anything they want. Users can see posts and comments made by others.`,
      site: "https://ct-tech-blog.herokuapp.com/",
      repo: "https://github.com/CTep09/tech-blog",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mx-8 my-8">
      {projectData.map((project, index) => (
        <Project
          key={index}
          img={project.img}
          name={project.name}
          alt={project.alt}
          description={project.description}
          site={project.site}
        />
      ))}
    </div>
  );
}

export default Portfolio;