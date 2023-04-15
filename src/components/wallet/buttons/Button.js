import React from "react";

function Button(props) {
  return (
    <div>
      {" "}
      <Button variant="solid" colorScheme="blue">
        {props.name}
      </Button>
    </div>
  );
}

export default Button;
