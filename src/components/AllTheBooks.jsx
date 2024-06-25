// Crea un componente AllTheBooks. Questo componente dovrà leggere un file .json fornito e mostrare le cover dei libri nella pagina (puoi utilizzare una Card di react-bootstrap).

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import romance from "../data/romance.json";

const AllTheBooks = () => (
   <>
    <Row sm={1} md={2} lg={3} xl={4} className="g-4 " >
      {romance.map((book, idx) => (
        <Col key={idx} >
          <Card style={{ width: '18rem' }} className="h-100">
            <Card.Img variant="top" src={book.img} className="cardImage" />
            <Card.Body >
              <Card.Title>{book.title}</Card.Title>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </>
);
 





export default AllTheBooks;