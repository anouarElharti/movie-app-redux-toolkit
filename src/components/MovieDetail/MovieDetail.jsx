import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faStar,
  faFilm,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import {
  fetchAsyncMovieDetail,
  getSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID));
  }, [dispatch, imdbID]);
  console.log("Current movie", data);
  return (
    <div className="movie-section">
      <div className="section-left">
        <h1 className="movie-title">{data.Title}</h1>
        <div className="movie-rating">
          <span>
            IMDB Rating <FontAwesomeIcon icon={faStar} /> :{data.imdbRating}
          </span>
          <span>
            IMDB Votes <FontAwesomeIcon icon={faThumbsUp} /> :{data.imdbVotes}
          </span>
          <span>
            Runtime <FontAwesomeIcon icon={faFilm} /> :{data.Runtime}
          </span>
          <span>
            Year <FontAwesomeIcon icon={faCalendar} /> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Actors</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="movie-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
