import React from "react";
import { Avatar, Heading, Badge, Flex, Link } from "@chakra-ui/react";
import AddCurrencyModal from "./AddCurrencyModal";

function Currency({ image, name, amount, sign }) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      w="40%"
      p="2"
    >
      <Avatar
        src={image}
        mr={{ base: "0", md: "2" }}
        mb={{ base: "2", md: "0" }}
      />
      <Flex direction="row" flex="1">
        <Heading as="h2" size="md" mb="1" mr="5%">
          {name} <Badge colorScheme="blue">PRIMARY</Badge>
        </Heading>
        <Heading as="h3" size="sm" ml="10%">
          {sign} {amount}
        </Heading>
        <span className="mb-3" style={{ marginLeft: 10 + "%", }}>
          {" "}
          {<AddCurrencyModal />}
        </span>
      </Flex>
    </Flex>
  );
}
export default Currency;
