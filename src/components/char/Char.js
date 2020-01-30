import React, { useState, useEffect } from "react";
import { Card, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";
import Loading from "../Loading";
import Header from "../Header";

import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

export default function Char() {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  let location = useLocation();
  let history = useHistory();
  console.log("im loc from charcard", location);
  // let { id } = useParams();
  useEffect(() => {
    axios
      .get(`${location.state.url}`)
      .then(res => (setChar(res.data), setLoading(false)))
      .catch(error => {
        console.log(error);
      });
  }, [location.state.url]);
  console.log("char stater", char);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header title={`${char.name}`} />
          <Card className="cardCon bigcard">
            <Button
              className="return cardButton"
              onClick={history.goBack}
              outline
              color="danger"
            ></Button>
            <CardTitle className="charHead head">{char.name}</CardTitle>
            <CardSubtitle>Height: {char.height}</CardSubtitle>
            <CardSubtitle>Mass: {char.mass}</CardSubtitle>
            <CardSubtitle>Hair Color: {char.hair_color}</CardSubtitle>
            <CardSubtitle>Skin Color: {char.skin_color}</CardSubtitle>
            <CardSubtitle>Eye Color: {char.eye_color}</CardSubtitle>
            <CardSubtitle>Birth Year: {char.birth_year}</CardSubtitle>
            <CardSubtitle>gender: {char.gender}</CardSubtitle>

            <CardText>
              The best Character that starwars has ever truly known off the rip
              homie G
            </CardText>
            <div>
              <Button outline className="cardButton bgbutton">
                Homeworld
              </Button>{" "}
              <Button outline className="cardButton bgbutton">
                Films
              </Button>{" "}
              <Button outline className="cardButton bgbutton">
                Vehicles
              </Button>{" "}
              <Button outline className=" cardButton bgbutton">
                StarShips
              </Button>{" "}
            </div>
          </Card>
        </>
      )}
    </>
  );
}
