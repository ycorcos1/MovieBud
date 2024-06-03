import React from "react";
import "../styles/Loading.css";

function Loading() {
  return (
    <div className="loading">
      <p className="finding">Finding Movie...</p>
      <p className="loadingerror">If taking too long press "Choose Another"</p>
    </div>
  );
}

export default Loading;
