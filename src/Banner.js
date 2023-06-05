import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

function Banner({ fetchData }) {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
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
          <button className="button">play</button>
          <button onClick={() => navigate("List")} className="button">
            MyList
          </button>
        </div>
        <div className="description">{movie?.overview}</div>
      </div>
      <div className="Fade"></div>
    </header>
  );
}

export default Banner;
