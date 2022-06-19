import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import { config } from "../../common/api/movieApiKey";
import { APIKey } from "../../common/api/movieApiKey";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const [movieName, setMovieName] = useState("Avengers");
  const [movieType, setMovieType] = useState("Popular");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?i=tt3896198&apikey=${APIKey}&s=${movieName}`, config)
        .catch((err) => {
          console.log("Error fetching data", err);
        });
      // UPDATE THE STATE
      dispatch(addMovies(response.data));
      //console.log("Response", response);
    };
    fetchMovies();
  }, []);

  return (
    <div className="home">
      <div className="banner_img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
