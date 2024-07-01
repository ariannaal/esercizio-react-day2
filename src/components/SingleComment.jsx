import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const SingleComment = ({ comment }) => (
  <ListGroupItem>
    <p><strong>Author:</strong> {comment.author}</p>
    <p><strong>Comment:</strong> {comment.comment}</p>
    <p><strong>Rate:</strong> {comment.rate}</p>
  </ListGroupItem>
);

export default SingleComment;
