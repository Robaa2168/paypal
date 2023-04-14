import React from "react";
import { useFormik } from "formik";
import TopLogo from "./TopLogo";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  VStack,
  Link,
  Text,
} from "@chakra-ui/react";
import * as Yup from "yup";
// import styles from "./Signup.module.css";

const Step2 = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      firstName: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("First Name is Required"),
      lastName: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Last Name is Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol")
        .required("Password is Required"),
    }),
  });

  return (
    <>
      <TopLogo />
      <VStack w="50%" mr="auto" ml="auto">
        <Heading as="h1">Set up your profile</Heading>
        <Heading as="h6" size="md">
          This info needs to be acurate
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                <Input
                  pt="7"
                  pb="7"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
              >
                <Input
                  pt="7"
                  pb="7"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.lastName && formik.touched.lastName}
              >
                <Input
                  pt="7"
                  pb="7"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  {...formik.getFieldProps("lastName")}
                />
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.password && formik.touched.password}
              >
                <Input
                  pt="7"
                  pb="7"
                  id="password"
                  name="password"
                  placeholder="Create your password"
                  type="password"
                  {...formik.getFieldProps("password")}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                width="30%"
                className=" rounded-pill"
              >
                <Link href="/step3">Next</Link>
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
      <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="text-center"
      >
        <Text mt="230" fontSize="xl">
          ©2023 PayPal Privacy Legal Contact Feedback
        </Text>
      </div>
    </>
  );
};

export default Step2;
