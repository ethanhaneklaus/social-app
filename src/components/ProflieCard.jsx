import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { UserContext } from "../context/UserContext";

function ProfileCard() {

  return (
    <div class="card">
      <img src="img.jpg" alt="John" style="width:100%" />
      <h1>Users Name</h1>
      <h1>Users Handle</h1>
      <p class="title">Biography</p>
      <p>Follow My Socials</p>
      <a href="#"><i class="bi bi-snapchat"></i></a>
      <a href="#"><i class="bi bi-twitter"></i></a>
      <a href="#"><i className="bi bi-linkedin"></i></a>
      <a href="#"><i className="bi bi-facebook"></i></a>
      <p><button>Contact</button></p>
    </div>
  );
}

export default ProfileCard;