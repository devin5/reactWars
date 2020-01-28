import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import NextButton from "../buttons/NextButton";
import Header from "../Header";

import axios from "axios";
import PreviousButton from "../buttons/PreviousButton";
import Card from "./Card";

export default function CharContain() {
  const [chars, setChars] = useState([]);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [url, setUrl] = useState(`https://swapi.co/api/people`);
  const [loading, setLoading] = useState(true);
  console.log(chars);
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
          setChars(res.data.results.map(item => item)),
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
      <Header title={"Characters"} />
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <PreviousButton prevPage={prevPage} previous={previous} />
            <NextButton nextPage={nextPage} next={next} />
            <div className="flex">
              {chars.map(
                char => (console.log("ik char", char), (<Card char={char} />))
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
