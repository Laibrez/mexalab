const ServicesSection = () => {
  const services = [
    { name: 'Tomas de sangre', icon: '💉' },
    { name: 'Radiografías', icon: '📷' },
    { name: 'Ultrasonidos', icon: '👶' },
    { name: 'Electrocardiogramas', icon: '❤️' },
  ];

  return (
    <div id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">Resultados precisos y confiables</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;