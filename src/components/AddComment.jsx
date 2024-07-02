import { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class AddComment extends Component {
  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props.asin,
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      });
    }
  }

  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(this.state.comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyYjg4MjJiNjYwYzAwMTUzZDhkZTgiLCJpYXQiOjE3MTk4NDI5NDYsImV4cCI6MTcyMTA1MjU0Nn0.pamYs8hQErgfJMBOC7uxgG6QhQEG6gVR4AAY_1FlZdc',
          },
        }
      );
      if (response.ok) {
        alert('Review has been sent!');
        this.setState({
          comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin,
          },
        });
      } else {
        const errorData = await response.json();
        console.error('Errore nella risposta:', errorData);
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Errore di rete:', error);
      alert(error);
    }
  };

  render() {
    return (
      <div className="my-3">
        <Form onSubmit={this.sendComment}>
          <Form.Group className="mb-2">
            <Form.Label>Review</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write something"
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
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
  }
}

export default AddComment;

