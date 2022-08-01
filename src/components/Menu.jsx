import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { UserContext } from "../context/UserContext";

function Menu() {

  return (
    <div className="topnav">
      <a className="active" href="/main">MainPage</a>
      <a href="/login">LoginPage</a>
      <a href="/register">RegisterPage</a>
      <a href="/profile">ProfilePage</a>
    </div>
  );
}

export default Menu;
