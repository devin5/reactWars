import React from "react";
import "./App.css";
import CharContainer from "./components/char/CharContainer";
import Char from "./components/char/Char";
import Menu from "./components/Menu";
import { Route } from "react-router-dom";
import StarContain from "./components/star/StarContain";
import FilmsContain from "./components/films/FimsContain";
import VehiclesContain from "./components/vehicles/Contain";
import SpeciesContain from "./components/species/SpeciesContainer";
import PlanetContain from "./components/planets/PlanetContain";

function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path="/">
        <CharContainer />
      </Route>
      {/* <Route exact path="/char/:id">
        <Char />
      </Route> */}
      <Route path="/starships">
        <StarContain />
      </Route>
      <Route path="/films">
        <FilmsContain />
      </Route>
      <Route path="/vehicles">
        <VehiclesContain />
      </Route>
      <Route path="/species">
        <SpeciesContain />
      </Route>
      <Route path="/planets">
        <PlanetContain />
      </Route>
    </div>
  );
}

export default App;
