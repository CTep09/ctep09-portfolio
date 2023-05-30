import React from "react";

function Footer() {
  return (
    <footer className="flex footer place-content-center p-2 bg-gradient-to-r from-green-100 to-pink-100 text-base-content mt-8 ">
      <div className="align-center">
        <span className="footer-title">Social</span>

        <a
          target="_blank"
          className="link link-primary font-bold "
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
          className="link link-accent font-bold"
          href="https://github.com/CTep09"
          rel="noreferrer"
        >
          <img
            src="https://skillicons.dev/icons?i=github"
            alt="linkedIn Profile"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
