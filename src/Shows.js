import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Shows.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Shows({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="shows">
      <h2>{title}</h2>
      <div className="show_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`show_poster`}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Shows;
