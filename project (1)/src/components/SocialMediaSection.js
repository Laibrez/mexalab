const SocialMediaSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Síguenos en redes sociales</h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
            <span className="text-xl">f</span>
          </a>
          <a href="#" className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-700 transition duration-300">
            <span className="text-xl">ig</span>
          </a>
          <a href="#" className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
            <span className="text-xl">wa</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;