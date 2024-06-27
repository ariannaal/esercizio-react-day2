import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

const SingleComment = (props) => {
  return (
    <ListGroup as="ol" numbered>
         {arrayComment.map((rating) => (
          <ListGroup.Item
            key={rating._id}
            as="li"
            className=" align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{rating.author}</div>
              {rating.comment}
            </div>
            <Badge bg="primary" pill>
              {rating.rate}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
  );
};

export default SingleComment;