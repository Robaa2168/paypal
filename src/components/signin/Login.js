

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Login.module.css";
import {
  Card,
  VStack,
  FormControl,
  Input,
  Center,
  Avatar,
  FormErrorMessage,
  Button,
  Link,
  Heading,
  Text,
} from "@chakra-ui/react";

const Image =
  "data:image/png;base64,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";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
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
      <Card w="40%" ml="auto" mr="auto" my="5%">
        <div>
          <Center>
            {" "}
            <Avatar name="logo" src={Image} m="5%" mb="5%" />
          </Center>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} maxW="70%" mx="auto">
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                <Input
                  id="email"
                  pt="10"
                  pb="10"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  {...formik.getFieldProps("email")}
                />

                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.password && formik.touched.password}
              >
                <Input
                  id="password"
                  pt="10"
                  pb="10"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  {...formik.getFieldProps("password")}
                />

                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                <a href="./">
                  {" "}
                  <Heading as="h4" size="md" my="3" className="text-primary">
                    Fogot password?
                  </Heading>
                </a>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                width="50%"
                className=" rounded-pill"
              >
                <Link href="/">Login</Link>
              </Button>
            </VStack>
          </form>

          <Center>
            <a href="./">
              {" "}
              <Heading as="h4" size="md" my="3" className="text-primary">
                Try another way
              </Heading>
            </a>
          </Center>
          <div className={styles.loginSignUpSeparator}>
            <span className={styles.textInSeparator}>or</span>
          </div>
          <VStack spacing={4} maxW="70%" mx="auto" mb="3%">
            <Link
              href="/signup"
              className="btn btn-outline-primary rounded-pill hover-light"
              w="50%"
              p="8px"
            >
              Sign Up
            </Link>
            <div className="row m-4">
              <div
                className="col"
                style={{ borderRight: 1 + "px solid black" }}
              >
                {" "}
                <Link href="/" w="50%" p="8px">
                  English
                </Link>
              </div>
              <div
                className="col"
                style={{ borderRight: 1 + "px solid black" }}
              >
                {" "}
                <Link href="/" w="50%" p="8px">
                  Francais
                </Link>
              </div>
              <div
                className="col"
                style={{ borderRight: 1 + "px solid black" }}
              >
                {" "}
                <Link href="/" w="50%" p="8px">
                  Espanol
                </Link>
              </div>
              <div className="col">
                {" "}
                <Link href="/" w="50%" p="8px">
                  中文
                </Link>
              </div>
            </div>
          </VStack>
        </div>
      </Card>
      <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="text-center"
      >
        <Text mt="40" fontSize="xl">
          ©2023 PayPal Privacy Legal Contact Feedback
        </Text>
      </div>
    </>
  );
};

export default Login;