// Crea un componente SingleBook utilizzando una funzione. Questo componente  dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json  che hai ricevuto ieri).


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import romance from "../data/romance.json";

const PickRandomBook = () => {
  const randomIndex = Math.floor(Math.random() * romance.length);
  return romance[randomIndex];
};

const SingleBook = () => {
    const randomBook = PickRandomBook(); // cosi ottengo un libro casuale
    return (
    <>
       <Row className="justify-content-center">
        <Col sm={6} md={4} lg={3}>
          <Card style={{ width: '18rem' }} className="h-100">
            <Card.Img variant="top" src={randomBook.img} className="cardImage" />
            <Card.Body>
              <Card.Title>{randomBook.title}</Card.Title>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        </>
    )
}

export default SingleBook;

