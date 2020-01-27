import React from "react";
import "./App.css";
import CharContainer from "./components/char/CharContainer";
import Menu from "./components/Menu";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path="/">
        <CharContainer />
      </Route>
    </div>
  );
}

export default App;
