import React from "react";
import {
  Card,
  CardHeader,
  Flex,
  Text,
  CardBody,
  Center,
} from "@chakra-ui/react";

function ActivityCard({ icon, name, description }) {
  return (
    <div>
      <Card w="40%" ml="auto" mr="auto" my="10px">
        <CardHeader>
          <Flex color="white">
            <Center w="10%">
              <Text>
                {" "}
                <span class={icon}></span>
              </Text>
            </Center>
            <Center w="80%" mr="auto" ml="auto">
              <Text fontSize="4xl">
                <span className="text-dark">{name}</span>
              </Text>
            </Center>
            <Center w="10%">
              <Text>
                <a href="/">
                  <span class="glyphicon glyphicon-arrow-right text-dark"></span>
                </a>
              </Text>
            </Center>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text maxW="80%" ml="auto" mr="auto">
            {description}
          </Text>
        </CardBody>
      </Card>
    </div>
  );
}

export default ActivityCard;
