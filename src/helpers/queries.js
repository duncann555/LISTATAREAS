const tareasBackend = import.meta.env.VITE_API_TAREAS;

console.log(tareasBackend);

export const listarTareas = async () => {
  try {
    const respuesta = await fetch(tareasBackend);
    return await respuesta.json();
  } catch (error) {
    console.error("Error al listar tareas:", error);
    return [];
  }
};

export const agregarTarea = async (tarea) => {
  try {
    const respuesta = await fetch(tareasBackend, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarea),
    });
    return await respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const eliminarTarea = async (id) => {
  try {
    const respuesta = await fetch(`${tareasBackend}${id}`, {
      method: "DELETE",
    });

    const contentType = respuesta.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await respuesta.json();
    } else {
      return {
        mensaje: "Respuesta no JSON del servidor",
        status: respuesta.status,
      };
    }
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    return null;
  }
};

export const editarTarea = async (id, tareaActualizada) => {
  try {
    const respuesta = await fetch(`${tareasBackend}${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tareaActualizada),
    });

    if (!respuesta.ok) {
      console.error("Error en la respuesta del servidor:", respuesta.status);
      return null;
    }

    const contentType = respuesta.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await respuesta.json();
    } else {
      return { mensaje: "La tarea fue editado correctamente" };
    }
  } catch (error) {
    console.error("Error al editar tarea:", error);
    return null;
  }
};



