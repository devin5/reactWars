import React, { useEfeect, useState, useEffect } from "react";
import axios from "axios";
import Star from "./Star";
import Header from "../Header";
import Loading from "../Loading";
import NextButton from "../buttons/NextButton";
import PreviousButton from "../buttons/PreviousButton";

export default function StarContain() {
  const [ships, setShips] = useState([]);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [url, setUrl] = useState(`https://swapi.co/api/starships/`);
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
          setShips(res.data.results),
          setNext(res.data.next),
          setPrevious(res.data.previous),
          setLoading(false),
          console.log(res)
        )
      )
      .catch(err => console.log(err));
  }, [url]);

  console.log(ships);

  return (
    <>
      <Header title={"Starships"} />
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <PreviousButton prevPage={prevPage} previous={previous} />
            <NextButton nextPage={nextPage} next={next} />
            <div className="flex">
              {ships.map(ship => (
                <Star ship={ship} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
