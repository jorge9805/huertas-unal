import { Plant, Flask, BookOpen, Images, MapPin } from '@phosphor-icons/react'

function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-green-700">
            <Plant size={32} weight="fill" />
            <span className="hidden sm:inline">Huertas UNAL</span>
          </a>
          
          {/* Navegación */}
          <div className="hidden md:flex space-x-8">
            <a href="#investigacion" className="text-gray-600 hover:text-green-700 font-medium flex items-center">
              <Flask size={20} className="mr-1" /> Investigación
            </a>
            <a href="#tutoriales" className="text-gray-600 hover:text-green-700 font-medium flex items-center">
              <BookOpen size={20} className="mr-1" /> Tutoriales
            </a>
            <a href="#galeria" className="text-gray-600 hover:text-green-700 font-medium flex items-center">
              <Images size={20} className="mr-1" /> Galería
            </a>
            <a href="#mapa" className="text-gray-600 hover:text-green-700 font-medium flex items-center">
              <MapPin size={20} className="mr-1" /> Mapa
            </a>
          </div>
          
          {/* Botón de Contacto */}
          <div>
            <a href="#footer" className="text-sm font-semibold text-green-700 hover:text-green-900">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
