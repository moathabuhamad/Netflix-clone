
import MovieList from "../MovieList/MovieList";

function Home(props) {
  return (
    <>
      <h1>Home Page</h1>
      <main>
        {props.movies && (
          <div className="main-container">
              <MovieList movies={props.movies} addComment={props.addComment} />
          </div>
        )}
      </main>
    </>
  );
}

export default Home;
