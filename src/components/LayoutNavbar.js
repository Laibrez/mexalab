import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LayoutNavbar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-800 text-2xl">Laboratorio Clínico</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => setActivePage('conocenos')}
              className={`py-4 px-2 ${activePage === 'conocenos' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'} font-semibold hover:text-blue-500 transition duration-300`}
            >
              Conócenos
            </button>
            <button 
              onClick={() => setActivePage('domicilio')}
              className={`py-4 px-2 ${activePage === 'domicilio' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'} font-semibold hover:text-blue-500 transition duration-300`}
            >
              Servicios a Domicilio
            </button>
            <button 
              onClick={() => setActivePage('paquetes')}
              className={`py-4 px-2 ${activePage === 'paquetes' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'} font-semibold hover:text-blue-500 transition duration-300`}
            >
              Paquetes
            </button>
            <button 
              onClick={() => setActivePage('servicios')}
              className={`py-4 px-2 ${activePage === 'servicios' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'} font-semibold hover:text-blue-500 transition duration-300`}
            >
              Servicios
            </button>
          </div>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center py-4 px-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-blue-500 focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-2 pt-2 pb-4 space-y-1 shadow-inner">
          <button 
            onClick={() => handleNavClick('conocenos')}
            className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${activePage === 'conocenos' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'} transition duration-300`}
          >
            Conócenos
          </button>
          <button 
            onClick={() => handleNavClick('domicilio')}
            className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${activePage === 'domicilio' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'} transition duration-300`}
          >
            Servicios a Domicilio
          </button>
          <button 
            onClick={() => handleNavClick('paquetes')}
            className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${activePage === 'paquetes' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'} transition duration-300`}
          >
            Paquetes
          </button>
          <button 
            onClick={() => handleNavClick('servicios')}
            className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${activePage === 'servicios' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'} transition duration-300`}
          >
            Servicios
          </button>
        </div>
      )}
    </nav>
  );
};

export default LayoutNavbar;
