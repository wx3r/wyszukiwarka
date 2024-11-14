import React from 'react';
import './MovieDetails.css';
 
const MovieDetails = ({ movie, onBack }) => {
  return (
    <div className="movie-details">
      <button className="back-button" onClick={onBack}>Back to results</button>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title} ({movie.Year})</h2>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};
 
export default MovieDetails;