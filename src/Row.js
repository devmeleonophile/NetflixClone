import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);

  //Api Call
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h1 className="Genre_title">{title}</h1>
      <div className="row_movies">
        {movies.map((movie) => {
          return (
            <img
              className={`row_poster ${isLarge && `Big_rows`}`}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.original_title}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Row;
