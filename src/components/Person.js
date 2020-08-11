import React from "react";
import Capitalize from '../utils/Capitalize'
const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>{Capitalize(person.name)}</h3>
      <p>Gender - {Capitalize(person.gender)}</p>
      <p>Birth Year - {Capitalize(person.birth_year)}</p>
      <p>Eye Color - {Capitalize(person.eye_color)}</p>
      <p>Hair Color - {Capitalize(person.hair_color)}</p>
      <p>Height - {person.height} cm</p>
      <p>Mass - {person.mass !== 'unknown' ? `${person.mass} kg` : 'Unknown'}</p>
    </div>
  );
};
 
export default Person;
