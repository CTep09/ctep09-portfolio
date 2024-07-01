import React from "react";
import NavBar from "./NavBar";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="bg-white p-4 drop-shadow-md rounded-md ">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center mx-28 ">
          <h1 className="text-start text-5xl font-bold font-sans text-gray-600 ">
            Cassie Tepper
          </h1>
          <div>
            <NavBar
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
