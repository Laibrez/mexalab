import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/mexalab_logo.png'; // Replace with your actual logo file

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and brand name */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
          <img src={logo} alt="Mexalab Logo" className="h-8 w-8" />
          <span>Mexalab</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/servicios" className="text-gray-700 hover:text-blue-600">Servicios</Link>
          <Link to="/domicilio" className="text-gray-700 hover:text-blue-600">A Domicilio</Link>
          <Link to="/paquetes" className="text-gray-700 hover:text-blue-600">Paquetes</Link>
          <Link to="/promociones" className="text-gray-700 hover:text-blue-600">Promociones</Link>
          <Link to="/membresia" className="text-gray-700 hover:text-blue-600">Membresía</Link>
        </div>

        {/* Mobile menu icon (for future dropdown) */}
        <button className="md:hidden">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
