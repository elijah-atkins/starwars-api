import React from "react";

const Film = ({ film }) => {

  return (
    <div className="card">
      <h3>{film.title}</h3>
      <p>Episode {film.episode_id}</p>
      <p>Director - {film.director}</p>
      <p>Producer - {film.producer}</p>
      <p>Release Date - {film.release_date}</p>
      <p className="crawl">{film.opening_crawl}</p>
    </div>
  );
};

export default Film;