import React from "react";

function NavBar(currentPage, handlePageChange) {
  return (
    <ul className="flex flex-row mb-8 ">
      <li>
        <a
          onClick={() => handlePageChange("About")}
          className={
            currentPage === "About"
              ? "btn btn-fill btn-success mr-4"
              : "btn btn-outline btn-success mr-4"
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
              ? "btn btn-fill btn-secondary mr-4"
              : "btn btn-outline btn-secondary mr-4"
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
              ? "btn btn-fill btn-success mr-4"
              : "btn btn-outline btn-success mr-4"
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
              ? "btn btn-fill btn-outline mr-4"
              : "btn btn-outline btn-outlinemr-4"
          }
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
