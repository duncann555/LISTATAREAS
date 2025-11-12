import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaClipboardList, FaHome, FaCheckCircle, FaChartBar, FaCog } from "react-icons/fa";

function Menu() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-sm border-bottom border-secondary"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-info d-flex align-items-center">
          <FaClipboardList className="me-2" size={22} />
          Lista de Tareas
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#inicio" className="nav-link-custom">
              <FaHome className="me-2" /> Inicio
            </Nav.Link>
            <Nav.Link href="#tareas" className="nav-link-custom">
              <FaCheckCircle className="me-2" /> Mis Tareas
            </Nav.Link>
            <Nav.Link href="#estadisticas" className="nav-link-custom">
              <FaChartBar className="me-2" /> Estadísticas
            </Nav.Link>
            <Nav.Link href="#configuracion" className="nav-link-custom">
              <FaCog className="me-2" /> Configuración
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
