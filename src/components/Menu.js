import React from "react";
import photo from "../assetts/logo.png";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <input type="checkbox" id="toggle" />
      <div class="menu">
        <Link to="/">Characters</Link>

        <a href="#">Practice</a>
        <a href="#">Practice</a>
        <a href="#">Practice</a>
        <a href="#">Practice</a>
        <a href="#">Practice</a>

        <img class="menuImg" src={photo} alt="Star warsLogo" />
      </div>
    </nav>
  );
}
