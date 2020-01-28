import React from "react";
import { Card, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";

export default function FilmCard(props) {
  console.log("filmCard props", props);
  return (
    <Card className="cardCon">
      <CardTitle className="head">{props.film.title}</CardTitle>
      <CardSubtitle>{props.film.director}</CardSubtitle>
      <CardText>
        The best movie that starwars has ever truly known off the rip homie G
      </CardText>
      <Button className="cardButton">Learn More</Button>
    </Card>
  );
}
