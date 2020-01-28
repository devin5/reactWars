import React from "react";
import { Card, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";

export default function Star(props) {
  return (
    <Card className="cardCon">
      <CardTitle className="head">{props.ship.name}</CardTitle>
      {/* <CardSubtitle>Model: </CardSubtitle> */}
      <CardSubtitle>Manufacturer: {props.ship.manufacturer}</CardSubtitle>
      <CardText> Model: {props.ship.model}</CardText>
      <Button className="cardButton">Learn More</Button>
    </Card>
  );
}
