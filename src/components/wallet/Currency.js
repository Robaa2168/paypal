import React from "react";
import { Avatar, Heading, Badge } from "@chakra-ui/react";

function Currency({ image, name, amount, sign }) {
  return (
    <div class="container w-50 p-2">
      <div class="row">
        <div class="col-2 float-start">
          <Avatar src={image} />
        </div>
        <div class="col">
          {" "}
          <Heading>
            {name} <Badge colorScheme="blue">PRIMARY</Badge>
          </Heading>{" "}
        </div>
        <div class="col float-end">
          <Heading>
            {sign} {amount}
          </Heading>{" "}
        </div>
      </div>
    </div>
  );
}

export default Currency;
