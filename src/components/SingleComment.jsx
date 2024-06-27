import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

const SingleComment = ({ author, comment, rate }) => {
  return (
     <ListGroup.Item as="li">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{author}:</div>
        {comment}
      </div>
      <Badge bg="primary" pill>
        {rate}
      </Badge>
    </ListGroup.Item>
  );
};

export default SingleComment;
