# PilotSocial - PilotX Frontend Challenge

Solución técnica para el desafío Frontend de PilotX. Una aplicación desarrollada con **React y TypeScript** centrada en la lectura fluida de contenido y la interacción mediante comentarios, implementando una arquitectura escalable y patrones de UX modernos.

## 📋 Descripción del Proyecto

La aplicación permite a los usuarios navegar un feed de noticias, filtrar contenido de manera dinámica e interactuar en las discusiones. Se ha puesto especial énfasis en la **persistencia de datos del lado del cliente** para ofrecer una experiencia realista sobre una API de prueba.

### Funcionalidades Clave
1.  **Feed Inteligente:** Visualización de posts con filtros por **Autor** y **Búsqueda por texto** en tiempo real.
2.  **Sistema de Comentarios Híbrido:**
    * Consumo de comentarios existentes desde la API.
    * **Persistencia Local:** Los nuevos comentarios creados por el usuario se guardan en el navegador (`LocalStorage`) y se fusionan con los datos del servidor, evitando que desaparezcan al recargar.
3.  **Experiencia de Usuario (UX):**
    * Feedback visual inmediato (Loading Skeletons, Validaciones).
    * **Dark Mode / Light Mode** con persistencia de preferencia.
    * Diseño responsivo basado en Material Design.

## 🚀 Stack Tecnológico

Selección de herramientas basada en robustez, mantenibilidad y los criterios de evaluación:

* **Core:** `React 18` + `TypeScript` + `Vite`.
* **UI System:** `Material UI (MUI v5)` + `Framer Motion` (animaciones).
* **Estado & Datos:**
    * `TanStack Query (v5)`: Para gestión eficiente de datos del servidor (Caching, Loading, Error).
    * `Zustand` + `Persist Middleware`: Para gestión de estado local (Tema y Comentarios nuevos).
* **Routing:** `React Router DOM`.
* **Formularios:** `React Hook Form` + `Zod` (Validación de esquemas).

## 📂 Estructura del Proyecto

El proyecto utiliza una arquitectura basada en **Features** (Vertical Slicing) para mejorar la escalabilidad:

```text
src/
├── api/          # Configuración de cliente HTTP (Axios)
├── components/   # Componentes UI reutilizables (UI Kit & Layouts)
├── features/     # Módulos funcionales encapsulados
│   ├── feed/     # Lógica, componentes y hooks del Feed principal
│   └── post/     # Lógica, componentes y hooks del Detalle y Comentarios
├── pages/        # Composición de vistas (Entry points de rutas)
├── routes/       # Definición de rutas y navegación
├── theme/        # Configuración del sistema de diseño (MUI Theme)
└── utils/        # Funciones auxiliares y constantes
```

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

## ✅ Cumplimiento de Requerimientos (En Progreso)

- [ ] **Implementación en ReactJS** (Vite + TS).
- [ ] **Componentes Funcionales** (Hooks).
- [ ] **Al menos 2 páginas** (Feed y Detalle).
- [ ] **Manejo de Errores:** Implementado en las peticiones de API y validaciones de formulario.
- [ ] **Tipado:** TypeScript estricto en toda la aplicación.