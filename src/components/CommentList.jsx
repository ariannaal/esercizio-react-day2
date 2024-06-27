import React from 'react';
import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

const CommentList = ({ arrayCommenti }) => {
  return (
    <ListGroup>
      {arrayCommenti.map((rating) => (
                <SingleComment
          key={rating._id}
          author={rating.author}
          comment={rating.comment}
          rate={rating.rate}
        />
      ))}
    </ListGroup>
  );
};


export default CommentList;