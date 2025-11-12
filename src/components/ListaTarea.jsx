import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({ tareas, borrarTarea, editarTarea }) => {
  return (
    <ListGroup className="mt-5">
      {tareas.map((tarea) => (
        <ItemTarea
          key={tarea._id}
          tarea={tarea}
          borrarTarea={borrarTarea}
          editarTarea={editarTarea}
        />
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
