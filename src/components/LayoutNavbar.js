import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LayoutNavbar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };
  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="w-[95%] max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div className="flex items-center py-3 px-2">
              <img src="/logo.png" alt="MexaLab Logo" className="h-16 md:h-20 lg:h-24 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setActivePage('conocenos')} />
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => setActivePage('conocenos')}
              className={`py-6 px-3 text-lg ${activePage === 'conocenos' ? 'text-teal-700 border-b-4 border-teal-700' : 'text-gray-600'} font-semibold hover:text-teal-700 transition duration-300`}
            >
              Conócenos
            </button>
            <button 
              onClick={() => setActivePage('domicilio')}
              className={`py-6 px-3 text-lg ${activePage === 'domicilio' ? 'text-teal-700 border-b-4 border-teal-700' : 'text-gray-600'} font-semibold hover:text-teal-700 transition duration-300`}
            >
              Servicios a Domicilio
            </button>
            <button 
              onClick={() => setActivePage('paquetes')}
              className={`py-6 px-3 text-lg ${activePage === 'paquetes' ? 'text-teal-700 border-b-4 border-teal-700' : 'text-gray-600'} font-semibold hover:text-teal-700 transition duration-300`}
            >
              Paquetes
            </button>
            <button 
              onClick={() => setActivePage('servicios')}
              className={`py-6 px-3 text-lg ${activePage === 'servicios' ? 'text-teal-700 border-b-4 border-teal-700' : 'text-gray-600'} font-semibold hover:text-teal-700 transition duration-300`}
            >
              Servicios
            </button>
          </div>
          {/* Hamburger Icon for Mobile & iPad */}
          <div className="lg:hidden flex items-center py-6 px-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-teal-700 focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & iPad Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-2 pt-2 pb-4 space-y-1 shadow-lg absolute w-full z-50">
          <button 
            onClick={() => handleNavClick('conocenos')}
            className={`block w-full text-left px-3 py-3 rounded-md text-lg font-medium ${activePage === 'conocenos' ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'} transition duration-300`}
          >
            Conócenos
          </button>
          <button 
            onClick={() => handleNavClick('domicilio')}
            className={`block w-full text-left px-3 py-3 rounded-md text-lg font-medium ${activePage === 'domicilio' ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'} transition duration-300`}
          >
            Servicios a Domicilio
          </button>
          <button 
            onClick={() => handleNavClick('paquetes')}
            className={`block w-full text-left px-3 py-3 rounded-md text-lg font-medium ${activePage === 'paquetes' ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'} transition duration-300`}
          >
            Paquetes
          </button>
          <button 
            onClick={() => handleNavClick('servicios')}
            className={`block w-full text-left px-3 py-3 rounded-md text-lg font-medium ${activePage === 'servicios' ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'} transition duration-300`}
          >
            Servicios
          </button>
        </div>
      )}
    </nav>
  );
};

export default LayoutNavbar;
