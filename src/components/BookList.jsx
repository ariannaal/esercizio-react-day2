// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.

 //Inserisci all'interno del componente BookList un campo di ricerca, prima della griglia di libri; se riempito, dovranno venire mostrati solamente i libri il cui titolo contiene il valore cercato (suggerimento: salva la stringa di ricerca dentro allo stato del componente BookList e filtra i libri di conseguenza).

import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedBook: null,
  };

  changeSelectedBook = (asin) => {
    this.setState({
      selectedBook: asin,
    });
  };

  render() {
    return (
      <>
        <Row>
           <Form.Group>
                  <Form.Control
                    type="search"
                    placeholder="Cerca un libro"
                    value={this.state.searchQuery}
                    onChange={(e) =>
                      this.setState({ searchQuery: e.target.value })
                    }
                  />
                </Form.Group>
          <Col xs={4} >
            <Row className="g-2 mt-3" >
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={6} style={{ cursor: 'pointer', width: '200px' }}  key={b.asin} className="book-card">
                    <SingleBook
                      
                      role="article"
                      book={b}
                      selectedBook={this.state.selectedBook}
                      changeSelectedBook={this.changeSelectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={8}>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;