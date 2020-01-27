import React from "react";
import { Button } from "reactstrap";

function NextButton(props) {
  return (
    <Button
      id="butt"
      size="sm"
      disabled={!props.next}
      className={props.next ? "active" : "notActive"}
      onClick={props.nextPage}
    >
      next
    </Button>
  );
}

export default NextButton;
