import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function CharCard(props) {
  return (
    <Card className="cardCon">
      <CardTitle className="head">{props.char.name}</CardTitle>
      <CardSubtitle>Height: {props.char.height}</CardSubtitle>
      <CardText>
        The best Character that starwars has ever truly known off the rip homie
        G
      </CardText>
      <Button className="cardButton">Go somewhere</Button>
    </Card>
  );
}
