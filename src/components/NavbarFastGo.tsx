import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logonombre.png'; // Asegúrate de tener esta imagen

const NavbarFastGo: React.FC = () => {
  return (
    <Navbar expand="lg" bg="light" className="mi-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" width="110" height="35" loading="lazy" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown" className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contáctanos</Nav.Link>
            <Nav.Link as={Link} to="/about">Quiénes Somos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarFastGo;