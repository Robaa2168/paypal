import React from "react";
import { Card, Image, Text, CardBody, CardFooter } from "@chakra-ui/react";

const ImageLogo =
  "https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg";

function LogoCard() {
  return (
    <Card m="2%">
      <CardBody maxW="100">
        <Image src={ImageLogo} boxSize="50px" />
      </CardBody>
    </Card>
  );
}

export default LogoCard;
