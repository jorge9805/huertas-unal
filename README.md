# Huertas Urbanas UNAL - React Project

Proyecto web para la divulgación científica, documentación de procesos y educación sobre agricultura urbana en Bogotá.

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📦 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS
- **Google Maps API** - Integración de mapas
- **Phosphor Icons** - Librería de iconos
- **@react-google-maps/api** - Componentes de React para Google Maps

## 🗂️ Estructura del Proyecto

```
huertasUnal/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Investigacion.jsx
│   │   ├── Tutoriales.jsx
│   │   ├── Galeria.jsx
│   │   ├── Mapa.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🔑 Configuración de Google Maps API

El proyecto utiliza la API de Google Maps. La clave API está configurada en `src/components/Mapa.jsx`:

```javascript
const GOOGLE_MAPS_API_KEY = 'AIzaSyDJ18ZT9TwSq1ywQSVaNuXxMgzd735GPKI'
```

## 📱 Características

- **Navegación suave** entre secciones
- **Diseño responsive** adaptado a móviles, tablets y desktop
- **Repositorio de investigación** con documentos y artículos
- **Tutoriales en video** en español e inglés
- **Galería de proyectos** con imágenes y videos
- **Mapa interactivo** con ubicación de huertas urbanas
- **Integración de YouTube** para contenido educativo

## 🎨 Personalización

### Colores principales
- Verde principal: `#15803d` (green-700)
- Verde oscuro: `#14532d` (green-900)
- Verde claro: `#16a34a` (green-600)

### Fuente
- Inter (Google Fonts)

## 📄 Licencia

Proyecto Académico-Comunitario - Huertas Urbanas UNAL © 2025
