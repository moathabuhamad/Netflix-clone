import React from "react";
import { Card, Button } from "react-bootstrap";

function Movie(props) {
  return (
    <>
      <div className="card-container" key={props.movie.id}>
        <Card style={{ width: '16rem' }} key={props.movie.id}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>{props.movie.overview}</Card.Text>
            <Card.Text>
              {props.movie.isCaption ? props.movie.caption : "No Caption Added"}
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                props.setMovie(props.movie);
                props.setShowModal(true);
              }}
            >
              Show Modal
            </Button>
            <Button variant="primary"> Add to Fav</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Movie;
// {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`}
