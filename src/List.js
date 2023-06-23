import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./List.css";
const url = "https://image.tmdb.org/t/p/original/";

function List() {
  const location = useLocation();
  const navigate = useNavigate();
  const items = [
    {
      description: location.state.desc,
      title: location.state.title,
      image: location.state.image,
      background: location.state.bg
    }
  ];
  const redirect = () => {
    navigate("/home");
  };
  const [Movies, setMovies] = useState(items);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="List-Compo">
      {Movies.map((movie) => {
        return (
          <div
            style={{
              backgroundImage: `url(${url}${movie.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              objectFit: "contain",
              height: "100vh",
              boxShadow: "0 0 5px 2px #282a2d;"
            }}
          >
            <div className="main-container">
              <img
                className="Big_rows"
                src={`${url}${movie.image}`}
                alt={movie.title}
              />
              <div className="content-cont">
                <h2 className="List_title ">{movie.title}</h2>
                <p className="list_description">
                  {truncate(movie?.overview, 150)}
                </p>
                <button className="button">play</button>
                <button onClick={() => redirect()} className="button">
                  Go back to Home
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
