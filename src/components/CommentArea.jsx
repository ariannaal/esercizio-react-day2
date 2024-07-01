// Aggiungi un componente CommentArea alla fine di SingleBook. Quando l'utente cliccherà su un SingleBook (quindi quando la proprietà selected nel suo stato diventa true), i commenti dovranno apparire (suggerimento: short-circuit operator!).

import React, { Component } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin && this.props.asin) {
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyYjg4MjJiNjYwYzAwMTUzZDhkZTgiLCJpYXQiOjE3MTk4NDI5NDYsImV4cCI6MTcyMTA1MjU0Nn0.pamYs8hQErgfJMBOC7uxgG6QhQEG6gVR4AAY_1FlZdc',
            },
          }
        );
        if (response.ok) {
          let comments = await response.json();
          this.setState({ comments: comments });
        } else {
          console.error('Errore nel recupero dei commenti');
        }
      } catch (error) {
        console.error('Errore di fetch:', error);
      }
    }
  };

  render() {
    return (
      <div className="text-center">
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;




// https://striveschool-api.herokuapp.com/api/comments/
// :https://striveschool-api.herokuapp.com/api/comments/:elementId