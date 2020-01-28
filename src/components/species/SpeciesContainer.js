import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import NextButton from "../buttons/NextButton";
import Header from "../Header";

import axios from "axios";
import PreviousButton from "../buttons/PreviousButton";
import SpeciesCard from "./SpeciesCard";

export default function CharContain() {
  const [species, setSpecies] = useState([]);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [url, setUrl] = useState(`https://swapi.co/api/species/`);
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
          setSpecies(res.data.results),
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
      <Header title={"Species"} />
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <PreviousButton prevPage={prevPage} previous={previous} />
            <NextButton nextPage={nextPage} next={next} />
            <div className="flex">
              {species.map(species => (
                <SpeciesCard species={species} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
