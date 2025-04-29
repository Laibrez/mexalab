import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import MembershipPage from './pages/MembershipPage';
import HomeServicePage from './pages/HomeServicePage';

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/home-service" element={<HomeServicePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;