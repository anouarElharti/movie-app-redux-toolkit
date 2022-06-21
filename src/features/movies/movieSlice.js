import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { APIKey, config } from "../../common/api/movieApiKey";

// FETCHING MOVIES USING ASYNC THUNK
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await movieApi
      .get(`?i=tt3896198&apikey=${APIKey}&s=Avengers`, config)
      .catch((err) => {
        console.log("Error fetching data", err);
      });
    // Return the response
    return response.data;
    //console.log("Response", response);
  }
);
// FETCHING SHOWS USING ASYNC THUNK
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const response = await movieApi
      .get(`?i=tt3896198&apikey=${APIKey}&type=series&s=doctor`, config)
      .catch((err) => {
        console.log("Error fetching data", err);
      });
    // Return the response
    return response.data;
    //console.log("Response", response);
  }
);
// FETCHING detailMovie
export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await movieApi.get(`?i=${id}&apikey=${APIKey}&Plot=full`);
    // Return the response
    return response.data;
    //console.log("Response", response);
  }
);

const initialState = {
  movies: {},
  series: {},
  movieDetail: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending movies...");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetch movies successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Fetch movies rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetch series Success!");
      return { ...state, series: payload };
    },
    [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetch movie details Success!");
      return { ...state, movieDetail: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.series;
export const getSelectedMovieOrShow = (state) => state.movies.movieDetail;
export default movieSlice.reducer;
