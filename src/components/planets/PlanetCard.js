import React from "react";
import { Card, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";

export default function VCard(props) {
  return (
    <Card className="cardCon">
      <CardTitle className="head">{props.planet.name}</CardTitle>
      <CardSubtitle>Model: {props.planet.climate}</CardSubtitle>
      <CardText>
        The best Character that starwars has ever truly known off the rip homie
        G
      </CardText>
      <Button className="cardButton">Learn More</Button>
    </Card>
  );
}
