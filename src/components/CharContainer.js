import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharContain() {
  const [chars, setChars] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/?page={}")
      .then(res => {
          
        setChars(res.data.results.map(item => item)),
        console.log("I'm res", res)
        
  })
      .catch(err => console.log(err));
  }, [next]);
  console.log(chars);
  return (
    <>
      <div className="container">
        {chars.map(char => (
          <div className="card">
            <h1>Name:{char.name}</h1>
            <p>height:{char.height}</p>
            <p>mass:{char.mass}</p>
          </div>
        ))}
      </div>
    </>
  );
}
