import React from "react";
import { useQuery } from "react-query";
import Film from "./Film";

const fetchFilms = async () => {
  const res = await fetch('https://swapi.dev/api/films/');
  return res.json();
};
const Films = () => {
    const { data, status } = useQuery('people', fetchFilms);
  //console.log(data, status);
  return (
    <div>
      <h2>Films</h2>

      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
        {/* <button onClick={()=> setPage(old => Math.max(old -1, 1))} disabled={page === 1}>
          Previous Page
        </button>
        <span>{ page }</span>
        <button onClick={() => setPage(old => (!latestData || !latestData.next ? old : old +1))} disabled={!latestData || !latestData.next}>
          Next Page
        </button> */}
        <div className="card-container">
          {data.results.map((film) => (
            <Film key={film.name} film={film} />
          ))}
        </div></>
      )}
    </div>
  );
};

export default Films;
