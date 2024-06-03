import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/filter">
        <button className="getstarted">Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
