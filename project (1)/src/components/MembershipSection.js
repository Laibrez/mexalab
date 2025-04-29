const MembershipSection = () => {
  return (
    <div id="membresia" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Membresía Mexalab</h2>
        <div className="max-w-3xl mx-auto bg-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Beneficios exclusivos</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
              10% de descuento permanente
            </li>
            <li className="flex items-center">
              <span className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
              Descuento adicional por recomendaciones
            </li>
            <li className="flex items-center">
              <span className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
              Prioridad en citas y resultados
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="flex-grow px-4 py-2 rounded-lg text-gray-800"
            />
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
              Unirme ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;