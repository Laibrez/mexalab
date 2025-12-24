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
            <p className="text-gray-300 mb-2">Aluminio 245, Col. Popular Rastro</p>
            <p className="text-gray-300 mb-2">Alc. Venustiano Carranza, CDMX, CP: 15220</p>
            <p className="text-gray-300 mb-2">55 8498 4243</p>
            <p className="text-gray-300">mexalab.1@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/mexa.lab/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-lg">FB</span>
              </a>
              <a 
                href="https://www.instagram.com/mexa.labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-lg">IG</span>
              </a>
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