const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Laboratorio Clínico Mexalab</h3>
            <p>Tecnología y precisión al servicio de tu salud</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p>Teléfono: 555-123-4567</p>
            <p>Email: contacto@mexalab.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <p>Lunes a Viernes: 7am - 8pm</p>
            <p>Sábados: 8am - 2pm</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2023 Mexalab. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// DONE