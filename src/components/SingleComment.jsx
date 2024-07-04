import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {

  const deleteComment = (asin) => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyYjg4MjJiNjYwYzAwMTUzZDhkZTgiLCJpYXQiOjE3MTk4NDI5NDYsImV4cCI6MTcyMTA1MjU0Nn0.pamYs8hQErgfJMBOC7uxgG6QhQEG6gVR4AAY_1FlZdc'
      }
    })
      .then(response => {
        if (response.ok) {
          alert('The review has been deleted!');
        } else {
          throw new Error('The review has not been deleted.')
        }
      })
      .catch(error => {
        alert('Error deleting review: ' + error.message);
      });
  }
  
 return (
    <ListGroup.Item>
      <p><strong>Author:</strong> {comment.author}</p>
      <p><strong>Comment:</strong> {comment.comment}</p>
      <p><strong>Rate:</strong> {comment.rate}</p>
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment;

