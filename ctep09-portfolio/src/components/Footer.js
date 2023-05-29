import React from "react";

function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-6">
      <div>
        <p className="text-xl">CTep</p>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <a className="link link-secondary font-bold"  href="mailto:cassandray9@gmail.com">Email</a>
        <a className="link link-primary font-bold" href="https://www.linkedin.com/in/cassie-tepper/">LinkedIn</a>
        <a className="link link-accent font-bold" href="https://github.com/CTep09">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
