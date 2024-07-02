import React from "react";
import NavBar from "./NavBar";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="bg-white py-1 drop-shadow-md">
        <div className="flex flex-row justify-between items-center mx-28">
          <a href="#About" onClick={() => handlePageChange("About")}>
            <h1 className="text-start text-5xl font-bold text-gray-600">
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
