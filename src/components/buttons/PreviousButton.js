import React from "react";
import { Button } from "reactstrap";

export default function previousButton(props) {
  return (
    <Button
      id="butt"
      size="sm"
      className={props.previous ? "active" : "notActive"}
      disabled={!props.previous}
      onClick={props.prevPage}
    >
      previous
    </Button>
  );
}
