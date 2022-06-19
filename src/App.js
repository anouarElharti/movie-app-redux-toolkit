import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/404/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import MovieListing from "./components/MovieListing/MovieListing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/movies/:imdbID" element={<MovieDetail />} />
            <Route path="/movies/" element={<MovieListing />} />
            <Route path="*" element={<NotFound />} />
            <Route index path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
