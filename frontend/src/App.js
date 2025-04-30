import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import HomeServiceSection from './components/HomeServiceSection';
import PackagesSection from './components/PackagesSection';
import PromotionsSection from './components/PromotionsSection';
import MembershipSection from './components/MembershipSection';
import SocialMediaSection from './components/SocialMediaSection';
import Footer from './components/Footer';

const App = () => {
  const [currentPage] = useState('home');

  return (
    <div className="font-sans">
      <Navbar />
      {currentPage === 'home' && (
        <>
          <HeroSection />
          <ServicesSection />
          <HomeServiceSection />
          <PackagesSection />
          <PromotionsSection />
          <MembershipSection />
          <SocialMediaSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

// DONE