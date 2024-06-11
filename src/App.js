import { createContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Filter from "./pages/Filter";
import Header from "./components/Header";

export const AppContext = createContext();

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_origin_country=US&with_original_language=en`;

function App() {
  const [movie, setMovie] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [andOr, setAndOr] = useState("|");

  const addGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres((l) => l.filter((item) => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const getMovie = async () => {
    let page = Math.ceil(Math.random() * 500 + 1);
    let url = `${API_URL}&page=${page}`;
    if (selectedGenres.length > 0) {
      if (selectedGenres.length > 1) {
        url += `with_genres=${selectedGenres.join(andOr)}`;
      } else {
        url += `with_genres=${selectedGenres[0]}`;
      }
    }
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data.results[Math.floor(Math.random() * 20)]);
  };

  const clearGenres = () => {
    setSelectedGenres([]);
  };

  const clearMovie = () => {
    setMovie();
  };

  const clearAll = () => {
    setMovie();
    setSelectedGenres([]);
    setAndOr("|");
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          movie,
          selectedGenres,
          addGenre,
          getMovie,
          clearGenres,
          clearMovie,
          clearAll,
          andOr,
          setAndOr,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="filter" element={<Filter />} />
          <Route path="recommendations" element={<Recommendations />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
