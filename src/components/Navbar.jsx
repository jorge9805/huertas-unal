import { Plant, Flask, BookOpen, Images, MapPin, Calendar } from '@phosphor-icons/react'

function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 text-xl sm:text-2xl font-bold text-green-700">
            <Plant size={28} weight="fill" className="sm:w-8 sm:h-8" />
            <span className="hidden sm:inline">Huertas UNAL</span>
          </a>
          
          {/* Navegación Desktop */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#investigacion" className="text-gray-600 hover:text-green-700 font-medium flex items-center text-sm xl:text-base">
              <Flask size={20} className="mr-1" /> Research
            </a>
            <a href="#tutoriales" className="text-gray-600 hover:text-green-700 font-medium flex items-center text-sm xl:text-base">
              <BookOpen size={20} className="mr-1" /> Tutorials
            </a>
            <a href="#galeria" className="text-gray-600 hover:text-green-700 font-medium flex items-center text-sm xl:text-base">
              <Images size={20} className="mr-1" /> Gallery
            </a>
            <a href="#mapa" className="text-gray-600 hover:text-green-700 font-medium flex items-center text-sm xl:text-base">
              <MapPin size={20} className="mr-1" /> Map
            </a>
            <a href="#eventos" className="text-gray-600 hover:text-green-700 font-medium flex items-center text-sm xl:text-base">
              <Calendar size={20} className="mr-1" /> Events
            </a>
          </div>
          
          {/* Navegación Mobile - Solo iconos */}
          <div className="flex lg:hidden space-x-2 sm:space-x-3">
            <a href="#investigacion" className="text-gray-600 hover:text-green-700" title="Research">
              <Flask size={20} weight="fill" className="sm:w-6 sm:h-6" />
            </a>
            <a href="#tutoriales" className="text-gray-600 hover:text-green-700" title="Tutorials">
              <BookOpen size={20} weight="fill" className="sm:w-6 sm:h-6" />
            </a>
            <a href="#galeria" className="text-gray-600 hover:text-green-700" title="Gallery">
              <Images size={20} weight="fill" className="sm:w-6 sm:h-6" />
            </a>
            <a href="#mapa" className="text-gray-600 hover:text-green-700" title="Map">
              <MapPin size={20} weight="fill" className="sm:w-6 sm:h-6" />
            </a>
            <a href="#eventos" className="text-gray-600 hover:text-green-700" title="Events">
              <Calendar size={20} weight="fill" className="sm:w-6 sm:h-6" />
            </a>
          </div>
          
          {/* Botón de Contacto */}
          <div className="hidden lg:block">
            <a href="#footer" className="text-sm font-semibold text-green-700 hover:text-green-900">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
