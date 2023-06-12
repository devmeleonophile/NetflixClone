import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import { redirect, useLocation, useNavigate } from "react-router-dom";
function Banner({ fetchData }) {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUrl() {
      const request = await axios.get(fetchData);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return fetchUrl;
    }
    fetchUrl();
  }, [fetchData]);

  const redirect = () => {
    navigate("List", {
      state: {
        desc: movie.overview,
        image: movie.poster_path,
        title: movie.name || movie.title || movie.original_title,
        bg: movie.backdrop_path
      }
    });
  };

  return (
    <header
      className="Banner_header"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        height: "448px",
        objectFit: "contain"
      }}
    >
      <div className="title">
        <h1>{movie?.name || movie?.title || movie?.original_title}</h1>
        <div className="Buttons">
          <button className="button" onClick={() => redirect()}>
            play
          </button>
          <button className="button">MyList</button>
        </div>
        <div className="description">{movie?.overview}</div>
      </div>
      <div className="Fade"></div>
    </header>
  );
}

export default Banner;
