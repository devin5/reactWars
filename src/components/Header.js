import React from "react";

function Header(props) {
  return (
    <div className="headContain">
      <h1 class="appHead">StarWars {props.title}</h1>
      <label for="toggle">&#9776;</label>
    </div>
  );
}

export default Header;
