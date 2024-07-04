// Crea un componente AllTheBooks. Questo componente dovrà leggere un file .json fornito e mostrare le cover dei libri nella pagina (puoi utilizzare una Card di react-bootstrap).

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import romance from "../data/romance.json";

const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {romance.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks

 




