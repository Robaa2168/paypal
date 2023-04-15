import React from "react";
import TopLogo from "./TopLogo";
import * as Yup from "yup";
import { useFormik } from "formik";
import differenceInYears from "date-fns/differenceInYears";
import {
  VStack,
  Heading,
  Box,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Link,
  Select,
  Checkbox,
  Text,
} from "@chakra-ui/react";
function Step3() {
  const formik = useFormik({
    initialValues: {
      nationality: "",
      dob: "",
      idType: "",
      idNo: "",
      addressOne: "",
      addressTwo: "",
      city: "",
      postalCode: "",
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      nationality: Yup.string().required("Nationality is Required"),
      dob: Yup.date()
        .required("Date Of Birth is Required")
        .test("dob", "You must be over 18 years", function (value) {
          return differenceInYears(new Date(), new Date(value)) >= 18;
        }),
      idType: Yup.string().required("Id Type is Required"),
      idNo: Yup.string().required("Id Number is Required"),
      addressOne: Yup.string().required("Address 1 is Required"),
      addressTwo: Yup.string().optional(),
      city: Yup.string().optional(),
      postalCode: Yup.string().required("Postal Code is Required"),
    }),
  });

  return (
    <>
      <TopLogo />
      <VStack w="50%" mr="auto" ml="auto">
        <Heading as="h1">Add your Address</Heading>
        <Heading as="h6" size="md">
          Use the one that's on your bills
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  !!formik.errors.nationality && formik.touched.nationality
                }
              >
                <Select placeholder="Nationality" size="lg">
                  <option value="kenya">Kenya</option>
                  <option value="uganda">Uganda</option>
                  <option value="tanzania">Tanzania</option>
                </Select>
                <FormErrorMessage>{formik.errors.nationality}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.dob && formik.touched.dob}
              >
                <Input
                  pt="7"
                  pb="7"
                  id="dob"
                  name="dob"
                  type="date"
                  placeholder=""
                  {...formik.getFieldProps("dob")}
                />
                <FormErrorMessage>{formik.errors.dob}</FormErrorMessage>
              </FormControl>
              <div className="row w-100 ">
                <div className="col">
                  <FormControl
                    isInvalid={!!formik.errors.idType && formik.touched.idType}
                  >
                    <Select placeholder="Id Type" size="lg">
                      <option value="national_is">National Id</option>
                      <option value="passport_number">Passport Number</option>
                      <option value="others">Others</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.idType}</FormErrorMessage>
                  </FormControl>
                </div>
                <div className="col ">
                  <FormControl
                    isInvalid={!!formik.errors.idNo && formik.touched.idNo}
                  >
                    <Input
                      pt="7"
                      pb="7"
                      type="text"
                      id="idNo"
                      name="idNo"
                      placeholder="ID Number"
                      {...formik.getFieldProps("idNo")}
                    />
                    <FormErrorMessage>{formik.errors.idNo}</FormErrorMessage>
                  </FormControl>
                </div>
              </div>

              <FormControl
                isInvalid={
                  !!formik.errors.addressOne && formik.touched.addressOne
                }
              >
                <Input
                  pt="7"
                  pb="7"
                  type="text"
                  id="addressOne"
                  name="addressOne"
                  placeholder="Address 1"
                  {...formik.getFieldProps("addressOne")}
                />
                <FormErrorMessage>{formik.errors.addressOne}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  !!formik.errors.addressTwo && formik.touched.addressTwo
                }
              >
                <Input
                  pt="7"
                  pb="7"
                  type="text"
                  id="addressTwo"
                  name="addressTwo"
                  placeholder="Address 2"
                  {...formik.getFieldProps("addressTwo")}
                />
                <FormErrorMessage>{formik.errors.addressTwo}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.city && formik.touched.city}
              >
                <Input
                  pt="7"
                  pb="7"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  {...formik.getFieldProps("city")}
                />
                <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  !!formik.errors.postalCode && formik.touched.postalCode
                }
              >
                <Input
                  pt="7"
                  pb="7"
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Postal Code"
                  {...formik.getFieldProps("postalCode")}
                />
                <FormErrorMessage>{formik.errors.postalCode}</FormErrorMessage>
              </FormControl>
              <Box>
                <Checkbox className="float-start">
                  Stay logged in for faster checkout{" "}
                  <a href="./#">
                    <span className="glyphicon glyphicon-question-sign text-primary"></span>
                  </a>
                </Checkbox>
                <Checkbox className="float-start">
                  I confirm that i have read,consent and agrerd to PayPal's{" "}
                  <a href="./#" className="text-primary">
                    User Agreement
                  </a>{" "}
                  and{" "}
                  <a href="./#" className="text-primary">
                    Policy Statement
                  </a>{" "}
                  and am of legal age.I understand that i can change my
                  communication preference anytime in my PayPall account
                </Checkbox>
              </Box>

              <Button
                type="submit"
                colorScheme="blue"
                width="30%"
                className=" rounded-pill"
              >
                <Link href="/step4">Agree and Create Account</Link>
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
      <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="text-center"
      >
        <Text mt="45" fontSize="xl">
          ©2023 PayPal Privacy Legal Contact Feedback
        </Text>
      </div>
    </>
  );
}

export default Step3;
