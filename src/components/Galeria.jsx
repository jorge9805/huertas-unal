import { Camera } from '@phosphor-icons/react'

function Galeria() {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          <Camera size={32} weight="fill" className="inline text-green-600" /> Project Gallery
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Video Grande */}
          <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-lg bg-black">
            <video 
              className="w-full h-full object-cover" 
              controls
              preload="metadata"
            >
              <source src="/documents/proyect_gallery/video_2025-11-26_16-03-24.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Fotos */}
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="/documents/proyect_gallery/photo_2025-11-26_16-01-53.jpg" 
              alt="Project Photo 1"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="/documents/proyect_gallery/photo_2025-11-26_16-02-19.jpg" 
              alt="Project Photo 2"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="col-span-2 relative rounded-xl overflow-hidden group">
            <img 
              src="/documents/proyect_gallery/IMG_20251028_074337.jpg" 
              alt="Urban Garden"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="/documents/proyect_gallery/IMG_20251028_073917.jpg" 
              alt="Project Photo 4"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="/documents/proyect_gallery/IMG_20251028_074009.jpg" 
              alt="Project Photo 5"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="/documents/proyect_gallery/IMG_20251028_080858.jpg" 
              alt="Project Photo 6"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="/documents/proyect_gallery/IMG_20251028_081603.jpg" 
              alt="Project Photo 7"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="/documents/proyect_gallery/photo_2025-11-26_16-02-58.jpg" 
              alt="Project Photo 8"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="/documents/proyect_gallery/photo_2025-11-26_16-03-06.jpg" 
              alt="Project Photo 9"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Galeria
