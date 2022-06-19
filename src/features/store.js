import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies/movieSlice";
import { applyMiddleware } from "redux";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("action", action);
  next(action);
};

export const store = configureStore({
  reducer: { movies: movieSlice },
  middleware: [loggerMiddleware],
});
