const HomeServiceSection = () => {
  return (
    <div id="domicilio" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">¿No tienes tiempo de ir al laboratorio?</h2>
        <p className="text-2xl mb-8">El laboratorio va a ti</p>
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Servicio a Domicilio</h3>
          <p className="text-gray-700 mb-6">Profesionales capacitados llegan a tu hogar u oficina para realizar tus estudios</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Solicitar servicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceSection;