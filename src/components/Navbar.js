import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav>
      <NavLink to="/planets"><button>Planets</button></NavLink>
      <NavLink to="/people"><button>People</button></NavLink>
    </nav>
  );
}
 
export default Navbar;