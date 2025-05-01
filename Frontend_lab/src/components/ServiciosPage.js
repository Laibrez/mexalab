const ServiciosPage = () => {
  const servicios = [
    {
      categoria: "Ultrasonidos",
      items: [
        "Ultrasonido abdominal",
        "Ultrasonido pélvico",
        "Ultrasonido de tiroides",
        "Ultrasonido mamario"
      ]
    },
    {
      categoria: "Electrocardiogramas",
      items: [
        "Electrocardiograma básico",
        "Prueba de esfuerzo",
        "Holter de 24 horas"
      ]
    },
    {
      categoria: "Chequeos",
      items: [
        "Chequeo ejecutivo",
        "Chequeo básico",
        "Chequeo mujer",
        "Chequeo hombre"
      ]
    },
    {
      categoria: "Química Sanguínea",
      items: [
        "Perfil básico",
        "Perfil hepático",
        "Perfil renal",
        "Perfil lipídico"
      ]
    },
    {
      categoria: "Biometría Hemática",
      items: [
        "Hemograma completo",
        "Velocidad de sedimentación",
        "Grupo sanguíneo"
      ]
    },
    {
      categoria: "Perfiles Hormonales",
      items: [
        "Perfil tiroideo",
        "Perfil hormonal femenino",
        "Perfil hormonal masculino"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Nuestros Servicios</h2>
        
        <div className="space-y-8">
          {servicios.map((grupo, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{grupo.categoria}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {grupo.items.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiciosPage;