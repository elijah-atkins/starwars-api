import React from "react";

const Starship = ({ starship }) => {

  return (
    <div className="card">
      <h3>{starship.name}</h3>
      <p>Model - {starship.model}</p>
      <p>Class - {starship.class}</p>
      <p>Manufacturer - {starship.manufacturer}</p>
      <p>Length - {starship.length} m</p>
      <p>Cost - {starship.cost_in_credits} Credits</p>
      <p>Crew - {starship.crew}</p>
      <p>Passenger Capacity - {starship.passengers}</p>
  <p>Cargo Capacity - {starship.cargo_capacity}</p>
      <p>Max Atmospher Speed - {starship.max_atmosphering_speed}</p>
      <p>Hyperdrive Rating - {starship.hyperdrive_rating}</p>

    </div>
  );
};

export default Starship;
