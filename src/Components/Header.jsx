import './css/header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <header className='Nav-bar'>
    <Navbar expand="lg" className="bg-body-tertiary">
    <h1>Welcome to the animal Zoo!</h1>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Animal List" id="basic-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="/animals">Animals</NavDropdown.Item>
              <NavDropdown.Item href="/birds">Birds</NavDropdown.Item>
              <NavDropdown.Item href="/insects">Insects</NavDropdown.Item>
              <NavDropdown.Item href="/fishes">Fishes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}
  
  export default Header;