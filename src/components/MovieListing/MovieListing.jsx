import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllShows);
  //console.log("All movies", movies);
  let renderMovies = "";
  let renderShows = "";
  // Rendering movies
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, i) => <MovieCard key={i} data={movie} />)
    ) : (
      <div className="error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    series.Response === "True" ? (
      series.Search.map((serie, i) => <MovieCard key={i} data={serie} />)
    ) : (
      <div className="error">
        <h3>{series.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
