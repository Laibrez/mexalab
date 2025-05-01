const ConocenosPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Quiénes Somos?</h2>
        <p className="text-gray-600 mb-6">
          Somos un laboratorio clínico mexicano comprometido con la salud de nuestros pacientes. 
          Con más de 15 años de experiencia, ofrecemos resultados confiables y un trato humano.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Misión</h3>
          <p className="text-gray-700">
            Proporcionar servicios de diagnóstico clínico con la más alta calidad, tecnología de punta 
            y personal altamente capacitado, contribuyendo al bienestar de nuestros pacientes.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="h-40 bg-gray-200 rounded mb-3"></div>
              <h4 className="font-bold text-lg text-gray-800">Dr. Juan Pérez</h4>
              <p className="text-blue-500">Director Médico</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="h-40 bg-gray-200 rounded mb-3"></div>
              <h4 className="font-bold text-lg text-gray-800">Dra. Ana López</h4>
              <p className="text-blue-500">Patóloga Clínica</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="h-40 bg-gray-200 rounded mb-3"></div>
              <h4 className="font-bold text-lg text-gray-800">Lic. Carlos Ruiz</h4>
              <p className="text-blue-500">Jefe de Laboratorio</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contacto</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-700 mb-2">Dirección</h4>
              <p className="text-gray-600">Av. Revolución 123, Col. Centro, CDMX</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-2">Teléfono</h4>
              <p className="text-gray-600">55 1234 5678</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-2">Horario</h4>
              <p className="text-gray-600">Lunes a Viernes: 7:00 - 20:00 hrs</p>
              <p className="text-gray-600">Sábados: 8:00 - 14:00 hrs</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-2">Redes Sociales</h4>
              <div className="flex space-x-4">
                <button className="text-blue-500 hover:text-blue-700">
                  <span className="text-lg">FB</span>
                </button>
                <button className="text-blue-400 hover:text-blue-600">
                  <span className="text-lg">TW</span>
                </button>
                <button className="text-pink-500 hover:text-pink-700">
                  <span className="text-lg">IG</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConocenosPage;