import React, { useState } from 'react';
import { 
  Heart, 
  Activity, 
  UserCheck, 
  FlaskConical, 
  Droplets, 
  Zap, 
  ChevronRight,
  Gift,
  Sparkles,
  Clock,
  CheckCircle,
  Search
} from 'lucide-react';

const ServiciosPage = ({ setActivePage, setSelectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const servicios = [
    {
      categoria: "Ultrasonidos",
      icon: Activity,
      color: "bg-teal-500",
      items: [
        "Ultrasonido abdominal",
        "Ultrasonido pélvico",
        "Ultrasonido de tiroides",
        "Ultrasonido mamario"
      ]
    },
    {
      categoria: "Electrocardiogramas",
      icon: Heart,
      color: "bg-cyan-500",
      items: [
        "Electrocardiograma básico",
        "Prueba de esfuerzo",
        "Holter de 24 horas"
      ]
    },
    {
      categoria: "Chequeos",
      icon: UserCheck,
      color: "bg-teal-600",
      items: [
        "Chequeo ejecutivo",
        "Chequeo básico",
        "Chequeo mujer",
        "Chequeo hombre"
      ]
    },
    {
      categoria: "Química Sanguínea",
      icon: FlaskConical,
      color: "bg-cyan-600",
      items: [
        "Perfil básico",
        "Perfil hepático",
        "Perfil renal",
        "Perfil lipídico"
      ]
    },
    {
      categoria: "Biometría Hemática",
      icon: Droplets,
      color: "bg-teal-500",
      items: [
        "Hemograma completo",
        "Velocidad de sedimentación",
        "Grupo sanguíneo"
      ]
    },
    {
      categoria: "Perfiles Hormonales",
      icon: Zap,
      color: "bg-cyan-500",
      items: [
        "Perfil tiroideo",
        "Perfil hormonal femenino",
        "Perfil hormonal masculino"
      ]
    },
    {
      categoria: "Rayos X",
      icon: Activity,
      color: "bg-blue-500",
      items: [
        "Tele de Torax",
        "Rayos X de extremidades",
        "Rayos X de columna"
      ]
    },
    {
      categoria: "Servicios Especiales",
      icon: Search,
      color: "bg-teal-700",
      items: [
        "Servicio en inglés con certificados traducidos"
      ]
    }
  ];

  const promotions = [
    { 
      title: '2x1 en estudios básicos', 
      description: 'Aprovecha esta promoción válida todo el mes', 
      code: 'MXLAB2X1',
      expiry: 'Válido hasta fin de mes'
    },
    { 
      title: '20% de descuento', 
      description: 'En tu primera consulta con estudios incluidos', 
      code: 'MXLAB20',
      expiry: 'Solo para nuevos pacientes'
    },
    { 
      title: 'Chequeo ejecutivo', 
      description: 'Paquete completo con descuento especial', 
      code: 'EJECUTIVO15',
      expiry: 'Promoción limitada'
    }
  ];

  const filteredServicios = servicios.filter(grupo => {
    const matchesSearch = grupo.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grupo.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || grupo.categoria === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-teal-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative w-[95%] max-w-[1600px] mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios médicos especializados con tecnología de vanguardia
            </p>
          </div>
        </div>
        
      </div>

      <div className="w-[95%] max-w-[1600px] mx-auto px-4 py-12 mt-12 relative z-10">
        {/* Promotions Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-teal-500">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Promociones Especiales</h2>
              <Sparkles className="w-8 h-8 text-teal-500 ml-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {promotions.map((promo, index) => (
                <a href="/cupon.pdf" download key={index} className="block group relative overflow-hidden bg-teal-500 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                    <p className="mb-4 opacity-90">{promo.description}</p>
                    <div className="bg-white text-teal-600 px-4 py-2 rounded-lg inline-block font-mono font-bold text-sm mb-2">
                      {promo.code}
                    </div>
                    <div className="flex items-center text-sm opacity-75 mt-2">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{promo.expiry}</span>
                    </div>
                    <div className="mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Click para descargar PDF
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>



        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServicios.map((grupo, index) => {
            const IconComponent = grupo.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                {/* Header */}
                <div className={`${grupo.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{grupo.categoria}</h3>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3">
                    {grupo.items.map((item, i) => (
                      <div key={i} className="flex items-center group-hover:translate-x-1 transition-transform duration-200">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => {
                        setSelectedCategory(grupo.categoria);
                        setActivePage('servicio_detalle');
                      }}
                      className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-300 flex items-center justify-center group"
                    >
                      <span>Ver Paquetes y Detalles</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServicios.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron servicios</h3>
            <p className="text-gray-600">Intenta con otros términos de búsqueda o categorías</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-teal-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
          <p className="text-lg opacity-90 mb-6">
            Nuestro equipo está listo para ayudarte a elegir el servicio que mejor se adapte a tus necesidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/525584984243" target="_blank" rel="noopener noreferrer" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Agendar cita
            </a>
            <a href="https://wa.me/525584984243" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 flex items-center justify-center">
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosPage;