import React, { useEffect, useState } from "react";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [videoUrl, setvideoUrl] = useState("");

  //Api Call
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    width: "100%",
    height: "390px",
    PlayerVars: {
      autoplay: 1
    }
  };
  const handleClick = (movie) => {
    if (videoUrl) {
      setvideoUrl("");
    } else {
      movieTrailer(movie?.original_title || movie?.name || movie?.title || "")
        .then((url) => {
          const searchValue = new URLSearchParams(new URL(url).search);
          setvideoUrl(searchValue.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="row">
      <h1 className="Genre_title">{title}</h1>
      <div className="row_movies">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLarge && `Big_rows`}`}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.original_title}
            />
          );
        })}
      </div>
      {videoUrl && <Youtube videoId={videoUrl} opts={opts} />}
    </div>
  );
}
export default Row;
