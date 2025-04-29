const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-teal-400 h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-6">Laboratorio Clínico Mexalab</h1>
        <p className="text-xl text-white mb-8">Tecnología y precisión al servicio de tu salud</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
          Agenda tu cita
        </button>
      </div>
    </div>
  );
};

export default HeroSection;