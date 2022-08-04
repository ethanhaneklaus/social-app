import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { UserContext } from "../context/UserContext";

function ProfileCard() {

  return (
    <div className="card" style={{ display: "flex" }}>
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="John" style={{ width: "100%" }} />
      <h1>Users Name</h1>
      <h1>Users Handle</h1>
      <p className="title">Biography</p>
      <p>Follow My Socials</p>
      <a href="#"><i className="bi bi-snapchat"></i></a>
      <a href="#"><i className="bi bi-twitter"></i></a>
      <a href="#"><i className="bi bi-linkedin"></i></a>
      <a href="#"><i className="bi bi-facebook"></i></a>
      <p><button className="button">Contact</button></p>
    </div>
  );
}

export default ProfileCard;