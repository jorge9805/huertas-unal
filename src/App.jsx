import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Investigacion from './components/Investigacion'
import Tutoriales from './components/Tutoriales'
import Galeria from './components/Galeria'
import Mapa from './components/Mapa'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Investigacion />
      <Tutoriales />
      <Galeria />
      <Mapa />
      <Footer />
    </div>
  )
}

export default App
