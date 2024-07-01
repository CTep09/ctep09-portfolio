import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="flex flex-row justify-center  ">
      <ul className="flex flex-row mb-8 mt-8 bg-white">
        <li>
          <a
            href="#About"
            onClick={() => handlePageChange("About")}
            className={
              currentPage === "About"
                ? "btn btn-fill border-cyan-600 text-white bg-cyan-600 mr-4"
                : "btn btn-outline border-cyan-600 text-cyan-600 mr-4 hover:bg-cyan-700 hover:text-white hover:border-cyan-700"
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
                ? "btn btn-fill border-cyan-600 text-white bg-cyan-600 mr-4"
                : "btn btn-outline border-cyan-600 text-cyan-600 mr-4 hover:bg-cyan-700 hover:text-white hover:border-cyan-700"
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
                ? "btn btn-fill border-cyan-600 text-white bg-cyan-600 mr-4"
                : "btn btn-outline border-cyan-600 text-cyan-600 mr-4 hover:bg-cyan-700 hover:text-white hover:border-cyan-700"
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
                ? "btn btn-fill border-cyan-600 text-white bg-cyan-600 mr-4"
                : "btn btn-outline border-cyan-600 text-cyan-600 mr-4 hover:bg-cyan-700 hover:text-white"
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
