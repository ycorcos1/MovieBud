import React, { useContext } from "react";
import "../styles/Recommendations.css";
import { AppContext } from "../App";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Recommendations() {
  const { movie, getMovie, clearMovie } = useContext(AppContext);

  return (
    <div className="recommendations">
      <div className="container_btn">
        <Link to="/filter">
          <button
            className="goback"
            onClick={() => {
              clearMovie();
            }}
          >
            Edit Filter(s)
          </button>
        </Link>
        <Link to="/recommendations">
          <button
            className="refresh"
            onClick={() => {
              getMovie();
            }}
          >
            Choose Another
          </button>
        </Link>
      </div>
      <div className="movie_container">
        {movie === undefined ? <Loading /> : <Movie movie={movie} />}
      </div>
    </div>
  );
}

export default Recommendations;
