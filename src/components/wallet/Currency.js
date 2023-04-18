import React from "react";
import { Avatar, Heading, Badge, Flex, Link } from "@chakra-ui/react";

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
        <Link ml="20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </Link>
      </Flex>
    </Flex>
  );
}
export default Currency;
