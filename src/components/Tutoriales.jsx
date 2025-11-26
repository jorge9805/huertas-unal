import { GraduationCap, Translate, Globe, PlayCircle } from '@phosphor-icons/react'

const videosEspanol = [
  {
    id: 1,
    embedUrl: 'https://www.youtube.com/embed/l93Mg6vITbY',
    title: 'Cómo hacer una huerta urbana',
    author: 'Guía completa para principiantes'
  },
  {
    id: 2,
    embedUrl: 'https://www.youtube.com/embed/TceRR_QMD10',
    title: 'Seguridad Alimentaria y Sostenible',
    author: 'TvAgro - Juan Gonzalo Angel'
  },
  {
    id: 3,
    embedUrl: 'https://www.youtube.com/embed/9Jd104HnlGg?rel=0',
    title: 'Cómo Implementar una Huerta Casera',
    author: 'La Huerta Orgánica de Carlina - TvAgro'
  },
  {
    id: 4,
    embedUrl: 'https://www.youtube.com/embed/hLmOfHPRtfQ?rel=0',
    title: 'Germinar tomates en 5 días',
    author: 'Sembrar y plantar en casa'
  },
  {
    id: 5,
    embedUrl: 'https://www.youtube.com/embed/44M8nyi973k?rel=0',
    title: 'Sistema de Hidroponia Vertical',
    author: 'Ideal para espacios pequeños'
  },
  {
    id: 6,
    embedUrl: 'https://www.youtube.com/embed/MWuMRivcres?rel=0',
    title: 'Manejo de huerta orgánica',
    author: 'TvAgro - Juan Gonzalo Angel'
  },
  {
    id: 7,
    embedUrl: 'https://www.youtube.com/embed/sGrM8Nwg63A?rel=0',
    title: 'Germinar semillas de fresa',
    author: 'Guía rápida (Short)'
  }
]

const videosIngles = [
  {
    id: 8,
    embedUrl: 'https://www.youtube.com/embed/YnCTNF_s4vY?rel=0',
    title: 'Creating a Balcony Garden',
    author: 'For Complete Beginners'
  },
  {
    id: 9,
    embedUrl: 'https://www.youtube.com/embed/5XKv3-a_QaY?rel=0',
    title: 'How to Start a Low Budget Garden',
    author: 'Jardinería económica'
  },
  {
    id: 10,
    embedUrl: 'https://www.youtube.com/embed/uHLChW4R5vw?rel=0',
    title: 'Indoor Herb Gardens',
    author: 'Definitive Guide For Beginners'
  },
  {
    id: 11,
    embedUrl: 'https://www.youtube.com/embed/xXxqsST3mbg?rel=0',
    title: 'Growing food is like a video game',
    author: 'Fun perspective on gardening'
  },
  {
    id: 12,
    embedUrl: 'https://www.youtube.com/embed/z3y5BB8qOvA?rel=0',
    title: 'Ancient Gardening Technique',
    author: 'Productive & Low-Cost'
  }
]

function VideoCard({ video, hoverColor }) {
  // Si tiene directUrl, mostrar thumbnail con enlace
  if (video.directUrl) {
    return (
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group">
        <a 
          href={video.directUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative aspect-video block overflow-hidden"
        >
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition flex items-center justify-center">
            <PlayCircle size={64} weight="fill" className="text-white opacity-90 group-hover:opacity-100 transition" />
          </div>
        </a>
        <div className="p-4">
          <h3 className={`font-bold text-gray-900 mb-1 group-hover:${hoverColor} transition`}>
            {video.title}
          </h3>
          <p className="text-xs text-gray-500">{video.author}</p>
          <span className="text-xs text-gray-400 italic">Click para ver en YouTube</span>
        </div>
      </article>
    )
  }
  
  // Si tiene embedUrl, mostrar iframe embebido
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group">
      <div className="relative aspect-video">
        <iframe 
          className="w-full h-full" 
          src={video.embedUrl}
          title={video.title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <h3 className={`font-bold text-gray-900 mb-1 group-hover:${hoverColor} transition`}>
          {video.title}
        </h3>
        <p className="text-xs text-gray-500">{video.author}</p>
      </div>
    </article>
  )
}

function Tutoriales() {
  return (
    <section id="tutoriales" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <GraduationCap size={32} weight="fill" className="inline text-green-600" /> Virtual Classroom
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn urban agriculture techniques, composting and pest management with our selection of videos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosIngles.map((video) => (
            <VideoCard key={video.id} video={video} hoverColor="text-green-700" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tutoriales
