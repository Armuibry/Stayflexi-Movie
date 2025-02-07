import React from 'react';
import MovieDetails from './movies/MovieDetails';
import MoviePage from './movies/MoviePage';
import { Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MoviePage />} />
        <Route exact path='moviedetails' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
