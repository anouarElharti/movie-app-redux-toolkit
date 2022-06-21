import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import { useDispatch } from "react-redux";
import {
  addMovies,
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const [movieName, setMovieName] = useState("Avengers");
  const [movieType, setMovieType] = useState("Popular");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="banner_img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
