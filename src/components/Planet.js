import React from "react";
import Capitalize from "../utils/Capitalize";

const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Diameter - {" "}
      {planet.diameter === "unknown"
          ? Capitalize(planet.diameter)
          : `${Capitalize(planet.diameter)}km`}
        </p>
      <p>Population - {Capitalize(planet.population)}</p>
      <p>Climate - {Capitalize(planet.climate)}</p>
      <p>Surface Water - {" "}
      {planet.surface_water === "unknown"
          ? Capitalize(planet.surface_water)
          : `${Capitalize(planet.surface_water)}%`}
        </p>
      <p>Terrain - {Capitalize(planet.terrain)}</p>
      <p>Gravity - {" "}
      {planet.gravity === "unknown"
          ? Capitalize(planet.gravity)
          : `${Capitalize(planet.gravity)} G`}
        </p>
      <p>Rotation Cycle - {" "}
      {planet.rotation_period === "unknown"
          ? Capitalize(planet.rotation_period)
          : `${Capitalize(planet.rotation_period)} Hours`}
        </p>
      <p>
        Orbital Cycle - {" "}
        {planet.orbital_period === "unknown"
          ? Capitalize(planet.orbital_period)
          : `${Capitalize(planet.orbital_period)} Days`}
      </p>
    </div>
  );
};

export default Planet;
