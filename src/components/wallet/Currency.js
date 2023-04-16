// import React from "react";
// import { Avatar, Heading, Badge } from "@chakra-ui/react";

// function Currency({ image, name, amount, sign }) {
//   return (
//     <div class="container w-50 p-2">
//       <div class="row">
//         <div class="col-2 float-start">
//           <Avatar src={image} />
//         </div>
//         <div class="col">
//           {" "}
//           <Heading>
//             {name} <Badge colorScheme="blue">PRIMARY</Badge>
//           </Heading>{" "}
//         </div>
//         <div class="col float-end">
//           <Heading>
//             {sign} {amount}
//           </Heading>{" "}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Currency;

import React from "react";
import { Avatar, Heading, Badge, Flex } from "@chakra-ui/react";

function Currency({ image, name, amount, sign }) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      w="40%"
      p="2"
    >
      <Avatar
        src={image}
        mr={{ base: "0", md: "2" }}
        mb={{ base: "2", md: "0" }}
       
      />
      <Flex direction="row" flex="1">
        <Heading as="h2" size="md" mb="1" mr="5%">
          {name} <Badge colorScheme="blue">PRIMARY</Badge>
        </Heading>
        <Heading as="h3" size="sm" ml="10%">
          {sign} {amount}
        </Heading>
      </Flex>
    </Flex>
  );
}
export default Currency;
