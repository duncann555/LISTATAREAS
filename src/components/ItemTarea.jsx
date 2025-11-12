import { ListGroup, Button } from "react-bootstrap";
import { MdEdit, MdDelete } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";

const ItemTarea = ({ tarea, borrarTarea, editarTarea }) => {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.tareas);

  const handleEdit = () => setModoEdicion(true);

  const handleSave = async () => {
  try {
    const tareaActualizada = { _id: tarea._id, tareas: nuevoTexto };
    const respuesta = await editarTarea(tareaActualizada); // 👈 ahora recibe la respuesta real

    if (respuesta && respuesta.mensaje.toLowerCase().includes("editado correctamente")) {
      Swal.fire({
        title: "Tarea actualizada",
        text: `La tarea "${nuevoTexto}" se modificó correctamente.`,
        icon: "success",
        confirmButtonColor: "#3085d6",
        timer: 2000,
        showConfirmButton: false,
      });

      setModoEdicion(false);
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudo editar la tarea en el backend.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  } catch (error) {
    console.error("Error al guardar tarea:", error);
    Swal.fire({
      title: "Error inesperado",
      text: "Ocurrió un error al intentar editar la tarea.",
      icon: "error",
      confirmButtonColor: "#d33",
    });
  }
};


  const handleDelete = () => borrarTarea(tarea);

  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
      {modoEdicion ? (
        <input
          type="text"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
          className="form-control"
          style={{ maxWidth: "400px" }}
        />
      ) : (
        <span className="fw-semibold">{tarea.tareas}</span>
      )}

      <div className="d-flex gap-2">
        {modoEdicion ? (
          <Button
            variant="success"
            size="sm"
            onClick={handleSave}
            title="Guardar cambios"
            aria-label="Guardar cambios"
          >
            💾
          </Button>
        ) : (
          <Button
            variant="info"
            size="sm"
            onClick={handleEdit}
            title="Editar tarea"
            aria-label="Editar tarea"
          >
            <MdEdit size={16} />
          </Button>
        )}

        <Button
          variant="danger"
          size="sm"
          onClick={handleDelete}
          title="Eliminar tarea"
          aria-label="Eliminar tarea"
        >
          <MdDelete size={16} />
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
