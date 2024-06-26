// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.

 //Inserisci all'interno del componente BookList un campo di ricerca, prima della griglia di libri; se riempito, dovranno venire mostrati solamente i libri il cui titolo contiene il valore cercato (suggerimento: salva la stringa di ricerca dentro allo stato del componente BookList e filtra i libri di conseguenza).

import React from 'react';
import SingleBook from './SingleBook';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Component } from 'react';


class FormComponent extends Component {


  state = {
    formValue: {
      bookTitle: ''
    }
    };
    
  

  render() {

      
    return (
      <div>
        <Form className='formInput mx-auto'>
          <Form.Group className="mb-3" controlId="formText">
              <Form.Control
                type="text"
                placeholder="Looking for something?"
                value={this.state.formValue.bookTitle}
                        onChange={(e) => {
                            this.setState({
                                formValue: {
                                    ...this.state.formValue, // copia dello stato
                                    bookTitle: e.target.value,
                        },
                    })
                }}
              />
            
                </Form.Group>
        </Form>
      </div>
    );
  }
}

const BookList = ({ books }) => { // riceve un array come prop

    
  return (
    <Container>
      <FormComponent /> 
      <Row sm={1} md={2} lg={3} className="g-4 my-3 justify-content-center">
        {books.map((book, idx) => (
          <Col key={idx} className='cardBook d-flex justify-content-center'>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;