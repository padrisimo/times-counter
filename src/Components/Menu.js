import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendarPlus, FaTable } from 'react-icons/fa';

const Menu = props => <nav className="menu">
  <NavLink exact to="/" activeClassName="selected"> <FaHome/> </NavLink>
  <NavLink exact to="/add-day" activeClassName="selected"> <FaCalendarPlus/> </NavLink>
  <NavLink exact to="/list-days" activeClassName="selected"> <FaTable/> </NavLink>
</nav>

export default Menu;