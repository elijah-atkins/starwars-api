import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/films">
        <button>Films</button>
      </NavLink>
      <NavLink to="/planets">
        <button>Planets</button>
      </NavLink>
      <NavLink to="/people">
        <button>People</button>
      </NavLink>
      <NavLink to="/species">
        <button>Species</button>
      </NavLink>
      <NavLink to="/starships">
        <button>Starships</button>
      </NavLink>
      <NavLink to="/vehicles">
        <button>Vehicles</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
