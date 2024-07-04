// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.

 //Inserisci all'interno del componente BookList un campo di ricerca, prima della griglia di libri; se riempito, dovranno venire mostrati solamente i libri il cui titolo contiene il valore cercato (suggerimento: salva la stringa di ricerca dentro allo stato del componente BookList e filtra i libri di conseguenza).

import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

const BookList = ({books}) => {
  // state = {
  //   searchQuery: '',
  //   selectedBook: '',
  // };

  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedBook, setSelectedBook] = useState(''); 

const changeSelectedBook = (asin) => {
    setSelectedBook(asin);
  };

  
    return (
      <>
        <Row>
           <Form.Group>
                  <Form.Control
                    type="search"
                    placeholder="Cerca un libro"
                    value={searchQuery}
                    onChange={(e) => ({searchQuery: e.target.value })
                    }
                  />
                </Form.Group>
<<<<<<< HEAD
          <Col xs={4} >
            <Row className="g-2 mt-3" >
              {this.props.books
=======
          <Col xs={4}>
            <Row className="g-2 mt-3">
              {books
>>>>>>> 9120a537f7c71b2830bb1261698c293023fa61d3
                .filter((b) =>
                  b.title.toLowerCase().includes(searchQuery)
                )
                .map((b) => (
                  <Col xs={6} style={{ cursor: 'pointer', width: '200px' }}  key={b.asin} className="book-card">
                    <SingleBook
                      className="card-book"
                      role="article"
                      book={b}
                      selectedBook={selectedBook}
                      changeSelectedBook={changeSelectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={8}>
            <CommentArea asin={selectedBook} />
          </Col>
        </Row>
      </>
    );
  }


export default BookList;