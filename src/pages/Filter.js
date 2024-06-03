import React, { useContext } from "react";
import "../styles/Filter.css";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

function Filter() {
  const { selectedGenres, addGenre, getMovie, clearGenres } =
    useContext(AppContext);

  function checkSelectedGenre(genre) {
    if (selectedGenres.includes(genre)) {
      return "selectedbtn";
    } else {
      return "deselectedbtn";
    }
  }

  return (
    <div className="filter">
      <div className="clearbtn_container">
        <button className="clearbtn" onClick={() => clearGenres()}>
          Clear Filters
        </button>
      </div>
      <div className="btn_container">
        <button className={checkSelectedGenre(28)} onClick={() => addGenre(28)}>
          Action
        </button>
        <button className={checkSelectedGenre(12)} onClick={() => addGenre(12)}>
          Adventure
        </button>
        <button className={checkSelectedGenre(16)} onClick={() => addGenre(16)}>
          Animation
        </button>
        <button className={checkSelectedGenre(35)} onClick={() => addGenre(35)}>
          Comedy
        </button>
        <button className={checkSelectedGenre(80)} onClick={() => addGenre(80)}>
          Crime
        </button>
        <button className={checkSelectedGenre(99)} onClick={() => addGenre(99)}>
          Documentary
        </button>
        <button className={checkSelectedGenre(18)} onClick={() => addGenre(18)}>
          Drama
        </button>
        <button
          className={checkSelectedGenre(10751)}
          onClick={() => addGenre(10751)}
        >
          Family
        </button>
        <button className={checkSelectedGenre(14)} onClick={() => addGenre(14)}>
          Fantasy
        </button>
        <button className={checkSelectedGenre(36)} onClick={() => addGenre(36)}>
          History
        </button>
        <button className={checkSelectedGenre(27)} onClick={() => addGenre(27)}>
          Horror
        </button>
        <button
          className={checkSelectedGenre(9648)}
          onClick={() => addGenre(9648)}
        >
          Mystery
        </button>
        <button
          className={checkSelectedGenre(10749)}
          onClick={() => addGenre(10749)}
        >
          Romance
        </button>
        <button
          className={checkSelectedGenre(878)}
          onClick={() => addGenre(878)}
        >
          Science Fiction
        </button>
        <button className={checkSelectedGenre(53)} onClick={() => addGenre(53)}>
          Thriller
        </button>
        <button
          className={checkSelectedGenre(10752)}
          onClick={() => addGenre(10752)}
        >
          War
        </button>
        <button className={checkSelectedGenre(37)} onClick={() => addGenre(37)}>
          Western
        </button>
      </div>
      <div className="enter">
        <Link to="/recommendations">
          <button
            className="enterbtn"
            onClick={() => {
              getMovie();
            }}
          >
            Get Recommended Movie
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Filter;
