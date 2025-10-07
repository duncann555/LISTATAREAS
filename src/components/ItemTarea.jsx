import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}{" "}
      <Button variant="secondary" onClick={() => borrarTarea(tarea)}>
        ❌
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
