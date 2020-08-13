import React from "react";
import Capitalize from "../utils/Capitalize";
const Starship = ({ starship }) => {

  return (
    <div className="card">
      <h3>{starship.name}</h3>
      <p>Model - {Capitalize(starship.model)}</p>
      <p>Class - {Capitalize(starship.starship_class)}</p>
      <p>Manufacturer - {starship.manufacturer}</p>
      <p>Length - {starship.length}m</p>
      <p>Cost - {" "}
      {starship.cost_in_credits === "unknown"
          ? Capitalize(starship.cost_in_credits)
          : `${Capitalize(starship.cost_in_credits)} Credits`}
        </p>
      <p>Crew - {starship.crew}</p>
      <p>Passenger Capacity - {starship.passengers}</p>
  <p>Cargo Capacity - {starship.cargo_capacity}</p>
  <p>Consumables - {starship.consumables}</p>
      <p>Max Atmospher Speed - {starship.max_atmosphering_speed}</p>
      <p>Hyperdrive Rating - {starship.hyperdrive_rating}</p>
      <p>Maximum Magalights/hour = {starship.MGLT}</p>

    </div>
  );
};

export default Starship;
