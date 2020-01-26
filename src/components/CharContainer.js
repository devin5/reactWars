import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import { Button } from "reactstrap";

export default function CharContain() {
  const [chars, setChars] = useState([]);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [url, setUrl] = useState(`https://swapi.co/api/people`);
  const [loading, setLoading] = useState(true);

  // const page = (state, setState) => {
  //   axios
  //     .get(state)
  //     .then(res => (setUrl(state), setState(res.data.state)))
  //     .catch(err => console.log(err));
  // };

  const nextPage = () => {
    setLoading(true);
    axios
      .get(next)
      .then(res => (setUrl(next), setNext(res.data.next)))
      // .then(() => setLoading(false))
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
          setLoading(false)
        )
      )
      .catch(err => console.log(err));
  }, [url]);

  console.log(chars);
  console.log("I'm res", next);
  return (
    <>
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <Button
              id="butt"
              size="sm"
              className={previous ? "active" : "notActive"}
              disabled={!previous}
              onClick={prevPage}
            >
              previous
            </Button>

            <Button
              id="butt"
              size="sm"
              disabled={!next}
              className={next ? "active" : "notActive"}
              onClick={nextPage}
            >
              next
            </Button>

            {chars.map(char => (
              <div className="card">
                <h1>Name:{char.name}</h1>
                <p>height:{char.height}</p>
                <p>mass:{char.mass}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
