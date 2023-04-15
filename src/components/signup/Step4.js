import React from "react";
import TopLogo from "./TopLogo";
import ActivityCard from "./ActivityCard";
import { VStack, Heading, Link, Text } from "@chakra-ui/react";
import CardData from "../../SystemData/CardData";

function Step4() {
  const render = CardData.map((card) => {
    return (
      <>
        <ActivityCard key={card.id} {...card} />
      </>
    );
  });

  return (
    <div>
      <TopLogo />
      <VStack mr="auto" ml="auto">
        <Heading as="h1">What do you want to try first?</Heading>
        <Heading as="h6" size="md" my="20px">
          Join over 400 milion people using PayPay globaly
        </Heading>
        {render}

        <div className="mt-5">
          <Link href="/" m="20">
            <Heading as="h3" className="text-primary">
              Not Now
            </Heading>
          </Link>
        </div>
      </VStack>
      <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="text-center"
      >
        <Text fontSize="xl">©2023 PayPal Privacy Legal Contact Feedback</Text>
      </div>
    </div>
  );
}

export default Step4;
