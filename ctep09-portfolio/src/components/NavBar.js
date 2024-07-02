import React, { useState, useEffect } from "react";

function NavBar({ currentPage, handlePageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex flex-row justify-center">
      <button
        className="md:hidden text-cyan-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>
      <ul
        className={`flex flex-col md:flex-row mb-4 mt-4 bg-white ${
          isMobile && !isOpen ? "hidden" : "block"
        }`}
      >
        <li className="mb-2 md:mb-0 md:mr-2">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio"
                ? "btn btn-fill border-cyan-600 text-white bg-cyan-600"
                : "btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-700 hover:text-white hover:border-cyan-700"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="mb-2 md:mb-0 md:mr-2">
          <a
            href="#About"
            onClick={() => handlePageChange("About")}
            className={
              currentPage === "About"
                ? "btn btn-fill border-cyan-600 text-white bg-cyan-600"
                : "btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-700 hover:text-white hover:border-cyan-700"
            }
          >
            About
          </a>
        </li>
        <li className="mb-2 md:mb-0 md:mr-2">
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact"
                ? "btn btn-fill border-cyan-600 text-white bg-cyan-600"
                : "btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-700 hover:text-white hover:border-cyan-700"
            }
          >
            Contact
          </a>
        </li>

        <li>
          <a
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume"
                ? "btn btn-fill border-cyan-600 text-white bg-cyan-600"
                : "btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-700 hover:text-white"
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
