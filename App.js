import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';
 
const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');
 
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;
 
  const searchMovies = async (title) => {
    try {
      setError('');
      setSelectedMovie(null);
const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`);
      
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError("No movies found.");
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    }
  };
 
  const getMovieDetails = async (id) => {
    try {
const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
      setSelectedMovie(response.data);
    } catch (err) {
      setError("Failed to load movie details.");
    }
  };
 
  return (
    <div className="app">
      <h1>Movie Finder</h1>
      <SearchBar onSearch={searchMovies} />
      {error && <p className="error">{error}</p>}
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
      ) : (
        <MovieList movies={movies} onSelectMovie={getMovieDetails} />
      )}
    </div>
  );
};
 
export default App;