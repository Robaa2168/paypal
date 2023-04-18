import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Center,
  Avatar,
  HStack,
  Heading,
  VStack,
  Link,
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function Signup() {
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "too short")
        .max(10, "too long")
        .required("Phone Number is Required"),
    }),
  });

  const formWidth = useBreakpointValue({ base: "90%", md: "60%", lg: "30%" });

  return (
    <Box bg="white" w="100%" minH="100vh">
      <HStack
        spacing={8}
        w={formWidth}
        mx="auto"
        mt={8}
        justifyContent="center"
      >
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.500" }}
          >
            Country <span className="glyphicon glyphicon-chevron-down"></span>
          </MenuButton>
          <MenuList>
            <MenuItem>Kenya</MenuItem>
            <MenuItem>Uganda</MenuItem>
            <MenuItem>Tanzania</MenuItem>
            <MenuItem>Burundi</MenuItem>
          </MenuList>
        </Menu>

  
            <Avatar bg="blue.500" color="white" m="5%" mb="5%">
            </Avatar>
        

        <Button
          colorScheme="blue"
          variant="outline"
          borderColor="blue.500"
          borderWidth="1px"
          _hover={{ borderColor: "blue.600", bg: "blue.100" }}
        >
          Log In
        </Button>
      </HStack>
      <VStack w={formWidth} mx="auto" mt={8}>
        <Heading as="h1" mx="auto" mt={8} size="3xl">
          Sign up for PayPal
        </Heading>
        <Text fontSize={{ base: "md", sm: "xl" }}>
          First, add your number
        </Text>
        <Box p={6} rounded="md" w="100%">
          {/* Rest of the form code */}
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={!!formik.errors.phone && formik.touched.phone}
              >
                <Input
                  id="phone"
                  pt="10"
                  pb="10"
                  name="phone"
                  placeholder="Mobile number"
                  {...formik.getFieldProps("phone")}
                />

                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
<Text color="grey" pt={1}>
By continuing, you confirm that you’re the owner or primary
user of this mobile phone number. You agree to receive
automated texts to confirm your phone number. Message and data
rates may apply.
</Text>
</FormControl>
<Button
            as={Link}
            href="/step1"
            colorScheme="blue"
            borderRadius="full"
            w="50%"
            _hover={{ bg: "blue.600" }}
          >
            Next
          </Button>
        </VStack>
      </form>
    </Box>
  </VStack>
  <Box
    textAlign="center"
    mt="180"
    fontSize={{ base: "md", sm: "xl" }}
  >
    ©2023 PayPal Privacy Legal Contact Feedback
  </Box>
</Box>
);
}

export default Signup;
