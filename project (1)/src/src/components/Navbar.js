import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Mexalab
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Inicio
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            Conócenos
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">
            Servicios
          </Link>
          <Link to="/packages" className="text-gray-700 hover:text-blue-600">
            Paquetes
          </Link>
          <Link to="/membership" className="text-gray-700 hover:text-blue-600">
            Membresía
          </Link>
          <Link to="/home-service" className="text-gray-700 hover:text-blue-600">
            A Domicilio
          </Link>
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