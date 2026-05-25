import React, { useState } from 'react';
import { CheckCircle, Tag, ShoppingCart, Info, Search } from 'lucide-react';

const paquetesData = [
  {
    titulo: "Check-up Básico",
    precio: "$399",
    estudios: ["Química Sanguínea de 6 Elementos", "Biometría Hemática", "Examen General de Orina"]
  },
  {
    titulo: "Check-up 24",
    precio: "$630",
    estudios: ["Química Sanguínea de 24 Elementos", "Biometría Hemática", "Examen General de Orina"]
  },
  {
    titulo: "Check-up 33",
    precio: "$820",
    estudios: ["Química Sanguínea de 33 Elementos", "Biometría Hemática", "Examen General de Orina"]
  },
  {
    titulo: "Paquete 48",
    precio: "$1,712",
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
    titulo: "Paquete Corazón",
    precio: "$630",
    estudios: ["Tele de Torax", "Electrocardiograma"]
  },
  {
    titulo: "Química 3 Corazón",
    precio: "$190",
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
    precio: "$790",
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
    titulo: "Perfil Preoperatorio",
    precio: "$700",
    estudios: ["Examen General de Orina", "Biometría Hemática", "Grupo Sanguíneo y Factor RH", "Química de 3 Elementos", "TP y TPT"]
  },
  {
    titulo: "Paquete 27",
    precio: "$650",
    estudios: ["Química Sanguínea de 27 Elementos", "Biometría Hemática", "Examen General de Orina"]
  }
];

const PaquetesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [showModal, setShowModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [selectedPaquete, setSelectedPaquete] = useState(null);
  const [formData, setFormData] = useState({ nombre: '', edad: '', telefono: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cc61350e-975e-4964-8c47-d531bc58d135",
          subject: `Nueva solicitud: ${selectedPaquete?.titulo}`,
          from_name: "Sitio Web Mexalab",
          Paquete: selectedPaquete?.titulo,
          Nombre: formData.nombre,
          Edad: formData.edad,
          Teléfono: formData.telefono,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setModalSuccess(true);
      } else {
        alert("Hubo un error al enviar la solicitud. Por favor intenta de nuevo.");
      }
    } catch (error) {
      alert("Error de conexión. Por favor intenta más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const filters = ['Todos', 'Check-ups', 'Perfiles', 'Corazón'];

  const filteredPaquetes = paquetesData.filter(paquete => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = paquete.titulo.toLowerCase().includes(searchLower) || 
                          paquete.estudios.some(e => e.toLowerCase().includes(searchLower));
    
    let matchesFilter = true;
    if (activeFilter === 'Check-ups') {
      matchesFilter = paquete.titulo.toLowerCase().includes('check-up');
    } else if (activeFilter === 'Perfiles') {
      matchesFilter = paquete.titulo.toLowerCase().includes('perfil');
    } else if (activeFilter === 'Corazón') {
      matchesFilter = paquete.titulo.toLowerCase().includes('corazón');
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-teal-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative w-[95%] max-w-[1600px] mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Nuestros Paquetes</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Descubre los diferentes perfiles y check-ups médicos que hemos diseñado para el cuidado integral de tu salud y la de tu familia.
          </p>
        </div>
      </div>

      <div className="w-[95%] max-w-[1600px] mx-auto px-4 py-12 mt-12 relative z-10">
        
        {/* Folletos (Imágenes subidas) */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-t-4 border-teal-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <Info className="w-8 h-8 mr-3 text-teal-500" />
            Folletos de Paquetes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <img src="/chkup_basico_1.png" alt="Paquetes y Check-ups Básicos" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <img src="/marcadores.png" alt="Perfiles y Check-ups Especializados" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Tarjetas Interactivas de Paquetes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <Tag className="w-8 h-8 mr-3 text-teal-500" />
            Detalle de Paquetes
          </h2>

          {/* Filtros y Buscador */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar paquetes o estudios..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
                {filters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-lg transition-all font-semibold ${
                      activeFilter === filter 
                        ? 'bg-teal-500 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-teal-100'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredPaquetes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPaquetes.map((paquete, index) => (
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
                  <button 
                    onClick={() => { setSelectedPaquete(paquete); setShowModal(true); setModalSuccess(false); setFormData({ nombre: '', edad: '', telefono: '' }); }}
                    className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Solicitar
                  </button>
                </div>
              </div>
            ))}
          </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron paquetes</h3>
              <p className="text-gray-500">Intenta con otros términos de búsqueda o elimina los filtros.</p>
              <button 
                onClick={() => {setSearchTerm(''); setActiveFilter('Todos');}}
                className="mt-4 text-teal-600 font-semibold hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>

      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl"
            >
              ✕
            </button>
            {modalSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Gracias!</h3>
                <p className="text-gray-600">En breve nos pondremos en contacto contigo.</p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicitar {selectedPaquete?.titulo}</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                      <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Edad</label>
                      <input type="number" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" value={formData.edad} onChange={e => setFormData({...formData, edad: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Número de teléfono</label>
                      <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} />
                    </div>
                    <button type="submit" disabled={isSubmitting} className={`w-full text-white font-bold py-3 rounded-lg transition-colors mt-6 ${isSubmitting ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'}`}>
                      {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaquetesPage;
