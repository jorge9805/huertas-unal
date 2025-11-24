import { Files, PlayCircle } from '@phosphor-icons/react'

function Hero() {
  return (
    <header className="relative bg-green-900 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/research_garden/1600/900" 
          alt="Investigación agraria" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent"></div>
      </div>
      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        <span className="bg-green-700/50 text-green-100 px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block backdrop-blur-sm">
          Red Académica y Comunitaria
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Ciencia y Tierra en la Ciudad
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Un espacio digital para la divulgación científica, documentación de procesos y educación sobre agricultura urbana en Bogotá.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#investigacion" 
            className="bg-white text-green-800 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg flex items-center justify-center"
          >
            <Files size={24} className="mr-2" /> Ver Investigaciones
          </a>
          <a 
            href="#tutoriales" 
            className="bg-green-700/80 backdrop-blur-sm text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 transition shadow-lg border border-green-600 flex items-center justify-center"
          >
            <PlayCircle size={24} className="mr-2" /> Aprender
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
