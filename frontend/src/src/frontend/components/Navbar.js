import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink 
          to="/" 
          className="text-2xl font-bold text-blue-600"
        >
          Mexalab
        </NavLink>
        <div className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 ${isActive ? 'text-teal-500 font-medium' : ''}`
            }
            end
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 ${isActive ? 'text-teal-500 font-medium' : ''}`
            }
          >
            Conócenos
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 ${isActive ? 'text-teal-500 font-medium' : ''}`
            }
          >
            Servicios
          </NavLink>
          <NavLink 
            to="/packages" 
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 ${isActive ? 'text-teal-500 font-medium' : ''}`
            }
          >
            Paquetes
          </NavLink>
          <NavLink 
            to="/membership" 
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 ${isActive ? 'text-teal-500 font-medium' : ''}`
            }
          >
            Membresía
          </NavLink>
          <NavLink 
            to="/home-service" 
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 ${isActive ? 'text-teal-500 font-medium' : ''}`
            }
          >
            A Domicilio
          </NavLink>
        </div>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;