import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

const SingleComment = ({author, comment, rate, id}) => {
  return (
     <ListGroup.Item as="li" className="align-items-start" key={id}>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{author}</div>
        {comment}
      </div>
      <Badge bg="primary" pill>
        {rate}
      </Badge>
    </ListGroup.Item>
  );
};

export default SingleComment;

// <ListGroup as="ol" numbered>
    //     {stateRatings.map((rating) => (
    //       <ListGroup.Item
    //         key={rating._id}
    //         as="li"
    //         className=" align-items-start"
    //       >
    //         <div className="ms-2 me-auto">
    //           <div className="fw-bold">{rating.author}</div>
    //           {rating.comment}
    //         </div>
    //         <Badge bg="primary" pill>
    //           {rating.rate}
    //         </Badge>
    //       </ListGroup.Item>
    //     ))}
    //   </ListGroup>