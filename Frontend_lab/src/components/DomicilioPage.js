const DomicilioPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Servicios a Domicilio</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">¿No tienes tiempo?</h3>
            <p className="text-gray-700 mb-4">
              Nosotros vamos hasta ti. Nuestro equipo de enfermería capacitado puede realizar la toma 
              de muestras en la comodidad de tu hogar u oficina.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-700">Sin salir de casa</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-700">Mismo día de resultados</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-700">Equipo esterilizado</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Adultos Mayores</h3>
            <p className="text-gray-700 mb-4">
              Servicio especializado para adultos mayores con movilidad reducida. 
              Nuestros profesionales están capacitados para brindar atención con paciencia y respeto.
            </p>
            <div className="bg-white p-4 rounded border border-gray-200">
              <p className="text-sm text-gray-600">
                * Este servicio incluye toma de muestras para estudios básicos y especializados.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">¿Cómo funciona?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">1</div>
              <p className="text-gray-700">Agenda tu cita por teléfono o WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">2</div>
              <p className="text-gray-700">Nuestro equipo llega a tu domicilio</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">3</div>
              <p className="text-gray-700">Recibe resultados por correo electrónico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomicilioPage;