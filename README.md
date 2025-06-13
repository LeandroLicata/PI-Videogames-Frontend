# 🎮 Gamepedia - Frontend

Este es el **frontend** de Gamepedia, una aplicación web que permite explorar y gestionar información sobre videojuegos. Consume datos del backend propio y de la API externa de [RAWG](https://rawg.io/apidocs).

## 🚀 Tecnologías utilizadas

- **React** – Librería principal para construir la interfaz de usuario.
- **Redux Toolkit** – Manejo global del estado de la app.
- **Axios** – Cliente HTTP para comunicarse con el backend.
- **Bootstrap** – Framework CSS para estilos y diseño responsive.

## 💻 Funcionalidades

- Buscar videojuegos por nombre.
- Filtrar y ordenar videojuegos por género, rating y origen (API o DB).
- Ver detalles completos de cada videojuego.
- Crear nuevos videojuegos desde un formulario.
- Eliminar videojuegos creados por el usuario.

## 📦 Instalación y uso

1. **Cloná el repositorio**  
   ```bash
   git clone https://github.com/LeandroLicata/PI-Videogames-Frontend
   cd PI-Videogames-Frontend
   ```

2. **Instalá las dependencias**  
   ```bash
   npm install
   ```

3. **Configurá el entorno**  
   Crea un archivo `.env` en la raíz del proyecto y agregá tu URL de backend:

   ```env
   REACT_APP_BACKEND_URL=https://gamepedia-back.onrender.com
   # REACT_APP_BACKEND_URL=http://localhost:3001/
   ```

   > Cambiá el comentario según quieras apuntar al **backend desplegado** (Render) o a tu **backend local**.  
   > Después de modificar el archivo `.env`, reiniciá el servidor de desarrollo.

4. **Iniciá la aplicación**  
   ```bash
   npm start
   ```

   Por defecto se ejecutará en: [http://localhost:3000](http://localhost:3000) (puerto por defecto de CRA).

## 🧠 Estructura del proyecto

```
📦src
 ┣ 📂app         → Configuración global de la app (store, etc.)
 ┣ 📂components  → Componentes reutilizables (Navbar, Card, Loader, etc.)
 ┣ 📂features    → Funcionalidades específicas conectadas a Redux Toolkit
 ┣ 📂hooks       → Custom hooks reutilizables
 ┣ 📂views       → Vistas principales de la aplicación (Home, Detail, Form, etc.)
 ┣ 📄index.js    → Punto de entrada de React
```

## 📌 Notas

- Este frontend funciona junto a un backend desarrollado en Node.js, Express y MongoDB. Podés ver su código fuente en:
🔗 https://github.com/LeandroLicata/PI-Videogames-Backend
- El backend está desplegado en Render:
🌐 https://gamepedia-back.onrender.com
- El frontend está desplegado en Vercel y accesible públicamente en:
🎮 https://gamepedia-gaming.vercel.app/
- El diseño es responsive gracias a Bootstrap y pensado para desktop y móviles.