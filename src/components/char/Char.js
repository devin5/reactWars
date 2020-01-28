import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

export default function Char() {
  const [char, setChar] = useState({});
  let location = useLocation();
  console.log("im loc from charcard", location);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/${id}/`)
      .then(res => console.log("im from char", res));
  }, []);

  return <></>;
}
