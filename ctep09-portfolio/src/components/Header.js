import React from "react";
import NavBar from "./NavBar";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center p-4">
      <h1 className="text-start text-5xl font-bold font-sans text-pink-700">
        Cassie Tepper
      </h1>
      <div className="">
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default Header;
