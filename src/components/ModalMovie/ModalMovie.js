import React, { useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap/";

function ModalMovie(props) {
  const commentRef = useRef();
  function handleComment(e) {
    e.preventDefault();
    const userComment = commentRef.current.value;
    const newData = { ...props.movie, userComment };
    props.addComment(newData, props.movie.id);
    console.log(props.movie);
  }
  console.log(props.movie);
  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.handleColse();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            width="100%"
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            alt={props.movie.title}
          />
          <p>
            {props.movie.isComment ? props.movie.Comment : ""}
          </p>
          { <p>{props.movie.Comment}</p> }
        </Modal.Body>
        <Modal.Footer>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Comments:</Form.Label>
            <Form.Control
              ref={commentRef}
              type="textarea"
              placeholder={
                props.movie.isComment
                  ? props.movie.Comment
                  : "Add Comment"
              }
            />
          </Form.Group>
          <Button
            className="addBtn"
            variant="primary"
            type="submit"
            onClick={handleComment}
          >
            Add a Comment
          </Button>
          <Button variant="secondary" onClick={props.handleColse}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie;
