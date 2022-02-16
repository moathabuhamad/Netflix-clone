import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Movie(props) {



  async function handleAddFav(e, movie){
    e.preventDefault();
   const dataToBeSent = {
    title: movie.title,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
    overview: movie.overview,
    comment: movie.comment
   }}





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
            <Button type="submit" variant="primary" onClick={(e)=>{handleAddFav(e,props.chosenMovie)} }>add to favorite</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
