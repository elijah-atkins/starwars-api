import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import Specie from "./Specie";

const fetchSpecies = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/species/?page=${page}`);
  return res.json();
};
const Species = () => {
  const [page, setPage] = useState(1);

  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["species", page],
    fetchSpecies,
    { staleTime: 10000 }
  );
  //console.log(data, status);
  return (
    <div>
      <h2>Species</h2>

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
          {resolvedData.results.map((species) => (
            <Specie key={species.name} specie={species} />
          ))}
        </div></>
      )}
    </div>
  );
};

export default Species;
