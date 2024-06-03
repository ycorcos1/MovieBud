import React, { useContext } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function Header() {
  const { clearAll } = useContext(AppContext);

  return (
    <div className="header">
      <Link
        to="/"
        onClick={() => {
          clearAll();
        }}
      >
        <h1>Movie Bud</h1>
      </Link>
    </div>
  );
}

export default Header;
