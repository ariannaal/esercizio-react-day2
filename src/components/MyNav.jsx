// Crea un componente MyNav che renderizzerà un componente react-bootstrap per la navigation bar con i seguenti link: Home, About and Browse. Nota: non sappiamo ancora come creare una vera navigazione, quindi per il momento usa "#" come proprietà href per ognuno di essi.


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const MyNav = () => (

<Navbar collapseOnSelect expand="lg" className="bg-dark" data-bs-theme="dark"  fixed="top">
      <Container>
        <Navbar.Brand href="#home">Starlight  Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <Nav.Link href="#" className='ms-3'>Home</Nav.Link>
            <Nav.Link eventKey={2} href="#" className='ms-3'>
              About
          </Nav.Link>
          <Nav.Link href="#" className='ms-3'>Browse</Nav.Link>
          <NavDropdown title="Choose genre" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Scifi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Romance
            </NavDropdown.Item>
             <NavDropdown.Item href="#action5">
                History
            </NavDropdown.Item>
             <NavDropdown.Item href="#action5">
                Fantasy
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

);

export default MyNav;