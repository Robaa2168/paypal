import React from "react";
import { Image, Center, Box } from "@chakra-ui/react";
import styles from './cards.module.css'

const ImageLogo =
  "https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg";

function LogoCard() {
  return (
    <Center h={{ base: "8%", sm: "10%" }} color="white" p="5%">
      <Box className="card border-muted p-3 " w="fit-content">
        <Image src={ImageLogo} boxSize={{ base: "30px", sm: "40px" }} />
      </Box>
    </Center>
  );
}

export default LogoCard;
