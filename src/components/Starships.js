import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import Starship from "./Starship";

const fetchStarships = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
  return res.json();
};
const Starships = () => {
  const [page, setPage] = useState(1);

  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["starships", page],
    fetchStarships,
    { staleTime: 10000 }
  );
  //console.log(data, status);
  return (
    <div>
      <h2>Starships</h2>

      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
        <button onClick={()=> setPage(old => Math.max(old -1, 1))} disabled={page === 1}>
          Previous Page
        </button>
        <span>{ page }</span>
        <button onClick={() => setPage(old => (!latestData || !latestData.next ? old : old +1))} disabled={!latestData || !latestData.next}>
          Next Page
        </button>
        <div className="card-container">
          {resolvedData.results.map((starship) => (
            <Starship key={starship.name} starship={starship} />
          ))}
        </div></>
      )}
    </div>
  );
};

export default Starships;
