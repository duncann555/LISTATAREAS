import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { MdAddTask } from "react-icons/md";
import {
  agregarTarea,
  listarTareas,
  eliminarTarea,
  editarTarea,
} from "../helpers/queries";


const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const cargarTareas = async () => {
      try {
        const datos = await listarTareas();
        if (Array.isArray(datos)) {
          setTareas(datos); // guardamos los objetos completos
        }
      } catch (error) {
        console.error("Error al cargar las tareas:", error);
      }
    };
    cargarTareas();
  }, []);

  const posteriorValidacion = async (data) => {
    try {
      const nuevaTarea = { tareas: data.tarea };
      const respuesta = await agregarTarea(nuevaTarea);

      if (respuesta.status === 201) {
        const datos = await respuesta.json();
        console.log("respuesta del backend: ", datos);

        Swal.fire({
          title: "Tarea Creada",
          text: `La tarea ${data.tarea} se creo correctamente`,
          icon: "success",
        });
        setTareas((prevTareas) => [...prevTareas, datos.tarea]);
        reset();
      } else {
        alert("Error al crear la tarea en el backend, intentelo nuevamente");
      }
    } catch (error) {
      console.error("Error en posteriorValidacion:", error);
    }
  };

  const borrarTarea = async (tareaSeleccionada) => {
    try {
      // 🔹 Primero mostramos la confirmación
      const confirmacion = await Swal.fire({
        title: "¿Eliminar esta tarea?",
        text: `Se borrará "${tareaSeleccionada.tareas}" de forma permanente.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33", // rojo
        cancelButtonColor: "#3085d6", // azul
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      // 🔹 Si el usuario cancela, salimos de la función
      if (!confirmacion.isConfirmed) return;

      // 🔹 Si confirma, mandamos el DELETE al backend
      const respuesta = await eliminarTarea(tareaSeleccionada._id);

      if (
        respuesta &&
        respuesta.mensaje === "La tarea fue eliminada correctamente"
      ) {
        setTareas((prevTareas) =>
          prevTareas.filter((t) => t._id !== tareaSeleccionada._id)
        );

        // 🔹 Mostramos aviso rojo de eliminación exitosa
        Swal.fire({
          title: "Tarea eliminada",
          text: `La tarea "${tareaSeleccionada.tareas}" fue borrada correctamente.`,
          icon: "error",
          confirmButtonColor: "#d33",
          timer: 1800,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo eliminar la tarea del backend.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Error al borrar tarea:", error);
      Swal.fire({
        title: "Error inesperado",
        text: "Ocurrió un error al intentar borrar la tarea.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };


  const editarTareaFront = async (tareaEditada) => {
  try {
    const respuesta = await editarTarea(tareaEditada._id, tareaEditada);
    console.log("🔍 Respuesta del backend:", respuesta);

    if (respuesta && respuesta.mensaje.toLowerCase().includes("editado correctamente")) {
      setTareas((prevTareas) =>
        prevTareas.map((t) =>
          t._id === tareaEditada._id ? { ...t, tareas: tareaEditada.tareas } : t
        )
      );

      // ✅ devolvemos la respuesta al hijo
      return respuesta;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al editar tarea:", error);
    return null;
  }
};


  return (
    <section>
      <Form onSubmit={handleSubmit(posteriorValidacion)}>
        <Form.Group className="mb-3 d-flex justify-content-between">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 2,
                message: "La tarea debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "La tarea debe tener como máximo 50 caracteres",
              },
            })}
          />
          <Button
            variant="primary"
            type="submit"
            className="btn-add ms-2 d-flex align-items-center justify-content-center"
            title="Agregar tarea"
            aria-label="Agregar tarea"
          >
            <MdAddTask size={23} />
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>

      <ListaTarea
        tareas={tareas}
        borrarTarea={borrarTarea}
        editarTarea={editarTareaFront}
      />
    </section>
  );
};

export default FormularioTarea;
