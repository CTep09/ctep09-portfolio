import React from "react";

function NavBar(currentPage, handlePageChange) {
  return (
    <ul className="flex flex-row">
      <li>
        <a
          onClick={() => handlePageChange("About")}
          className={
            currentPage === "About"
              ? "btn btn-fill btn-success"
              : "btn btn-outline btn-success"
          }
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={() => handlePageChange("Contact")}
          className={
            currentPage === "Contact"
              ? "btn btn-fill btn-secondary"
              : "btn btn-outline btn-secondary"
          }
        >
          Contact
        </a>
      </li>
      <li>
        <a
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio"
              ? "btn btn-fill btn-success"
              : "btn btn-outline btn-success"
          }
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          onClick={() => handlePageChange("Resume")}
          className={
            currentPage === "Resume"
              ? "btn btn-fill btn-outline"
              : "btn btn-outline btn-outline"
          }
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
