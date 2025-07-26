# 🚀 Landing Page - Prueba Técnica Frontend - Grupo Delsud

## Desarrollador por Enzo Facundo Dillmann

## 📋 Descripción

Este proyecto es una landing page desarrollada como prueba técnica para el puesto de Desarrollador Frontend. La aplicación está construida con Next.js 15, TypeScript y CSS Modules, siguiendo las mejores prácticas que conozco, para que pueda demostrar mis habilidades y experiencia en el desarrollo de aplicaciones web. Mi principal objetivo es que sea un código limpio, mantenible y entendible para cualquier persona que lo pueda leer.

## 🛠️ Tecnologías Utilizadas

-   **Next.js 15** - Framework de React para aplicaciones web
-   **TypeScript** - Para tipado estático
-   **CSS Modules** - Para estilos modulares y sin colisiones
-   **React 19** - Biblioteca principal de UI
-   **ESLint** - Para análisis estático de código

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Directorio principal de la aplicación (App Router)
├── landing/                # Código específico de la landing page
│   ├── components/         # Componentes reutilizables
│   │   ├── sections/       # Secciones de la página
│   │   │   ├── About/      # Componentes para la sección "Acerca de" que sería el primer texto que se muestra en el contenido principal de la landing
│   │   │   ├── Banner/     # Componentes para añadir un banner al footer
│   │   │   ├── Contact/    # Componentes para añadir información de contacto en el footer
│   │   │   ├── Hero/       # Componentes Hero utilizado en el header
│   │   │   ├── Navbar/     # Componentes de la barra de navegación
│   │   │   ├── Questions/  # Componentes para la sección de preguntas frecuentes
│   │   │   ├── Sponsors/   # Componentes para la sección de patrocinadores
│   │   │   └── Testimonial/# Componentes para la sección de testimonios
│   │   └── ui/             # Componentes de UI reutilizables
│   ├── hooks/              # Custom hooks
│   ├── types/              # Definiciones de tipos e interfaces de TypeScript
│   └── utils/              # Variables de utilidad
```

## 🚀 Cómo Iniciar el Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

### Requisitos Previos

-   Node.js (versión 18 o superior)
-   npm o tu gestor de paquetes preferido
-   Git (para clonar el repositorio)

### Instalación

1. **Clonar el repositorio**

    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd delsud-landing
    ```

2. **Instalar dependencias**

    ```bash
    npm install
    ```

3. **Iniciar el servidor de desarrollo**

    ```bash
    npm run dev
    ```

4. **Abrir en el navegador**
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🏗️ Scripts Disponibles

-   `npm run dev` - Inicia el servidor de desarrollo
-   `npm run build` - Construye la aplicación para producción
-   `npm start` - Inicia el servidor de producción (después de construir)
-   `npm run lint` - Ejecuta el linter

## 🎨 Estructura de Componentes

La aplicación está organizada en componentes modulares y reutilizables. Cada sección principal tiene su propia carpeta con sus estilos y lógica correspondientes.

### Componentes Principales

-   **Navbar**: Barra de navegación superior
-   **Hero**: Sección principal con llamada a la acción
-   **About**: Información sobre la empresa/servicio
-   **Testimonials**: Testimonios de clientes con carrusel interactivo
-   **Questions**: Preguntas frecuentes con acordeones
-   **Contact**: Formulario de contacto
-   **Sponsors**: Muestra de marcas asociadas

## 💡 Características

-   **Diseño Responsive**: Se adapta a diferentes tamaños de pantalla
-   **Tipado Estático**: Con TypeScript para mejor mantenibilidad
-   **Módulos CSS**: Para estilos encapsulados
-   **Optimización de Imágenes**: Con el componente Image de Next.js
-   **Rutas Dinámicas**: Usando el App Router de Next.js 13+

## 📝 Notas de Desarrollo

-   Se utilizaron hooks personalizados para la lógica reutilizable en los carrousel y sliders
-   Los estilos están organizados y abstraídos para mantener la consistencia y la facilidad de mantenimiento
-   La estructura del proyecto sigue las convenciones de Next.js
-   Se implementaron animaciones suaves para mejorar la experiencia de usuario
