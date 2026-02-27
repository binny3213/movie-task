import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  const [likedIds, setLikedIds] = useState(() => new Set());

  function toggleLike(id) {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          likedIds={likedIds}
          toggleLike={toggleLike}
        />
      ))}
    </div>
  );
};

export default MovieList;
