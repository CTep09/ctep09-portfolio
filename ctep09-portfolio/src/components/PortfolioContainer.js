import React, { useState } from "react";
import Header from "./Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

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
    return <Contact handlePageChange={handlePageChange} />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="flex-grow flex justify-center items-center">
        <div className="items-center flex-col">{renderPage()}</div>
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
