import { useEffect, useRef, useState } from 'react'
import { useLoadScript } from '@react-google-maps/api'
import { MapTrifold } from '@phosphor-icons/react'

const GOOGLE_MAPS_API_KEY = 'AIzaSyDJ18ZT9TwSq1ywQSVaNuXxMgzd735GPKI'

const locations = [
  { 
    pos: { lat: 4.634500, lng: -74.084022 }, 
    title: "La Chagra del Mico Silbón", 
    type: "UNAL",
    image: "/documents/la_chagra_del_mico_silbon.jpg"
  },
  { 
    pos: { lat: 4.633939, lng: -74.084624 }, 
    title: "Huerta Humanas", 
    type: "UNAL",
    image: "/documents/huerta_humanas.jpg"
  },
  { 
    pos: { lat: 4.635876, lng: -74.087358 }, 
    title: "Huerta Agronomía", 
    type: "UNAL",
    image: "/documents/huerta_agronomia.jpg"
  },
  { 
    pos: { lat: 4.636212946851027, lng: -74.08853118008054 }, 
    title: "Aula Viva", 
    type: "UNAL",
    image: "/documents/aula_viva.jpg"
  },
  { 
    pos: { lat: 4.6362729161791405, lng: -74.08910447202604 }, 
    title: "Invernaderos", 
    type: "UNAL",
    image: "/documents/invernaderos.jpg"
  },
  { 
    pos: { lat: 4.6438, lng: -74.0661 }, 
    title: "La Jardinera", 
    type: "Bogotá",
    address: "Carrera 6 # 56-40"
  },
  { 
    pos: { lat: 4.6441, lng: -74.0634 }, 
    title: "Alison Rescatando Raíces", 
    type: "Bogotá",
    address: "Calle 60 con Carrera 9na"
  },
  { 
    pos: { lat: 4.6432, lng: -74.0668 }, 
    title: "Madre Tierra", 
    type: "Bogotá",
    address: "Cra. 4 Bis #58-60"
  }
]

function Mapa() {
  const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  })

  useEffect(() => {
    if (isLoaded && mapRef.current && !map) {
      const unal = { lat: 4.636, lng: -74.0845 }
      
      const newMap = new window.google.maps.Map(mapRef.current, {
        zoom: 16,
        center: unal,
        mapTypeId: 'roadmap',
        styles: [
          { 
            featureType: "poi", 
            elementType: "labels", 
            stylers: [{ visibility: "off" }] 
          }
        ]
      })

      setMap(newMap)

      // Crear info window
      const infoWindow = new window.google.maps.InfoWindow()

      // Agregar marcadores
      locations.forEach(loc => {
        const isUNAL = loc.type === "UNAL"
        const marker = new window.google.maps.Marker({
          position: loc.pos,
          map: newMap,
          title: loc.title,
          icon: {
            url: isUNAL 
              ? 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <text x="12" y="18" text-anchor="middle" font-size="20">🫐</text>
                </svg>
              `)
              : 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <text x="12" y="18" text-anchor="middle" font-size="20">🍅</text>
                </svg>
              `),
            scaledSize: new window.google.maps.Size(24, 24),
            anchor: new window.google.maps.Point(12, 12)
          }
        })

        marker.addListener("click", () => {
          const imageHtml = loc.image 
            ? `<img src="${loc.image}" alt="${loc.title}" class="w-full h-32 object-cover rounded mb-2" />`
            : ''
          
          const addressHtml = loc.address 
            ? `<p class="text-xs text-gray-600 mb-2">📍 ${loc.address}</p>`
            : ''
          
          const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${loc.pos.lat},${loc.pos.lng}`
          
          infoWindow.setContent(
            `<div class="p-2" style="max-width: 250px;">
              ${imageHtml}
              <strong class="block text-gray-800 mb-1">${loc.title}</strong>
              <span class="text-xs bg-gray-100 px-2 py-1 rounded inline-block mb-2">${loc.type}</span>
              ${addressHtml}
              <a 
                href="${directionsUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block text-center bg-green-600 text-white text-sm font-medium px-3 py-2 rounded hover:bg-green-700 transition mt-2"
                style="text-decoration: none;"
              >
                📍 Get Directions
              </a>
            </div>`
          )
          infoWindow.open(newMap, marker)
        })
      })
    }
  }, [isLoaded, map])

  if (loadError) {
    return (
      <section id="mapa" className="relative h-[600px] flex items-center justify-center bg-gray-200">
        <p className="text-red-600">Error al cargar el mapa. Por favor, verifica tu conexión.</p>
      </section>
    )
  }

  if (!isLoaded) {
    return (
      <section id="mapa" className="relative h-[600px] flex items-center justify-center bg-gray-200">
        <p className="text-gray-600">Cargando mapa...</p>
      </section>
    )
  }

  return (
    <section id="mapa" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center">
            <MapTrifold size={32} weight="fill" className="mr-3 text-green-600" /> 
            Garden Network
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore registered urban gardens in Bogotá. Click on the markers for more information.
          </p>
        </div>

        {/* Mapa con bordes redondeados y sombra */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <div ref={mapRef} className="w-full h-full bg-gray-200"></div>
        </div>

        {/* Leyenda */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
            <span className="text-2xl mr-2">🫐</span>
            <span className="text-sm font-medium text-gray-700">National University</span>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
            <span className="text-2xl mr-2">🍅</span>
            <span className="text-sm font-medium text-gray-700">Bogotá Gardens</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mapa
