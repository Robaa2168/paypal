import React from "react";
import {
  Image,
  Center,
} from "@chakra-ui/react";

const ImageLogo =
  "https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg";

function LogoCard() {
  return (
    <Center h="100px" color="white" p="5%">
      <div className="card border-muted p-3">
        <Image src={ImageLogo} boxSize="40px" />
      </div>
    </Center>
  );
}

export default LogoCard;
