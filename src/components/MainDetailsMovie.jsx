import React from "react";

const MainDetailsMovie = ({
  searchTerm,
  yearFilter,
  star,
  setSearchTerm,
  setYearFilter,
  setStar,
  genreFilter,
  setGenreFilter,
}) => {
  const Genres = [
    "All",
    "Action",
    "Comedy",
    "Crime",
    "Horror",
    "Fantasy",
    "Romance",
  ];
  return (
    <div>
      {/* search, year, stars filters*/}
      <main>
        <div className="name-select">
          <label>Select by name: </label>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search by name.."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="year-select">
          <label>Select by year: </label>
          <input
            type="number"
            value={yearFilter}
            placeholder="Search by year.."
            onChange={(e) => setYearFilter(e.target.value)}
          />
        </div>

        <div className="stars-select">
          <label>Select by stars rate: </label>
          <select
            className="stars-rate"
            value={star}
            onChange={(e) => setStar(e.target.value)}
          >
            <option value="All">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </main>

      {/* genre filter */}
      <div className="genre-select">
        <h4>Select by genre:</h4>

        {/* <label>
          <input
            type="radio"
            name="genre"
            value="all"
            checked={genreFilter === "all"}
            onChange={(e) => setGenreFilter(e.target.value)}
          />
          All
        </label> */}

        {Genres.map((genre) => (
          <label key={genre}>
            <input
              type="radio"
              name="genre"
              value={genre}
              checked={genreFilter === genre}
              onChange={(e) => setGenreFilter(e.target.value)}
            />
            {genre}
          </label>
        ))}
      </div>
    </div>
  );
};

export default MainDetailsMovie;
