import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaClipboardList, FaHome, FaCheckCircle, FaChartBar, FaCog } from 'react-icons/fa';

function Menu() {
  return (
    <Navbar
      expand="lg"
      className="bg-dark shadow-sm border-bottom border-secondary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-info d-flex align-items-center">
          <FaClipboardList className="me-2" size={22} />
          Lista de Tareas
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#inicio" className="text-light d-flex align-items-center">
              <FaHome className="me-2" /> Inicio
            </Nav.Link>
            <Nav.Link href="#tareas" className="text-light d-flex align-items-center">
              <FaCheckCircle className="me-2" /> Mis Tareas
            </Nav.Link>
            <Nav.Link href="#estadisticas" className="text-light d-flex align-items-center">
              <FaChartBar className="me-2" /> Estadísticas
            </Nav.Link>
            <Nav.Link href="#configuracion" className="text-light d-flex align-items-center">
              <FaCog className="me-2" /> Configuración
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
