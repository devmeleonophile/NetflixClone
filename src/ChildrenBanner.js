import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import netflixLogo from "./images/netflix-logo.png";
import childLogo from "./images/child_logo.png";

import { redirect, useLocation, useNavigate } from "react-router-dom";

function ChildrenBanner({ fetchData }) {
  const [movie, setMovie] = useState([]);
  const [items, setItems] = useState([]);
  const [show, handleShow] = useState(false);
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

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
  const toList = () => {
    navigate("/home/addList", {
      state: {
        value: movie
      }
    });
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const redirector = () => {
    navigate("/");
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
      <div className={`nav ${show && "nav_bg"}`}>
        <img className="logo" src={netflixLogo} alt="netflix_logo" />
        <img
          className="profile"
          src={childLogo}
          alt="netflix_logo"
          onClick={redirector}
        />
      </div>
      <div className="title">
        <h1>{movie?.name || movie?.title || movie?.original_title}</h1>
        <div className="Buttons">
          <button className="button" onClick={() => redirect()}>
            play
          </button>
          <button className="button" onClick={() => toList()}>
            MyList
          </button>
        </div>
        <div className="description">{truncate(movie?.overview, 150)}</div>
      </div>
      <div className="Fade"></div>
    </header>
  );
}

export default ChildrenBanner;
