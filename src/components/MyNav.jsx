// Crea un componente MyNav che renderizzerà un componente react-bootstrap per la navigation bar con i seguenti link: Home, About and Browse. Nota: non sappiamo ancora come creare una vera navigazione, quindi per il momento usa "#" come proprietà href per ognuno di essi.


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNav = () => (

<Navbar collapseOnSelect expand="lg" className="bg-dark" data-bs-theme="dark">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

);

export default MyNav;