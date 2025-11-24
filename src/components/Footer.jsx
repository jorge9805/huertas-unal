import { Plant, InstagramLogo, FacebookLogo, YoutubeLogo } from '@phosphor-icons/react'

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a href="#" className="text-2xl font-bold text-white flex items-center justify-center md:justify-start space-x-2">
            <Plant size={32} weight="fill" className="text-green-500" />
            <span>Huertas UNAL</span>
          </a>
          <p className="text-sm mt-2 max-w-xs">
            Fomentando la soberanía alimentaria y la investigación en entornos urbanos.
          </p>
          <div className="mt-4 text-sm">
            <p>
              Contacto: <a href="mailto:info@huertasunal.edu.co" className="text-green-500 hover:text-green-400">
                info@huertasunal.edu.co
              </a>
            </p>
          </div>
        </div>
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#investigacion" className="hover:text-white transition">Investigación</a>
          <a href="#tutoriales" className="hover:text-white transition">Tutoriales</a>
          <a href="#galeria" className="hover:text-white transition">Galería</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-700 hover:text-white transition">
            <InstagramLogo size={24} />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 hover:text-white transition">
            <FacebookLogo size={24} />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-700 hover:text-white transition">
            <YoutubeLogo size={24} />
          </a>
        </div>
      </div>
      <div className="text-center mt-12 text-xs text-gray-600">
        &copy; 2025 Huertas Urbanas UNAL. Proyecto Académico-Comunitario.
      </div>
    </footer>
  )
}

export default Footer
