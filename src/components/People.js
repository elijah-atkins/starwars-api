import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return res.json();
  //   swapiModule.getPeople({page: `${page}`}, (data) => {
  //   console.log("Result of getPeople", data.results);
  //   return data.results;
  // });
};
const People = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["people", page],
    fetchPeople,
    { staleTime: 10000 }
  );
  return (
    <div>
      <h2>People</h2>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        Previous Page
      </button>
      <span>{page}</span>
      <button
        onClick={() =>
          setPage((old) => (!latestData || !latestData.next ? old : old + 1))
        }
        disabled={!latestData || !latestData.next}
      >
        Next Page
      </button>

      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div className="card-container">
          {resolvedData.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
