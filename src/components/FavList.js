import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function FavList(props) {

    const [favListData, setFavListData] = useState();
    async function getDataFromDB() {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
        const data = await response.json();
        setFavListData(data);
        console.log(data)
      }
      useEffect(() => {
        getDataFromDB();
      }, []);



      async function handleDelete(id) {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER}/DELETE/${id}`,
          {
            method: "DELETE",
          }
        );
    
        if (response.status === 204) {
          getDataFromDB();
          Swal.fire("It is done!", "Movie Deleted Successfully", "success");
        }
      }
  return (
    <div id="cards">
      <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
        {favListData &&
          favListData.map((movie) => {
            return (
              <Card key={movie.id}>
                <Card.Img variant="top" src={movie.poster_path} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.caption}</Card.Text>
                </Card.Body>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleDelete(movie);
                  }}
                >
                  Delete
                </Button>
              </Card>
            );
          })}
      </CardGroup>
    </div>
  );
}
