const LayoutFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Laboratorio Clínico</h3>
            <p className="text-gray-300">
              Servicios de diagnóstico clínico con la más alta tecnología y calidad.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-300 mb-2">Av. Revolución 123, CDMX</p>
            <p className="text-gray-300 mb-2">55 1234 5678</p>
            <p className="text-gray-300">info@laboratorio.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white">
                <span className="text-lg">FB</span>
              </button>
              <button className="text-gray-300 hover:text-white">
                <span className="text-lg">TW</span>
              </button>
              <button className="text-gray-300 hover:text-white">
                <span className="text-lg">IG</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Laboratorio Clínico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;