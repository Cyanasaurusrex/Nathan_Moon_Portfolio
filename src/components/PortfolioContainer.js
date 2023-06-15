import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer'



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
