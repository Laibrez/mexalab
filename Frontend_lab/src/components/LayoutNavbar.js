const LayoutNavbar = ({ activePage, setActivePage }) => {
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
              onClick={() => setActivePage('servicios')}
              className={`py-4 px-2 ${activePage === 'servicios' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'} font-semibold hover:text-blue-500 transition duration-300`}
            >
              Servicios
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;
