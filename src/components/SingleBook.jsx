// Crea un componente SingleBook utilizzando una funzione. Questo componente  dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json  che hai ricevuto ieri).


import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';
// import romance from "../data/romance.json";


class SingleBook extends Component {

  state = {
    isSelected: false,
  }

  handleClick = () => {
  console.log("handleClick chiamato");
  this.setState({ isSelected: !this.state.isSelected }, () => {
    console.log("Nuovo stato di isSelected:", this.state.isSelected);
  });
};

  render() {
    const { book } = this.props;
    const { isSelected } = this.state;

    return (
      <>
        <Card style={{ width: '18rem' }} className="h-100" onClick={this.handleClick}>
          <Card.Img variant="top" src={book.img} className="cardImage" />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Button variant="info">Add to Cart</Button>
          </Card.Body>
          
        </Card>
        {isSelected && <CommentArea bookId={book.asin} />} 
      </>
    );
  }
}

export default SingleBook;
