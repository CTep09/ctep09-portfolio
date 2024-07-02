import React from "react";
import NavBar from "./NavBar";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="bg-white py-2 drop-shadow-md">
        <div className="flex flex-row justify-between items-center mx-4 md:mx-28">
          <a href="#Portfolio" onClick={() => handlePageChange("Portfolio")}>
            <h1 className="text-start text-3xl md:text-5xl font-bold text-gray-600">
              Cassie Tepper
            </h1>
          </a>
          <NavBar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
