const LayoutNavbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="bg-dark-blue shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center py-4 px-2 cursor-pointer" onClick={() => setActivePage('home')}>
            <span className="font-bold text-white text-2xl">MexaLab</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setActivePage('servicios')}
              className={`py-4 px-3 ${activePage === 'servicios' ? 'text-white border-b-2 border-health-green' : 'text-gray-300'} font-medium hover:text-white transition duration-300`}
            >
              Servicios
            </button>
            <button 
              onClick={() => setActivePage('estudios')}
              className={`py-4 px-3 ${activePage === 'estudios' ? 'text-white border-b-2 border-health-green' : 'text-gray-300'} font-medium hover:text-white transition duration-300`}
            >
              Estudios
            </button>
            <button 
              onClick={() => setActivePage('preparacion')}
              className={`py-4 px-3 ${activePage === 'preparacion' ? 'text-white border-b-2 border-health-green' : 'text-gray-300'} font-medium hover:text-white transition duration-300`}
            >
              Preparación
            </button>
            <button 
              onClick={() => setActivePage('resultados')}
              className={`py-4 px-3 ${activePage === 'resultados' ? 'text-white border-b-2 border-health-green' : 'text-gray-300'} font-medium hover:text-white transition duration-300`}
            >
              Resultados
            </button>
            <button 
              onClick={() => setActivePage('conocenos')}
              className={`py-4 px-3 ${activePage === 'conocenos' ? 'text-white border-b-2 border-health-green' : 'text-gray-300'} font-medium hover:text-white transition duration-300`}
            >
              Contacto
            </button>
            <button 
              className="bg-health-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300 ml-4"
            >
              Agendar cita
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;
