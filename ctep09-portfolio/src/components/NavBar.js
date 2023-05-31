import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="flex flex-row justify-center m-1">
      <ul className="flex flex-row mb-8 mt-8 bg-white">
        <li>
          <a
            href="#About"
            onClick={() => handlePageChange("About")}
            className={
              currentPage === "About"
                ? "btn btn-fill btn-error mr-4"
                : "btn btn-outline btn-error mr-4"
            }
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact"
                ? "btn btn-fill btn-error mr-4"
                : "btn btn-outline btn-error mr-4"
            }
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio"
                ? "btn btn-fill btn-error mr-4"
                : "btn btn-outline btn-error mr-4"
            }
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume"
                ? "btn btn-fill btn-error mr-4"
                : "btn btn-error btn-outline mr-4"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
