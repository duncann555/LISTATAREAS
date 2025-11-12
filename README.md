1. 🎨 Lista de Tareas - Frontend

2. Frontend del proyecto **Lista de Tareas**, desarrollado con **React + Vite**, y desplegado en **Netlify**.  
   Este cliente se comunica con el backend alojado en **Vercel**, que gestiona la lógica del servidor y el almacenamiento de datos en **MongoDB Atlas**.

3. 🚀 Tecnologías principales
   - React.js – Librería para construir interfaces dinámicas.
   - Vite – Entorno de desarrollo rápido para React.
   - Bootstrap / React-Bootstrap – Estilos y componentes preconstruidos.
   - SweetAlert2 – Alertas visuales personalizadas.
   - React Hook Form – Manejo eficiente de formularios.
   - Fetch API – Comunicación con la API REST del backend.
   - Netlify – Plataforma de despliegue del frontend.

4. 📁 Estructura del proyecto
   src/
   ├── components/
   │   ├── FormularioTarea.jsx       # Form principal para crear tareas
   │   ├── ListaTarea.jsx            # Renderiza la lista de tareas
   │   └── ItemTarea.jsx             # Representa una tarea individual
   ├── helpers/
   │   └── queries.js                # Funciones para peticiones al backend
   ├── App.jsx                       # Componente raíz
   ├── main.jsx                      # Punto de entrada principal
   ├── index.css                     # Estilos globales
   vite.config.js                    # Configuración de Vite
   package.json                      # Dependencias y scripts del proyecto

5. ⚙️ Instalación y uso local
   1. Clonar el repositorio:
      git clone https://github.com/duncann555/LISTATAREAS
      cd LISTATAREAS

   2. Instalar dependencias:
      npm install

   3. Crear un archivo `.env` con la URL de tu backend:
      VITE_BACKEND_URL=https://12-backend-lista-tareas-27-10.vercel.app

   4. Ejecutar el servidor de desarrollo:
      npm run dev

   5. Abrir en el navegador:
      http://localhost:5173

6. 🌐 Despliegue
   Frontend online (Netlify):  
   https://zesty-rolypoly-92f5db.netlify.app

   Backend online (Vercel):  
   https://12-backend-lista-tareas-27-10.vercel.app


7. 🧩 Funcionalidades principales
   - Crear nuevas tareas.  
   - Listar todas las tareas almacenadas en MongoDB.  
   - Editar tareas existentes.  
   - Eliminar tareas.  
   - Mostrar alertas visuales con SweetAlert2.  
   - Validar formularios con React Hook Form.  
   - Comunicación en tiempo real con el backend desplegado.

8. 🧰 Variables de entorno
   Archivo `.env` en la raíz del proyecto:
      VITE_BACKEND_URL=https://12-backend-lista-tareas-27-10.vercel.app

   En Netlify también debe configurarse esta variable:  
   Site Settings → Environment Variables → `VITE_BACKEND_URL`

9. 🧠 Autor
    Sebastián Flomenbaum  
    Estudiante de Ciberseguridad y Desarrollo Web Full Stack  
    GitHub: https://github.com/duncann555

11. ⭐ Recomendaciones
    - Mantener la URL del backend en variables de entorno (.env).  
    - Mantener coherencia entre los repositorios frontend y backend.
