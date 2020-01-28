import React from "react";
import { Card, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function CharCard(props) {
  console.log("improps from charcard", props);
  let history = useHistory();
  // let location = useLocation();
  // console.log("im loc from charcard", location);
  return (
    <Card className="cardCon">
      <CardTitle className="head">{props.char.name}</CardTitle>
      <CardSubtitle>Height: {props.char.height}</CardSubtitle>
      <CardText>
        The best Character that starwars has ever truly known off the rip homie
        G
      </CardText>
      <Button
        onClick={() =>
          history.push(`/char/${props.char.name}`, { url: props.char.url })
        }
        className="cardButton"
      >
        Learn More
      </Button>
    </Card>
  );
}
