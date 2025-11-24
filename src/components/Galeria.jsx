import { Camera } from '@phosphor-icons/react'

function Galeria() {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          <Camera size={32} weight="fill" className="inline text-green-600" /> Galería de Proyectos
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Video Grande */}
          <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-lg">
            <iframe 
              className="w-full h-full absolute inset-0" 
              src="https://www.youtube.com/embed/s-Yy6a9ok6I?rel=0" 
              title="Video Principal" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              referrerPolicy="no-referrer" 
              allowFullScreen
            />
          </div>

          {/* Fotos Varias */}
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/gal1/400/400" 
              alt="Proyecto 1"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/gal2/400/400" 
              alt="Proyecto 2"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="col-span-2 relative rounded-xl overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/gal3/800/400" 
              alt="Encuentro de Semillas"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
              <p className="text-white text-sm font-medium">Encuentro de Semillas 2024</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/gal4/400/400" 
              alt="Proyecto 4"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/gal5/400/400" 
              alt="Proyecto 5"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Galeria
