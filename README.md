# PilotSocial - PilotX Frontend Challenge

Solución técnica para el desafío Frontend de PilotX. Una aplicación desarrollada con **React y TypeScript** que gestiona la lectura de publicaciones y la interacción mediante comentarios, priorizando una arquitectura escalable y una UX fluida.

## 📋 Descripción del Proyecto

La aplicación cumple con los requerimientos de visualizar un feed de noticias y permitir la interacción detallada en cada publicación. Se ha diseñado pensando en la mantenibilidad y la robustez del código.

### Funcionalidades
1.  **Feed de Publicaciones:** Vista principal con listado de posts obtenidos de la API.
2.  **Detalle de Publicación:** Vista dinámica (`/post/:id`) que muestra el contenido completo.
3.  **Sistema de Comentarios:**
    * Lectura de comentarios existentes.
    * **Creación de nuevos comentarios** con validación de formularios en tiempo real.

## 🚀 Stack Tecnológico y Decisiones Técnicas

Este stack fue seleccionado para cubrir los **Criterios de Evaluación** (UI, Librerías, Estructura, Hooks y Tipado):

* **Core:** `React 18` + `TypeScript` + `Vite` (Rendimiento y seguridad de tipos).
* **UI & Diseño:** `Material UI (MUI v5)`. Se eligió por su robustez para sistemas de diseño empresariales y rapidez de implementación.
* **Gestión de Estado Servidor:** `TanStack Query (v5)`.
    * *¿Por qué?* Maneja el **caching**, estados de carga (loading) y errores de forma nativa, superior al `useEffect` tradicional para llamadas asíncronas.
* **Routing:** `React Router DOM` para navegación SPA.
* **Formularios:** `React Hook Form` + `Zod`.
    * *¿Por qué?* Ofrece el mejor rendimiento de renderizado y una validación de esquemas estricta y declarativa.

## 🛠️ Instalación y Ejecución

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/lautarocristiani/pilot-social.git
    cd pilot-social
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo**
    ```bash
    npm run dev
    ```

## 📂 Estructura del Proyecto

La estructura sigue una organización modular:

```text
src/
├── api/           # Capa de servicio (Axios + Endpoints)
├── components/    # Componentes UI reutilizables (basados en MUI)
├── hooks/         # Custom Hooks (encapsulando lógica de React Query)
├── pages/         # Vistas principales (Home y PostDetail)
├── types/         # Interfaces TypeScript (User, Post, Comment)
└── utils/         # Validaciones y helpers

## ✅ Cumplimiento de Requerimientos

- [x] **Implementación en ReactJS** (Vite + TS).
- [x] **Componentes Funcionales** (Hooks).
- [x] **Al menos 2 páginas** (Feed y Detalle).
- [x] **Manejo de Errores:** Implementado en las peticiones de API y validaciones de formulario.
- [x] **Tipado:** TypeScript estricto en toda la aplicación.