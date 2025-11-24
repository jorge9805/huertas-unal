# 📋 Instrucciones para Ejecutar el Proyecto

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

1. **Node.js** (versión 18 o superior)
   - Descarga desde: https://nodejs.org/
   - Verifica la instalación: `node --version`

2. **npm** (viene incluido con Node.js)
   - Verifica la instalación: `npm --version`

## Pasos para Ejecutar

### 1. Abrir el terminal en la carpeta del proyecto

Abre una terminal (PowerShell, CMD o Git Bash) en la carpeta:
```
C:\Users\Biblio\Desktop\huertasUnal
```

### 2. Instalar las dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

Este proceso puede tardar unos minutos. Se descargarán aproximadamente 200+ paquetes.

### 3. Iniciar el servidor de desarrollo

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

### 4. Abrir en el navegador

El servidor se iniciará y verás un mensaje similar a:

```
  VITE v5.4.1  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Abre tu navegador y ve a: **http://localhost:5173/**

## 🎉 ¡Listo!

Tu proyecto estará corriendo. Cualquier cambio que hagas en los archivos se reflejará automáticamente en el navegador (Hot Module Replacement).

## Comandos Útiles

```bash
# Detener el servidor
Presiona Ctrl + C en el terminal

# Compilar para producción
npm run build

# Previsualizar el build de producción
npm run preview

# Ejecutar el linter
npm run lint
```

## Solución de Problemas

### Error: "npm: command not found"
- Instala Node.js desde https://nodejs.org/
- Reinicia tu terminal después de la instalación

### Error de permisos al instalar
- En Windows, ejecuta el terminal como Administrador
- En Mac/Linux, usa `sudo npm install`

### Puerto 5173 ocupado
- Vite automáticamente usará el siguiente puerto disponible (5174, 5175, etc.)
- O puedes especificar uno: `npm run dev -- --port 3000`

### El mapa no se muestra
- Verifica tu conexión a internet
- Asegúrate de que la API key de Google Maps esté activa

## Estructura del Proyecto

```
huertasUnal/
├── node_modules/        # Dependencias (generado después de npm install)
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   ├── App.jsx         
│   ├── main.jsx        
│   └── index.css       
├── index.html
├── package.json         # Configuración del proyecto
├── vite.config.js       # Configuración de Vite
└── tailwind.config.js   # Configuración de Tailwind
```

## 📧 Soporte

Si encuentras algún problema, revisa:
1. Que Node.js esté instalado correctamente
2. Que estés en la carpeta correcta del proyecto
3. Que hayas ejecutado `npm install` antes de `npm run dev`
