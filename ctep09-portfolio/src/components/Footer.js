import React from "react";

function Footer() {
  return (

    <footer className=" align-center footer p-2 bg-gradient-to-r from-green-100 to-pink-100 text-base-content mt-8">
      <div className="align-center">
        <span className="footer-title">Social</span>

        <a
          className="link link-primary font-bold"
          href="https://www.linkedin.com/in/cassie-tepper/"
        >
          <img
            src="https://skillicons.dev/icons?i=linkedin"
            alt="linkedIn Profile"
          />
        </a>

        <a
          className="link link-accent font-bold"
          href="https://github.com/CTep09"
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
