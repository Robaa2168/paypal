import React from "react";
import LogoCard from "./cards/LogoCard";
import LinkToYourCard from "./cards/LinkToYourCard";
import Currency from "./Currency";
import CurrencyData from "../../SystemData/CurrencyData";
import SendPaymentsModal from "./SendPaymentsModal";
import styles from "./Wallet.module.css";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Button,
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
    <div className={styles.gridContainer}>
      <div className={styles.item1}>Header</div>
      <div className={styles.item2}>
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
      </div>
      <div className={styles.item3}>
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
            <SendPaymentsModal />
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
      </div>
      <div className={styles.item4}></div>
    </div>
  );
}

export default Wallet;
