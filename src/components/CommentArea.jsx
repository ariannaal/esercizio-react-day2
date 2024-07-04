// Aggiungi un componente CommentArea alla fine di SingleBook. Quando l'utente cliccherà su un SingleBook (quindi quando la proprietà selected nel suo stato diventa true), i commenti dovranno apparire (suggerimento: short-circuit operator!).

import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment'; 
import { Alert } from 'react-bootstrap';

const CommentArea = ({ asin }) => {
  // state = {
  //   comments: [],
  // };

  const [comments, setComments] = useState([]);


  // componentDidUpdate = async (prevProps) => {
  //   console.log("this props", this.props.asin)
  //    if (prevProps.asin !== this.props.asin) {
  //     console.log("prevProps e this.props diverse, avvio la fetch")

  // useEffect(() => {
  //   setComments(() => ({
  //     []
  //   }))
  // })

  const fetchComments = (asin) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyYjg4MjJiNjYwYzAwMTUzZDhkZTgiLCJpYXQiOjE3MTk4NDI5NDYsImV4cCI6MTcyMTA1MjU0Nn0.pamYs8hQErgfJMBOC7uxgG6QhQEG6gVR4AAY_1FlZdc',
        }
      }
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      .then(commentsData => {
        setComments(commentsData);
      })
      .catch(Error => {
        console.error("Errore nella fetch:", Error)
      })
  }

//   useEffect(() => {
//  fetchComments(asin);
// }, [asin]);

  useEffect(() => {
  if (asin) {
    fetchComments(asin); 
  }
}, [asin]);

return (
      <div className="text-center">
        <AddComment asin={asin} />
        {comments.length === 0 ? (
          <Alert variant="warning">No reviews</Alert>
        ) : (
          <CommentList commentsToShow={comments} />
        )}
      </div>
    );
  }









  //     try {
  //       let response = await fetch(
  //         'https://striveschool-api.herokuapp.com/api/comments/' + asin,
  //         {
  //           headers: {
  //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyYjg4MjJiNjYwYzAwMTUzZDhkZTgiLCJpYXQiOjE3MTk4NDI5NDYsImV4cCI6MTcyMTA1MjU0Nn0.pamYs8hQErgfJMBOC7uxgG6QhQEG6gVR4AAY_1FlZdc',
  //           },
  //         }
          
  //       );
  //       if (response.ok) {
  //         let comments = await response.json();
  //         this.setState({ comments: comments });
  //       } else {
  //         console.error('Errore nel recupero dei commenti');
  //       }
  //     } catch (error) {
  //       console.error('Errore di fetch:', error);
  //     }
  //   }
  // };

  
    

export default CommentArea;




// https://striveschool-api.herokuapp.com/api/comments/
// :https://striveschool-api.herokuapp.com/api/comments/:elementId