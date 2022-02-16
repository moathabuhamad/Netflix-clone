import React, { useState } from "react";
import { CardGroup } from "react-bootstrap";
import ModalMovie from "../ModalMovie/ModalMovie.js";
import Movie from "../Movie/Movie.js";

function MovieList(props) {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  return (
    <>
      <div className="card-g">
        {props.movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Movie
                movie={movie}
                key={movie.id}
                setShowModal={setShowModal}
                setMovie={setMovie}
              />
            </div>
          );
        })}
      </div>
      {showModal && (
        <ModalMovie
          show={showModal}
          movie={movie}
          handleColse={() => {
            setShowModal(false);
          }}
          addComment={props.addComment}
        />
      )}
    </>
  );
}

export default MovieList;
