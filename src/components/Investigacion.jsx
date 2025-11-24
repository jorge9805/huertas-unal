import { Flask, Student, FilePdf, Image as ImageIcon } from '@phosphor-icons/react'

const documents = [
  {
    id: 1,
    type: 'Artículo',
    typeColor: 'bg-green-100 text-green-800',
    date: 'Oct 2024',
    title: 'Análisis de suelos en Teusaquillo',
    description: 'Un estudio detallado sobre la composición química y biológica de los suelos en tres huertas comunitarias de la localidad.',
    author: 'Grupo de Investigación UNAL',
    link: '#',
    linkText: 'Descargar PDF',
    linkColor: 'text-red-600 hover:text-red-800',
    icon: FilePdf
  },
  {
    id: 2,
    type: 'Informe Técnico',
    typeColor: 'bg-blue-100 text-blue-800',
    date: 'Sep 2024',
    title: 'Sistemas de Riego Automatizado',
    description: 'Implementación de sistemas de bajo costo utilizando Arduino para huertas de balcón en climas fríos.',
    author: 'Facultad de Ingeniería',
    link: '#',
    linkText: 'Descargar PDF',
    linkColor: 'text-red-600 hover:text-red-800',
    icon: FilePdf
  },
  {
    id: 3,
    type: 'Infografía',
    typeColor: 'bg-purple-100 text-purple-800',
    date: 'Ago 2024',
    title: 'Biodiversidad de Polinizadores',
    description: 'Registro fotográfico y conteo de especies de abejas nativas encontradas en el campus universitario.',
    author: 'Biología UNAL',
    link: '#',
    linkText: 'Ver Infografía Completa',
    linkColor: 'text-purple-600 hover:text-purple-800',
    icon: ImageIcon,
    image: 'https://picsum.photos/seed/bee/400/200'
  }
]

function Investigacion() {
  return (
    <section id="investigacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 border-b border-gray-100 pb-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center md:justify-start">
            <Flask size={32} weight="fill" className="text-green-600 mr-3" />
            Repositorio de Investigación
          </h2>
          <p className="text-gray-500 mt-2">Documentos, artículos y hallazgos publicados por nuestro equipo.</p>
        </div>

        {/* Lista de Documentos (Grid) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc) => (
            <article 
              key={doc.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`${doc.typeColor} text-xs px-2 py-1 rounded-full font-semibold`}>
                  {doc.type}
                </span>
                <span className="text-xs text-gray-400">{doc.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {doc.description}
              </p>
              
              {/* Imagen Preview (solo para el documento 3) */}
              {doc.image && (
                <div className="mb-4 rounded-lg overflow-hidden h-32 bg-gray-100">
                  <img 
                    src={doc.image} 
                    alt={doc.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition cursor-pointer"
                  />
                </div>
              )}

              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-center mb-3">
                  <div className="bg-gray-200 rounded-full p-1 mr-2">
                    <Student size={20} className="text-gray-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{doc.author}</span>
                </div>
                <a href={doc.link} className={`inline-flex items-center ${doc.linkColor} font-medium text-sm`}>
                  <doc.icon size={20} className="mr-1" /> {doc.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Investigacion
