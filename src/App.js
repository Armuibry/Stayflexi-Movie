import React from "react";
import MovieDetails from "./movies/MovieDetails";
import MoviePage from "./movies/MoviePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MoviePage />} />
        <Route exact path="moviedetails" element={<MovieDetails />} />
        <Route exact path="only" element={<only />} />
        <Route exact path="search" element={<search />} />
        <Route exact path="comment" element={<comment />} />
        <Route exact path="approval" element={<approval />} />
        <Route exact path="analytics" element={<analytics />} />
        <Route exact path="repository" element={<repository />} />
      </Routes>
    </div>
  );
}

export default App;
