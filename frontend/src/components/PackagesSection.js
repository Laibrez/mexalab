const PackagesSection = () => {
  const packages = [
    { name: 'Paquete Básico', price: '$599', includes: ['Toma de sangre', 'Biometría hemática'] },
    { name: 'Paquete Completo', price: '$1,299', includes: ['Toma de sangre', 'Química sanguínea', 'Examen general de orina'] },
    { name: 'Paquete Premium', price: '$2,499', includes: ['Todos los estudios básicos', 'Perfil tiroideo', 'Perfil hormonal'] },
  ];

  return (
    <div id="paquetes" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Paquetes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-teal-500 text-white py-4 px-6">
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className="text-2xl font-bold">{pkg.price}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-teal-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-300">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;