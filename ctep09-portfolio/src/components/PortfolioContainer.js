// Importing React
import React, { useState } from "react";

import NavBar from "./NavBar";
import Header from "./Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div className="flex-col">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
