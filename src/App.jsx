import React, { useState, useEffect, useMemo } from "react";
import Data from "./Data.json";
import "./App.css";
import MainDetailsMovie from "./components/MainDetailsMovie";
import MovieList from "./components/MovieList";

const App = () => {
  const moviesArray = useMemo(
    () => Object.values(Data).sort((a, b) => b.Year - a.Year),
    [Data],
  );
  const [movies, setMovies] = useState(moviesArray);
  const [visibleMovies, setVisibleMovies] = useState(moviesArray);
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [star, setStar] = useState("All");

  // 1. Initial Load: Fetch all movies from Data.json/API
  useEffect(() => {
    setMovies(movies);
  }, []);

  // 2. Search: Filter movies based on search term
  useEffect(() => {
    let filtered = movies;
    if (searchTerm.trim()) {
      filtered = filtered.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    if (yearFilter) {
      filtered = filtered.filter(
        (movie) => parseInt(movie.Year) === parseInt(yearFilter),
      );
    }
    if (genreFilter !== "All") {
      filtered = filtered.filter(
        (movie) => movie.Category.toLowerCase() === genreFilter.toLowerCase(),
      );
    }
    if (star != "All") {
      filtered = filtered.filter((movie) => movie.stars === star);
    }
    setVisibleMovies(filtered);
  }, [searchTerm, yearFilter, genreFilter, star, movies]);

  return (
    <div className="page">
      <header className="topbar">
        <h1 className="title">Movie App</h1>
      </header>

      {/* main movie details */}
      <MainDetailsMovie
        searchTerm={searchTerm}
        yearFilter={yearFilter}
        star={star}
        setSearchTerm={setSearchTerm}
        setYearFilter={setYearFilter}
        setStar={setStar}
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
      />

      {/* movie list */}
      <MovieList movies={visibleMovies} />
    </div>
  );
};

export default App;
