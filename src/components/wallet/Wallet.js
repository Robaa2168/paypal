import React from "react";
import LogoCard from "./cards/LogoCard";
import LinkToYourCard from "./cards/LinkToYourCard";
import Currency from "./Currency";
import CurrencyData from "../../SystemData/CurrencyData";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Button,
  Grid,
  GridItem,
  VStack,
  Center,
  HStack,
  Link,
} from "@chakra-ui/react";

function Wallet() {
  const render = CurrencyData.map((item) => (
    <Currency key={item.id} {...item} />
  ));

  return (
    <Grid
      templateAreas={`"header header"
                  "left right"
                  `}
      gridTemplateRows={"35% 1fr 7%"}
      gridTemplateColumns={"1fr 1fr"}
      gap={{ base: 2, md: 4 }}
      fontWeight="bold"
    >
      <GridItem pl="2" bg="blue" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" area={"left"} m={{ base: 2, md: 5 }}>
        <VStack spacing={6} align="stretch">
          <Center>
            <LinkToYourCard />
          </Center>
          <Center>
            <Button variant="solid">Link a card</Button>
          </Center>
          <Center>
            <Card
              direction={{ base: "column", md: "row" }}
              overflow="hidden"
              variant="outline"
              w={{ base: "90%", md: "70%" }}
              ml="auto"
              mr="auto"
              borderColor={"blue"}
            >
              <LogoCard />

              <Stack>
                <CardBody>
                  <Heading>PayPal Balance</Heading>
                  <Heading size="md">$ 0.00 Available</Heading>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    PREFFERED
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </Center>
        </VStack>
      </GridItem>
      <GridItem pl="2" area={"right"}>
        <VStack spacing={6} align="stretch">
          <Center>
            <LogoCard />
          </Center>
          <Center>
            <Heading>PayPal Balance</Heading>
          </Center>
          <Center>
            <Heading>$ 0.00</Heading>
          </Center>
          <Center>
            <Heading>Estimated total of all currencies</Heading>
          </Center>
          <Center>
            <button className="btn btn-primary rounded-pill btn-lg">
              Send Payments
            </button>
          </Center>
          <VStack>{render}</VStack>
          <Center>
            <HStack>
              <Link href="./" color="blue">
                <Heading pl={{ base: 2, md: 15 }}> Add a currency</Heading>
              </Link>
              <Link href="./" color="blue">
                <Heading pl={{ base: 2, md: 15 }}>Curency Calculator</Heading>
              </Link>
            </HStack>
          </Center>
        </VStack>
      </GridItem>
    </Grid>
  );
}

export default Wallet;
