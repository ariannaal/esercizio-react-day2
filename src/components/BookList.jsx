// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.

 //Inserisci all'interno del componente BookList un campo di ricerca, prima della griglia di libri; se riempito, dovranno venire mostrati solamente i libri il cui titolo contiene il valore cercato (suggerimento: salva la stringa di ricerca dentro allo stato del componente BookList e filtra i libri di conseguenza).

import React from 'react';
import SingleBook from './SingleBook';
import {  Row, Col, Form } from 'react-bootstrap';
import { Component } from 'react';
// import CommentArea from './CommentArea';


class BookList extends Component {
  state = {
    searchBook: '',
  }

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6} lg={3} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Looking for something?"
                value={this.state.searchBook}
                onChange={(e) => this.setState({searchBook: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books
            .filter((libro) => // filtro l'array books
              libro.title.toLowerCase().includes(this.state.searchBook)
            )
            .map((libro) => ( // itero su ogni elemento filtrato generando un col per ciascun libro
              <Col xs={12} md={4} key={libro.asin} className='d-flex justify-content-center cardBook'>
                <SingleBook book={libro} />
                {/* <CommentArea/> */}
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default BookList;
