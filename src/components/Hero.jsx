function Hero() {
  return (
    <header className="relative bg-green-900 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/documents/principal.jpg" 
          alt="Urban Gardens" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent"></div>
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <span className="bg-green-700/50 text-green-100 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 inline-block backdrop-blur-sm">
          Academic and Community Network
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
          Sow the Future, Make the City Blossom
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed italic px-2">
          "The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings"
        </p>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          Digital space for scientific outreach, process documentation and education on urban agriculture in the Nacho and Bogotá.
        </p>
      </div>
    </header>
  )
}

export default Hero
