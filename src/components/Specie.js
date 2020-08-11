import React from "react";

import Capitalize from '../utils/Capitalize'

const Specie = ({ specie }) => {

  return (
    <div className="card">
      <h3>{Capitalize(specie.name)}</h3>
      <p>Classification - {Capitalize(specie.classification)}</p>
      <p>Designation - {Capitalize(specie.designation)}</p>
      <p>Language - {Capitalize(specie.language)}</p>
      <p>Lifespan - {specie.average_lifespan === 'unknown' || specie.average_lifespan === 'indefinite' ? Capitalize(specie.average_lifespan):`${Capitalize(specie.average_lifespan)} years` }</p>
      <p>Average Height - {specie.average_height === 'n/a' ||specie.average_height === 'unknown' ? Capitalize(specie.average_height): `${Capitalize(specie.average_height)}cm`}</p>
    </div>
  );
};

export default Specie;
