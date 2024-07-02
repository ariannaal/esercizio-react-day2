import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddComment = ({asin}) => {
  // state = {
  //   comment: {
  //     comment: '',
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // };

  const [comment, setComment] = useState({
      comment: '',
      rate: 1,
      elementId: asin,
  })

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       comment: {
  //         ...this.state.comment,
  //         elementId: this.props.asin,
  //       },
  //     });
  //   }
  // }

  useEffect(() => {
    setComment(() => ({ 
      elementId: asin, // dovrascrivo cosi la proprietà elementId con il nuovo valore asin
    }));
  }, [asin]); // viene eseguito ogni volta che asin cambia
  

  const sendComment = (e) => {
    e.preventDefault();
    
    fetch('https://striveschool-api.herokuapp.com/api/comments', {
    method: 'POST',
    body: JSON.stringify({
      comment: comment.comment,
      rate: comment.rate,
      elementId: asin,
    }),
    
    headers: {
      'Content-type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyYjg4MjJiNjYwYzAwMTUzZDhkZTgiLCJpYXQiOjE3MTk4NDI5NDYsImV4cCI6MTcyMTA1MjU0Nn0.pamYs8hQErgfJMBOC7uxgG6QhQEG6gVR4AAY_1FlZdc',
    },
    })
    
    .then((response) => {
      if (response.ok) {
        alert('Review has been sent!');
        setComment({
          comment: '',
          rate: 1,
          elementId: asin,
        });
      } else {
        return response.json().then((errorData) => {
          console.error('Errore nella risposta:', errorData);
          throw new Error('Something went wrong');
        });
      }
    })
    .catch((error) => {
      console.error('Errore di rete:', error);
      alert(error.message);
    });
};
return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write something"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;

