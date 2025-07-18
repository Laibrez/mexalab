import React, { useState } from 'react';
import { 
  Home, 
  Clock, 
  Shield, 
  Users, 
  Building, 
  Heart, 
  Hotel, 
  UserCheck,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Truck,
  DollarSign,
  Zap,
  Target,
  ChevronRight,
  Calendar,
  MessageCircle
} from 'lucide-react';

const DomicilioPage = () => {
  const [selectedService, setSelectedService] = useState('family');

  const serviceTypes = [
    {
      id: 'family',
      title: 'Servicios para mi familia',
      icon: Heart,
      color: 'from-teal-500 to-cyan-500',
      description: 'Atención personalizada para toda la familia en la comodidad de tu hogar',
      features: ['Toma de muestras domiciliaria', 'Horarios flexibles', 'Equipo esterilizado', 'Personal capacitado']
    },
    {
      id: 'business',
      title: 'Servicios para mi empresa',
      icon: Building,
      color: 'from-cyan-500 to-blue-500',
      description: 'Soluciones integrales de salud ocupacional para tu empresa',
      features: ['Chequeos médicos grupales', 'Precios preferenciales', 'Reportes empresariales', 'Facturación corporativa']
    },
    {
      id: 'hotel',
      title: 'Servicios para un hotel',
      icon: Hotel,
      color: 'from-teal-600 to-emerald-500',
      description: 'Servicios médicos especializados para huéspedes y personal hotelero',
      features: ['Disponibilidad 24/7', 'Atención multiidioma', 'Servicio express', 'Protocolos de turismo']
    },
    {
      id: 'referral',
      title: 'Servicios para un conocido',
      icon: UserCheck,
      color: 'from-cyan-600 to-teal-600',
      description: 'Refiere a familiares y amigos con beneficios especiales',
      features: ['Descuentos por referidos', 'Programa de lealtad', 'Atención prioritaria', 'Bonificaciones']
    }
  ];

  const businessBenefits = [
    {
      icon: DollarSign,
      title: 'Costo especial',
      description: 'Precios preferenciales por volumen de estudios realizados'
    },
    {
      icon: Star,
      title: 'Atención especializada',
      description: 'Personal capacitado en todos nuestros servicios médicos'
    },
    {
      icon: Zap,
      title: 'Entrega rápida',
      description: 'Resultados en el menor tiempo posible, mismo día disponible'
    },
    {
      icon: MapPin,
      title: 'Costo basado en ubicación',
      description: 'Tarifas justas según la distancia y accesibilidad'
    },
    {
      icon: Target,
      title: 'Flexible y personalizado',
      description: 'Adaptamos nuestros servicios a tus necesidades específicas'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Agenda tu cita',
      description: 'Contacta por teléfono o WhatsApp para programar',
      icon: Calendar
    },
    {
      number: '2',
      title: 'Llegamos a ti',
      description: 'Nuestro equipo llega puntualmente a tu domicilio',
      icon: Truck
    },
    {
      number: '3',
      title: 'Recibe resultados',
      description: 'Obtén tus resultados por correo electrónico',
      icon: Mail
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Servicios a Domicilio</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Llevamos nuestros servicios médicos hasta donde estés. Comodidad, calidad y confianza en cada visita.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-teal-50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 relative z-10">
        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-teal-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-600">¿No tienes tiempo?</h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              Nosotros vamos hasta ti. Nuestro equipo de enfermería capacitado puede realizar la toma 
              de muestras en la comodidad de tu hogar u oficina.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                <span className="text-gray-700 font-medium">Sin salir de casa</span>
              </div>
              <div className="flex items-center p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                <span className="text-gray-700 font-medium">Mismo día de resultados</span>
              </div>
              <div className="flex items-center p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                <span className="text-gray-700 font-medium">Equipo esterilizado</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-cyan-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-cyan-600">Adultos Mayores</h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              Servicio especializado para adultos mayores con movilidad reducida. 
              Nuestros profesionales están capacitados para brindar atención con paciencia y respeto.
            </p>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
              <p className="text-gray-600 font-medium">
                * Este servicio incluye toma de muestras para estudios básicos y especializados 
                con atención personalizada y cuidado especial.
              </p>
            </div>
          </div>
        </div>

        {/* Business Services Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border-t-4 border-emerald-500">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Servicios para tu Empresa</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Ofrecemos soluciones integrales de salud ocupacional adaptadas a las necesidades de tu organización
            </p>
          </div>

          {/* Business Benefits Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {businessBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Types Selection */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Elige tu Tipo de Servicio</h2>
          
          {/* Service Type Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {serviceTypes.map((service) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    selectedService === service.id 
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg scale-105' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-center">{service.title}</p>
                </button>
              );
            })}
          </div>

          {/* Selected Service Details */}
          {serviceTypes.map((service) => {
            const IconComponent = service.icon;
            return selectedService === service.id ? (
              <div key={service.id} className={`bg-gradient-to-r ${service.color} rounded-xl p-6 text-white`}>
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-lg mb-6 opacity-90">{service.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 opacity-80" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null;
          })}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">¿Cómo funciona?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    <div className="w-8 h-8 bg-white border-4 border-teal-500 rounded-full flex items-center justify-center mx-auto -mt-4 relative z-10">
                      <IconComponent className="w-4 h-4 text-teal-500" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para agendar tu cita?</h3>
          <p className="text-lg opacity-90 mb-6">
            Contacta con nosotros y recibe atención médica de calidad en la comodidad de tu hogar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Llamar ahora
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomicilioPage;
