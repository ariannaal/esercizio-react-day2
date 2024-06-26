// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.

import React from 'react';
import SingleBook from './SingleBook';
import { Container, Row, Col } from 'react-bootstrap';


const BookList = ({ books }) => { // riceve un array di libri come prop
  return (
    <Container>
      <Row sm={1} md={2} lg={3}  className="g-4">
        {books.map((book, idx) => (
          <Col key={idx} className='d-flex justify-content-center cardBook'>
            <SingleBook book={book} /> 
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;










