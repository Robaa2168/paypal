import React from "react";
import { Text } from "@chakra-ui/react";
function Footer() {
  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto" }}
      className="text-center"
    >
      <Text bottom={0} fontSize="xl">
        ©2023 PayPal Privacy Legal Contact Feedback
      </Text>
    </div>
  );
}

export default Footer;
