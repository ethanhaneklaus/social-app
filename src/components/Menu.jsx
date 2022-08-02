import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { UserContext } from "../context/UserContext";

function Menu() {

  return (
    <div className="topnav">
      <NavLink to="/main">MainPage</NavLink>
      <NavLink to="/login">LoginPage</NavLink>
      <NavLink to="/register">RegisterPage</NavLink>
      <NavLink to="/profile">ProfilePage</NavLink>
    </div>
  );
}

export default Menu;
