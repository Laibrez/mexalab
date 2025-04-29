const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Mexalab</div>
        <div className="hidden md:flex space-x-8">
          <a href="#servicios" className="text-gray-700 hover:text-blue-600">Servicios</a>
          <a href="#domicilio" className="text-gray-700 hover:text-blue-600">A Domicilio</a>
          <a href="#paquetes" className="text-gray-700 hover:text-blue-600">Paquetes</a>
          <a href="#promociones" className="text-gray-700 hover:text-blue-600">Promociones</a>
          <a href="#membresia" className="text-gray-700 hover:text-blue-600">Membresía</a>
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