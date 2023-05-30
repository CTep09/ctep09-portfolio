import React from "react";

function Footer() {
  return (
    <footer className="flex footer place-content-center p-2 bg-red-300 mt-8 ">
      <div className="align-center">
        <span className="footer-title text-white">Socials</span>
        <div className="flex flex-row align-center">
          <a
            target="_blank"
            className="link link-primary font-bold px-2"
            href="https://www.linkedin.com/in/cassie-tepper/"
            rel="noreferrer"
          >
            <img
              src="https://skillicons.dev/icons?i=linkedin"
              alt="linkedIn Profile"
            />
          </a>

          <a
            target="_blank"
            className="link link-accent font-bold px-2"
            href="https://github.com/CTep09"
            rel="noreferrer"
          >
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="linkedIn Profile"
            ></img>
          </a>

          <a
            target="_blank"
            className="link link-accent font-bold px-2"
            href="https://stackoverflow.com/users/21300398/cassie?tab=profile"
            rel="noreferrer"
          >
            <img
              src="https://skillicons.dev/icons?i=stackoverflow"
              alt="Stack Overflow Profile"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
