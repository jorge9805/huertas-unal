import { Calendar, InstagramLogo } from '@phosphor-icons/react'

function Eventos() {
  return (
    <section id="eventos" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 border-b border-gray-100 pb-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center md:justify-start">
            <Calendar size={32} weight="fill" className="text-green-600 mr-3" />
            Events
          </h2>
          <p className="text-gray-500 mt-2">Stay updated with our community events and activities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feria Agroalimentaria */}
          <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-4">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-xl mr-4">
                <InstagramLogo size={32} weight="fill" className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Agri-Food Fair UNAL
                </h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
                    Community Event
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                    📅 December 3
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join us on December 3rd for the Agri-Food Fair at the National University of Colombia. Discover fresh local produce, sustainable farming practices, and connect with the community of urban farmers and food producers. Follow our Instagram for updates and details.
            </p>

            <a 
              href="https://www.instagram.com/feriaagroalimentaria_unal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition shadow-md"
            >
              <InstagramLogo size={24} weight="fill" className="mr-2" />
              Follow on Instagram
            </a>
          </article>

          {/* Placeholder para futuros eventos */}
          <article className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl border-2 border-dashed border-green-300 flex flex-col items-center justify-center text-center">
            <Calendar size={64} weight="duotone" className="text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              More Events Coming Soon
            </h3>
            <p className="text-gray-600">
              Stay tuned for upcoming workshops, seed exchanges, and community gatherings.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Eventos
