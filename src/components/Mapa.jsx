import { useEffect, useRef, useState } from 'react'
import { useLoadScript } from '@react-google-maps/api'
import { MapTrifold } from '@phosphor-icons/react'

const GOOGLE_MAPS_API_KEY = 'AIzaSyDJ18ZT9TwSq1ywQSVaNuXxMgzd735GPKI'

const locations = [
  { 
    pos: { lat: 4.638, lng: -74.085 }, 
    title: "Huerta UNAL (CyT)", 
    type: "Académica" 
  },
  { 
    pos: { lat: 4.598, lng: -74.076 }, 
    title: "Huerta La Candelaria", 
    type: "Comunitaria" 
  },
  { 
    pos: { lat: 4.698, lng: -74.032 }, 
    title: "Huerta Usaquén", 
    type: "Privada" 
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
      const bogota = { lat: 4.60971, lng: -74.08175 }
      
      const newMap = new window.google.maps.Map(mapRef.current, {
        zoom: 12,
        center: bogota,
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
        const marker = new window.google.maps.Marker({
          position: loc.pos,
          map: newMap,
          title: loc.title,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 7,
            fillColor: "#16a34a",
            fillOpacity: 1,
            strokeColor: "white",
            strokeWeight: 2
          }
        })

        marker.addListener("click", () => {
          infoWindow.setContent(
            `<div class="p-2">
              <strong class="block text-gray-800">${loc.title}</strong>
              <span class="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">${loc.type}</span>
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
    <section id="mapa" className="relative h-[600px]">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <MapTrifold size={24} weight="fill" className="mr-2 text-green-600" /> Red de Huertas
        </h2>
      </div>
      <div ref={mapRef} className="w-full h-full bg-gray-200"></div>
    </section>
  )
}

export default Mapa
