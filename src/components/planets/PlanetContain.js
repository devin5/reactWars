import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import NextButton from "../buttons/NextButton";
import Header from "../Header";

import axios from "axios";
import PreviousButton from "../buttons/PreviousButton";
import PlanetCard from "./PlanetCard";

export default function CharContain() {
  const [planet, setPlanet] = useState([]);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [url, setUrl] = useState(`https://swapi.co/api/planets/`);
  const [loading, setLoading] = useState(true);

  const nextPage = () => {
    setLoading(true);
    axios
      .get(next)
      .then(res => (setUrl(next), setNext(res.data.next)))
      .catch(err => console.log(err));
  };

  const prevPage = () => {
    setLoading(true);
    axios
      .get(previous)
      .then(res => (setUrl(previous), setPrevious(res.data.previous)))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios
      .get(url)
      .then(
        res => (
          setPlanet(res.data.results),
          setNext(res.data.next),
          setPrevious(res.data.previous),
          setLoading(false),
          console.log(res)
        )
      )
      .catch(err => console.log(err));
  }, [url]);
  return (
    <>
      <Header title={"Planets"} />
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <PreviousButton prevPage={prevPage} previous={previous} />
            <NextButton nextPage={nextPage} next={next} />
            <div className="flex">
              {planet.map(pl => (
                <PlanetCard planet={pl} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
