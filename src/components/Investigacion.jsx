import { Flask, Student, FilePdf, Image as ImageIcon, VideoCamera } from '@phosphor-icons/react'

const documents = [
  {
    id: 1,
    type: 'Interview',
    typeColor: 'bg-red-100 text-red-800',
    date: 'Nov 2024',
    title: 'Los Plantados - Interview 1',
    description: 'Vitonga, an Indigenous physician, shares how "Aula Viva" helps students preserve ancestral knowledge, strengthen cultural identity, and heal emotional wounds through community gardening.',
    author: 'Los Plantados Research Group',
    link: 'https://youtu.be/DRFZuXo0VZo',
    linkText: 'Watch Interview',
    linkColor: 'text-red-600 hover:text-red-800',
    icon: VideoCamera,
    embedUrl: 'https://www.youtube.com/embed/DRFZuXo0VZo'
  },
  {
    id: 2,
    type: 'Interview',
    typeColor: 'bg-red-100 text-red-800',
    date: 'Nov 2024',
    title: 'Los Plantados - Interview 2',
    description: 'Video interview exploring sustainable agricultural practices and the community impact of Los Plantados initiative.',
    author: 'Los Plantados Research Group',
    link: 'https://youtu.be/Vy1kJk-EsvA',
    linkText: 'Watch Interview',
    linkColor: 'text-red-600 hover:text-red-800',
    icon: VideoCamera,
    embedUrl: 'https://www.youtube.com/embed/Vy1kJk-EsvA'
  },
  {
    id: 3,
    type: 'Interview',
    typeColor: 'bg-red-100 text-red-800',
    date: 'Nov 2024',
    title: 'Los Plantados - Interview 3',
    description: 'Video interview highlighting achievements, lessons learned, and future perspectives of Los Plantados project.',
    author: 'Los Plantados Research Group',
    link: 'https://youtu.be/qBSp2ezxYWI',
    linkText: 'Watch Interview',
    linkColor: 'text-red-600 hover:text-red-800',
    icon: VideoCamera,
    embedUrl: 'https://www.youtube.com/embed/qBSp2ezxYWI'
  },
  {
    id: 4,
    type: 'Interview',
    typeColor: 'bg-pink-100 text-pink-800',
    date: 'Nov 2024',
    title: 'Los Plantados - Written Interview',
    description: 'Detailed transcribed interview document featuring comprehensive insights, personal reflections, and technical knowledge from Los Plantados research team members. This document provides an extensive overview of challenges, solutions, and innovative approaches developed throughout the project lifecycle.',
    author: 'Los Plantados Research Group',
    link: '/documents/written_interview.pdf',
    linkText: 'Read Interview',
    linkColor: 'text-pink-600 hover:text-pink-800',
    icon: FilePdf
  },
  {
    id: 5,
    type: 'Report',
    typeColor: 'bg-green-100 text-green-800',
    date: 'Nov 2024',
    title: 'Sow the Future - Written Report',
    description: 'Comprehensive research report by Los Plantados group examining sustainable urban agriculture practices, biodiversity conservation, soil health management, and future perspectives for resilient food systems. Includes data analysis, case studies, and actionable recommendations for urban farming communities worldwide.',
    author: 'Los Plantados Research Group',
    link: '/documents/written_report_sow_the_future.pdf',
    linkText: 'Download PDF',
    linkColor: 'text-green-600 hover:text-green-800',
    icon: FilePdf
  },
  {
    id: 6,
    type: 'Infographic',
    typeColor: 'bg-orange-100 text-orange-800',
    date: 'Nov 2024',
    title: 'Los Plantados - Visual Infographic',
    description: 'Visual infographic presenting key findings and statistical data from Los Plantados research group.',
    author: 'Los Plantados Research Group',
    link: '/documents/infographic_los_plantados_page-0001.jpg',
    linkText: 'View Infographic',
    linkColor: 'text-orange-600 hover:text-orange-800',
    icon: ImageIcon,
    image: '/documents/infographic_los_plantados_page-0001.jpg'
  },
  {
    id: 7,
    type: 'Article',
    typeColor: 'bg-green-100 text-green-800',
    date: 'Oct 2024',
    title: 'Urban Gardens: What They Are and How Many in Bogotá',
    description: 'Article from Bogotá Environmental Observatory about urban garden initiatives throughout the city.',
    author: 'Ambiente Bogotá',
    link: 'https://oab.ambientebogota.gov.co/huertas-urbanas-que-son-y-cuantas-hay-en-bogota/',
    linkText: 'Read Article',
    linkColor: 'text-green-600 hover:text-green-800',
    icon: FilePdf,
    image: 'https://oab.ambientebogota.gov.co/wp-content/uploads/2022/05/huertas-urbanas-en-bogota-durante-pandemia-por-covid-1024x575.jpg'
  },
  {
    id: 8,
    type: 'Article',
    typeColor: 'bg-blue-100 text-blue-800',
    date: 'Nov 2024',
    title: 'Urban Gardens in Bogotá: Community Building',
    description: 'In-depth analysis examining urban gardens as transformative spaces for community building, strengthening social fabric, and advancing food sovereignty in Bogotá. Explores grassroots organizing, collective knowledge sharing, intergenerational learning, and the role of urban agriculture in fostering social cohesion and neighborhood resilience.',
    author: 'Colombia Informa',
    link: 'https://www.colombiainforma.info/huertas-urbanas-en-bogota-construccion-comunitaria-del-tejido-social-y-soberania-alimentaria/',
    linkText: 'Read Article',
    linkColor: 'text-blue-600 hover:text-blue-800',
    icon: FilePdf
  },
  {
    id: 9,
    type: 'News',
    typeColor: 'bg-yellow-100 text-yellow-800',
    date: 'Oct 2024',
    title: 'Gardens at UNAL: Harvesting Health',
    description: 'Featured news article from the National University of Colombia highlighting the successful community garden initiative launched on campus. Details the program\'s objectives to promote healthy eating habits, nutritional education, sustainable food production, and student wellbeing through hands-on agricultural experiences and community engagement.',
    author: 'Bienestar UNAL',
    link: 'https://bienestar.bogota.unal.edu.co/ver_noticia.php?id_noticia=137',
    linkText: 'Read News',
    linkColor: 'text-yellow-600 hover:text-yellow-800',
    icon: FilePdf
  },
  {
    id: 10,
    type: 'Statistics',
    typeColor: 'bg-purple-100 text-purple-800',
    date: 'Nov 2024',
    title: 'Population of Colombia',
    description: 'Current demographic statistics and population data for Colombia, providing essential context for food security studies, urban agriculture planning, and sustainable development initiatives. Includes growth trends, urbanization rates, and demographic distributions relevant to agricultural policy and urban farming research.',
    author: 'Worldometers',
    link: 'https://www.worldometers.info/es/poblacion-mundial/poblacion-colombia/',
    linkText: 'View Statistics',
    linkColor: 'text-purple-600 hover:text-purple-800',
    icon: FilePdf
  }
]

function Investigacion() {
  return (
    <section id="investigacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 border-b border-gray-100 pb-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center md:justify-start">
            <Flask size={32} weight="fill" className="text-green-600 mr-3" />
            Research Repository
          </h2>
          <p className="text-gray-500 mt-2">Documents, articles and findings published by our team.</p>
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
              
              {/* Video embebido para entrevistas */}
              {doc.embedUrl && (
                <div className="mb-4 rounded-lg overflow-hidden aspect-video bg-gray-100">
                  <iframe 
                    className="w-full h-full"
                    src={doc.embedUrl}
                    title={doc.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              
              {/* Imagen Preview para documentos */}
              {doc.image && !doc.embedUrl && (
                <div className="mb-4 rounded-lg overflow-hidden h-32 bg-gray-100">
                  <img 
                    src={doc.image} 
                    alt={doc.title}
                    className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition cursor-pointer"
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
                <a 
                  href={doc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  download={doc.download ? true : undefined}
                  className={`inline-flex items-center ${doc.linkColor} font-medium text-sm`}
                >
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
