import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav className='Navbar'>
        <NavLink exact to="/soylent">Soylent Green</NavLink>
        <NavLink exact to="/pepsi">Pepsi Cola</NavLink>
        <NavLink exact to="/chips">Air with Chips</NavLink>
        </nav>
    )
}
export default Navbar;