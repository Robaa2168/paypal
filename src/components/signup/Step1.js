import React, { useState } from "react";
import { VStack, Heading, Text, Link } from "@chakra-ui/react";
import TopLogo from "./TopLogo";
import OptVerification from "./opt/OptVerification";

function Step1() {
  const [otp, setOtp] = useState("");
  const onChange = (value) => setOtp(value);
  return (
    <>
      <TopLogo />
      <VStack w="50%" mr="auto" ml="auto" spacing={20}>
        <Heading as="h1" size="2xl">
          Confirm your phone{" "}
        </Heading>
        <Heading as="h6" size="md">
          Code sent to +254 720 202020{" "}
          <span>
            <a href="./">
              <i className="fas fa-edit"></i>
            </a>
          </span>
        </Heading>
        <OptVerification value={otp} valueLength={6} onChange={onChange} />
        <Link
          href="/step2"
          className="btn btn-outline-primary rounded-pill hover-light"
          w="30%"
          p="8px"
        >
          Verify
        </Link>
        <a href="./">
          {" "}
          <Heading as="h4" size="md" my="3" className="text-primary">
            Send code again
          </Heading>
        </a>
      </VStack>
      <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="text-center"
      >
        <Text mt="150" fontSize="xl">
          ©2023 PayPal Privacy Legal Contact Feedback
        </Text>
      </div>
    </>
  );
}

export default Step1;
