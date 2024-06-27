// Aggiungi un componente CommentArea alla fine di SingleBook. Quando l'utente cliccherà su un SingleBook (quindi quando la proprietà selected nel suo stato diventa true), i commenti dovranno apparire (suggerimento: short-circuit operator!).

import { Component } from 'react';
// import { ListGroup, Badge } from 'react-bootstrap'
import CommentList from './CommentList';
// import SingleComment from './SingleComment';

class CommentArea extends Component {
    state = {
        commenti: []
    };

    fetchComments = () => {
        const { bookId } = this.props;
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjJmMjdjMjM5YzAwMTUyZjRiMzgiLCJpYXQiOjE3MTk0OTUzOTAsImV4cCI6MTcyMDcwNDk5MH0.xzzd2cZLLfCtZy4fwZMvEztRwbPDq6O8zdJ5MWbn70g"
            }
        })
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("Errore nella chiamata");
            }
        })
        .then(arrayCommenti => {
            console.log(arrayCommenti);
            this.setState({ commenti: arrayCommenti });
        })
        .catch(err => console.error("Errore!", err));
    };

    componentDidMount() {
        this.fetchComments();
    }

    render() {
        return (
            <>
                <div>
                    <h4>Recensioni</h4>
                  <CommentList arrayCommenti={this.state.commenti} />
                </div>
            </>
        );
    }
}


  

export default CommentArea;


// https://striveschool-api.herokuapp.com/api/comments/
// :https://striveschool-api.herokuapp.com/api/comments/:elementId