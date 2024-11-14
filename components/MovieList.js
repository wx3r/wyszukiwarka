import React from 'react';
import './MovieList.css';
 
const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="movie-card"
          onClick={() => onSelectMovie(movie.imdbID)}
        >
          <img
src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
            alt={movie.Title}
          />
          <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
 
export default MovieList;