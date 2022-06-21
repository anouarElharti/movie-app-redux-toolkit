import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import movieSlice from "./movies/movieSlice";

export const store = configureStore({
  reducer: { movies: movieSlice },
});
