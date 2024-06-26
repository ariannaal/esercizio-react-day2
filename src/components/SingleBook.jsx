// Crea un componente SingleBook utilizzando una funzione. Questo componente  dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json  che hai ricevuto ieri).


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import romance from "../data/romance.json";

const SingleBook = ({book}) => { // riceve un singolo oggetto come prop
    return (
    <>
          <Card style={{ width: '18rem' }} className="h-100">
            <Card.Img variant="top" src={book.img} className="cardImage" />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Button variant="info">Add to Cart</Button>
            </Card.Body>
          </Card>
        </>
    )
}

export default SingleBook;

