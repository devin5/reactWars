import React from "react";
import { Card, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";

export default function SpeciesCard(props) {
  return (
    <Card className="cardCon">
      <CardTitle className="head">{props.species.name}</CardTitle>
      <CardSubtitle>Language: {props.species.language}</CardSubtitle>
      <CardText>
        The best Character that starwars has ever truly known off the rip homie
        G
      </CardText>
      <Button className="cardButton">Learn More</Button>
    </Card>
  );
}
