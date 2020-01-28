import React from "react";
import photo from "../assetts/logo.png";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <input type="checkbox" id="toggle" />
      <div class="menu">
        <Link to="/">Characters</Link>
        <Link to="/starships">Starships</Link>
        <Link to="/films">Films</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/species">Species</Link>
        <Link to="/planets">Planets</Link>

        <img class="menuImg" src={photo} alt="Star warsLogo" />
      </div>
    </nav>
  );
}
