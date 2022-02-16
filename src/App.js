import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/NavBar";
import FavList from './components/FavList.js';

function App() {
  const [movies, setMovies] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=5d491173ae53fae27d17349f85825862`,
      );

      const data = await response.json();
      let capData = [];
      for (let c of data.results) {
        c["caption"] = "No Caption";
        c["isCaption"] = false;
        capData.push(c);
      }
      console.log(capData[0]);
      setMovies(capData);
    } catch (error) {
      console.log("error", error);
    }
  };
  const addComment = (data, id) => {
    let addComment = movies.map((movies) => {
      if (movies.id === id) {
        movies.caption = data.userCaption;
        movies.isCaption = !movies.isCaption;
        return movies;
      } else return movies;
    });
    setMovies(addComment);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [favMovies, setFavMovies] = useState();

  const fetchFavData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/getmovies`);

      const data = await response.json();

      setFavMovies(data);

    } catch (error) {
      console.log("error", error);
    }
  };
    useEffect(() => {
      fetchFavData();
    }, []);

  return (
    <>
    <Navibar/>
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} addComment={addComment} />}
        />
        <Route  
          path="/favorite"
          element={<FavList/>}
        />
              </Routes>
      </>
      );
}

export default App;
