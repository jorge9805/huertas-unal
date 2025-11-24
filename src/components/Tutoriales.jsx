import { GraduationCap, Translate, Globe } from '@phosphor-icons/react'

const videosEspanol = [
  {
    id: 1,
    embedUrl: 'https://www.youtube.com/embed/TceRR_QMD10',
    title: 'Seguridad Alimentaria y Sostenible',
    author: 'TvAgro - Juan Gonzalo Angel'
  },
  {
    id: 2,
    embedUrl: 'https://www.youtube.com/embed/9Jd104HnlGg?rel=0',
    title: 'Cómo Implementar una Huerta Casera',
    author: 'La Huerta Orgánica de Carlina - TvAgro'
  },
  {
    id: 3,
    embedUrl: 'https://www.youtube.com/embed/hLmOfHPRtfQ?rel=0',
    title: 'Germinar tomates en 5 días',
    author: 'Sembrar y plantar en casa'
  },
  {
    id: 4,
    embedUrl: 'https://www.youtube.com/embed/44M8nyi973k?rel=0',
    title: 'Sistema de Hidroponia Vertical',
    author: 'Ideal para espacios pequeños'
  },
  {
    id: 5,
    embedUrl: 'https://www.youtube.com/embed/MWuMRivcres?rel=0',
    title: 'Manejo de huerta orgánica',
    author: 'TvAgro - Juan Gonzalo Angel'
  },
  {
    id: 6,
    embedUrl: 'https://www.youtube.com/embed/sGrM8Nwg63A?rel=0',
    title: 'Germinar semillas de fresa',
    author: 'Guía rápida (Short)'
  }
]

const videosIngles = [
  {
    id: 7,
    embedUrl: 'https://www.youtube.com/embed/YnCTNF_s4vY?rel=0',
    title: 'Creating a Balcony Garden',
    author: 'For Complete Beginners'
  },
  {
    id: 8,
    embedUrl: 'https://www.youtube.com/embed/5XKv3-a_QaY?rel=0',
    title: 'How to Start a Low Budget Garden',
    author: 'Jardinería económica'
  },
  {
    id: 9,
    embedUrl: 'https://www.youtube.com/embed/uHLChW4R5vw?rel=0',
    title: 'Indoor Herb Gardens',
    author: 'Definitive Guide For Beginners'
  },
  {
    id: 10,
    embedUrl: 'https://www.youtube.com/embed/xXxqsST3mbg?rel=0',
    title: 'Growing food is like a video game',
    author: 'Fun perspective on gardening'
  },
  {
    id: 11,
    embedUrl: 'https://www.youtube.com/embed/z3y5BB8qOvA?rel=0',
    title: 'Ancient Gardening Technique',
    author: 'Productive & Low-Cost'
  }
]

function VideoCard({ video, hoverColor }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group">
      <div className="relative aspect-video">
        <iframe 
          className="w-full h-full" 
          src={video.embedUrl}
          title={video.title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          referrerPolicy="no-referrer" 
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
            <GraduationCap size={32} weight="fill" className="inline text-green-600" /> Aula Virtual
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprende técnicas de agricultura urbana, compostaje y manejo de plagas con nuestra selección de videos.
          </p>
        </div>

        {/* Subtítulo Español */}
        <div className="flex items-center mb-8">
          <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm flex items-center">
            <Translate size={20} className="mr-1" /> En Español
          </div>
          <div className="h-px bg-green-200 flex-grow ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videosEspanol.map((video) => (
            <VideoCard key={video.id} video={video} hoverColor="text-green-700" />
          ))}
        </div>

        {/* Subtítulo Inglés */}
        <div className="flex items-center mb-8">
          <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm flex items-center">
            <Globe size={20} className="mr-1" /> In English
          </div>
          <div className="h-px bg-blue-200 flex-grow ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosIngles.map((video) => (
            <VideoCard key={video.id} video={video} hoverColor="text-blue-700" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tutoriales
