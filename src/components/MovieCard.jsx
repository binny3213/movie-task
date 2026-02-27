const MovieCard = ({ movie, likedIds, toggleLike }) => {
  function Stars({ value, max = 5 }) {
    const n = Math.max(0, Math.min(max, Number(value) || 0));
    return <div>{"⭐".repeat(n)}</div>;
  }

  return (
    <div key={movie.id} className="movie-card">
      <div className="img-wrap">
        <img
          src={movie.imgUrl}
          alt={movie.name}
          className="movie-img"
          loading="lazy"
        />
        <button
          type="button"
          className="heartBtn"
          onClick={() => {
            toggleLike(movie.id);
          }}
        >
          {likedIds.has(movie.id) ? "❤️" : "♡"}
        </button>
        <div className="category">
          <h4 className="category-text">
            {movie.Category[0].toUpperCase() + movie.Category.slice(1)}
          </h4>
        </div>
      </div>

      <div className="card-content">
        <h2 className="movie-title">{movie.name}</h2>
        <p className="movie-year">{movie.Year}</p>
        <div className="starsRating">
          <Stars value={movie.stars} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
