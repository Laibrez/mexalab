import React from 'react';
import { ArrowLeft, CheckCircle, ShoppingCart } from 'lucide-react';

const paquetesData = [
  {
    titulo: "Check-up Básico",
    precio: "$399",
    estudios: ["Química Sanguínea de 6 Elementos", "Biometría Hemática", "Examen General de Orina"]
  },
  {
    titulo: "Check-up 24",
    precio: "$580",
    estudios: ["Química Sanguínea de 24 Elementos", "Biometría Hemática", "Examen General de Orina"]
  },
  {
    titulo: "Check-up 33",
    precio: "$720",
    estudios: ["Química Sanguínea de 33 Elementos", "Biometría Hemática", "Examen General de Orina"]
  },
  {
    titulo: "Check-up 48",
    precio: "$1,315",
    estudios: ["Química Sanguínea de 48 Elementos", "Biometría Hemática", "Examen General de Orina"]
  },
  {
    titulo: "Check-up Masculino",
    precio: "$800",
    estudios: ["Química Sanguínea de 24 Elementos", "Biometría Hemática", "Examen General de Orina", "Antígeno Prostático Específico"]
  },
  {
    titulo: "Check-up Femenino",
    precio: "$620",
    estudios: ["Papanicolau", "Cultivo Vaginal", "Examen General de Orina"]
  },
  {
    titulo: "Paquete Corazón I",
    precio: "$500",
    estudios: ["Tele de Torax", "Electrocardiograma"]
  },
  {
    titulo: "Check-up Corazón",
    precio: "$550",
    estudios: ["Glucosa", "Colesterol", "Triglicéridos"]
  },
  {
    titulo: "Perfil Diabético Básico",
    precio: "$590",
    estudios: ["Química Sanguínea de 6 Elementos", "Examen General de Orina", "Hemoglobina Glucosilada"]
  },
  {
    titulo: "Perfil Escolar Sin Agujas",
    precio: "$600",
    estudios: ["Exudado Faríngeo", "Examen General de Orina", "Coproparasitoscópico 3 muestras"]
  },
  {
    titulo: "Check-up Prenupcial",
    precio: "$665",
    estudios: ["AC Anti HIV", "V.D.R.L.", "Grupo Sanguíneo y Factor RH", "Biometría Hemática"]
  },
  {
    titulo: "Check-up Natación",
    precio: "$750",
    estudios: ["Perfil de lípidos", "Electrocardiograma"]
  },
  {
    titulo: "Paquete Corazón II",
    precio: "$550",
    estudios: ["Tele de Torax", "Electrocardiograma", "Química S. de 3 Elementos"]
  },
  {
    titulo: "Perfil Escolar Con Agujas",
    precio: "$650",
    estudios: ["Exudado Faríngeo", "Examen General de Orina", "Coproparasitoscópico 3 muestras", "Biometría Hemática", "Grupo Sanguíneo y Factor RH"]
  },
  {
    titulo: "Perfil Preoperatorio Básico",
    precio: "$750",
    estudios: ["Examen General de Orina", "Biometría Hemática", "Grupo Sanguíneo y Factor RH", "Química de 3 Elementos", "TP y TPT"]
  },
  {
    titulo: "Check-up 27",
    precio: "$665",
    estudios: ["Química Sanguínea de 27 Elementos", "Biometría Hemática", "Examen General de Orina"]
  }
];

const ServicioDetallePage = ({ category, setActivePage }) => {
  // Filter packages based on category relevance (naive matching for demo purposes)
  const categoryLower = category?.toLowerCase() || '';
  
  const relatedPackages = paquetesData.filter(paquete => {
    // If category is "Chequeos", we show all "Check-up"
    if (categoryLower.includes('chequeo') && paquete.titulo.toLowerCase().includes('check-up')) return true;
    // If category is "Rayos X", we look for Torax, Rayos, etc.
    if (categoryLower.includes('rayos x') && paquete.estudios.some(e => e.toLowerCase().includes('torax') || e.toLowerCase().includes('rayos'))) return true;
    // If category is "Electrocardiogramas", we look for "corazón" or "electrocardiograma"
    if (categoryLower.includes('electro') || categoryLower.includes('coraz')) {
      if (paquete.titulo.toLowerCase().includes('coraz') || paquete.estudios.some(e => e.toLowerCase().includes('electro'))) return true;
    }
    // General keyword matching
    const matchTitle = paquete.titulo.toLowerCase().includes(categoryLower);
    const matchEstudios = paquete.estudios.some(e => e.toLowerCase().includes(categoryLower));
    
    return matchTitle || matchEstudios;
  });

  return (
    <div className="min-h-screen bg-teal-50 py-12 px-4">
      <div className="w-[95%] max-w-[1600px] mx-auto">
        <button 
          onClick={() => setActivePage('servicios')}
          className="mb-8 flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Regresar a Servicios
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-teal-500 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Paquetes y Estudios: <span className="text-teal-600">{category}</span>
          </h1>
          <p className="text-lg text-gray-600">
            Encuentra las mejores opciones y perfiles diseñados específicamente para la categoría de {category}.
          </p>
        </div>

        {relatedPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPackages.map((paquete, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100">
                <div className="bg-teal-50 p-6 border-b border-teal-100">
                  <h3 className="text-xl font-bold text-gray-800 text-center">{paquete.titulo}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3 mb-6">
                    {paquete.estudios.map((estudio, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{estudio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-4">{paquete.precio}</div>
                  <a href="https://wa.me/525584984243" target="_blank" rel="noopener noreferrer" className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Agendar Cita
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Aún no hay paquetes armados para esta categoría</h3>
            <p className="text-gray-600 mb-6">
              Sin embargo, contamos con todos los estudios individuales de {category}. Contáctanos para armar un paquete a tu medida.
            </p>
            <a href="https://wa.me/525584984243" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Contactar Asesor
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicioDetallePage;
