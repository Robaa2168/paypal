import React from "react";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import LogoCard from "./LogoCard";
import Button from "../buttons/Button";

function BalanceCard() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <LogoCard />

      <Stack>
        <CardBody>
          <a href="./">
            <Heading size="md">PayPal Balance</Heading>
          </a>
          <Text py="2">$ 120.00 Available</Text>
        </CardBody>

        <CardFooter>
          {/* <Button name="PREFFERED"/> */}
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default BalanceCard;
