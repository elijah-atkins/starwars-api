import React from "react";
import { useQuery } from "react-query";
import Film from "./Film";

const fetchFilms = async () => {
  const res = await fetch("https://swapi.dev/api/films/");
  return res.json();
};
const Films = () => {
  const { data, status } = useQuery("film", fetchFilms);
  //console.log(data, status);
  return (
    <div>
      <h2>Films</h2>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <div className="card-container">
            {data.results.map((film) => (
              <Film key={film.title} film={film} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Films;
