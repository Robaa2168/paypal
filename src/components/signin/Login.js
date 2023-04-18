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
  useBreakpointValue,
} from "@chakra-ui/react";


const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => { },
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

  const cardWidth = useBreakpointValue({ base: "90%", md: "70%", lg: "40%" });

  return (
    <>
      <Card
        w={cardWidth}
        ml="auto"
        mr="auto"
        my={{ base: "10%", md: "5%" }}
        bg="white"
        boxShadow="lg"
        borderRadius="lg"
      >
        <div>
          <Center>
            <Avatar bg="blue.500" color="white" m="5%" mb="5%">
            </Avatar>
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
                  borderColor="gray.400"
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
                  borderColor="gray.400"
                  {...formik.getFieldProps("password")}
                />

                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                <Link href="./" color="blue.500">
                  <Heading as="h4" size="md" my="3">
                    Fogot password?
                  </Heading>
                </Link>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                width="50%"
                borderRadius="full"
              >
                <Link href="/">Login</Link>
              </Button>
            </VStack>
          </form>

          <Center>
            <Link href="./" color="blue.500">
              <Heading as="h4" size="md" my="3">
                Try another way
              </Heading>
            </Link>
          </Center>

          <VStack spacing={4} maxW="70%" mx="auto" mb="3%">
            <Link
              href="/signup"
              className="btn btn-outline-primary rounded-pill hover-light"
              w="50%"
              p="8px"
              color="blue.500"
              borderColor="blue.500"
              borderWidth="1px"
              borderRadius="full"
            >
              Sign Up
            </Link>
            <div className="row m-4">
              <div
                className="col"
                style={{ borderRight: 1 + "px solid black" }}
              >
                <Link href="/" w="50%" p="8px">
                  English
                </Link>
              </div>
              <div
                className="col"
                style={{ borderRight: 1 + "px solid black" }}
              >
                <Link href="/" w="50%" p="8px">
                  Francais
                </Link>
              </div>
              <div
                className="col"
                style={{ borderRight: 1 + "px solid black" }}
              >
                <Link href="/" w="50%" p="8px">
                  Espanol
                </Link>
              </div>
              <div className="col">
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
        <Text mt="40" fontSize="xl" color="gray.600">
          ©2023 PayPal Privacy Legal Contact Feedback
        </Text>
      </div>
    </>
  );
};

export default Login;
