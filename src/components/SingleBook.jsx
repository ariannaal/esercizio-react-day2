// Crea un componente SingleBook utilizzando una funzione. Questo componente  dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json  che hai ricevuto ieri).

import React from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book, changeSelectedBook }) => {
  return (
    <Card onClick={() => changeSelectedBook(book.asin)} style={{ cursor: 'pointer' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;

