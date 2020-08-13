import React from "react";
import Capitalize from "../utils/Capitalize";
const Vehicle = ({ vehicle }) => {

  return (
    <div className="card">
      <h3>{vehicle.name}</h3>
      <p>Model - {Capitalize(vehicle.model)}</p>
      <p>Class - {Capitalize(vehicle.vehicle_class)}</p>
      <p>Manufacturer - {vehicle.manufacturer}</p>
      <p>Length - {vehicle.length}m</p>
      <p>Cost - {" "}
      {vehicle.cost_in_credits === "unknown"
          ? Capitalize(vehicle.cost_in_credits)
          : `${Capitalize(vehicle.cost_in_credits)} Credits`}
        </p>
      <p>Crew - {vehicle.crew}</p>
      <p>Passenger Capacity - {vehicle.passengers}</p>
  <p>Cargo Capacity - {vehicle.cargo_capacity}</p>
  <p>Consumables - {Capitalize(vehicle.consumables)}</p>
      <p>Max Atmospher Speed - {vehicle.max_atmosphering_speed}</p>
    </div>
  );
};

export default Vehicle;
