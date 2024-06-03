import React from "react";
import "../styles/Movie.css";
import { GenreIds } from "./GenreIds";

function Movie({ movie }) {
  const convertGenresToString = () => {
    let genreStr = "";
    for (let i = 0; i < movie.genre_ids.length; i++) {
      if (i === movie.genre_ids.length - 1) {
        genreStr += GenreIds[movie.genre_ids[i]];
      } else {
        genreStr += GenreIds[movie.genre_ids[i]] + ", ";
      }
    }
    return genreStr;
  };

  return (
    <div className="movie">
      <div className="title">
        <h2>{movie.original_title}</h2>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className="overview">
        <p>{movie.overview}</p>
      </div>
      <div className="releasedate">
        <p>{`Released: ${movie.release_date}`}</p>
      </div>
      <div className="genres">
        <p>{convertGenresToString()}</p>
        {console.log(movie)}
      </div>
      <div className="rating">
        <p>{`Rating: ${movie.vote_average}`}</p>
      </div>
    </div>
  );
}

export default Movie;
