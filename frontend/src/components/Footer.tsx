// import { ReactNode } from "react";
// import MainLogo from "../Images/Logo.png";

// import {
//   Box,
//   Container,
//   Link,
//   SimpleGrid,
//   Stack,
//   Text,
//   useColorModeValue,
//   Image,
// } from "@chakra-ui/react";

// type Props = {};

// const ListHeader = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
//       {children}
//     </Text>
//   );
// };

// const Footer = (props: Props) => {
//   return (
//     <Box
//       // bg={"#FF6B66"}
//       // bg="tomato"
//       // bg={useColorModeValue("#FF6B66", "gray.900")
//       // bg={useColorModeValue("blue.500", "black")})}
//       //   color={useColorModeValue("gray.700", "gray.200")}
//       //   border="1px solid gray"
//       // borderTop="1px solid gray"

//     >
//       <Container as={Stack} maxW={"10xl"} py={10}>
//         <SimpleGrid
//           templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
//           spacing={8}
//         >
//           <Stack spacing={6}>
//             <Box>
//               <Image src={MainLogo} alt="logo" />
//             </Box>
//             <Text fontSize={"sm"}>© 2023 wefit. All rights reserved</Text>
//           </Stack>
//           <Stack align={"flex-start"}>
//             <ListHeader>Product</ListHeader>
//             <Link href={"#"}>Overview</Link>
//             <Link href={"#"}>Features</Link>
//             <Link href={"#"}>Tutorials</Link>
//             <Link href={"#"}>Pricing</Link>
//             <Link href={"#"}>Releases</Link>
//           </Stack>
//           <Stack align={"flex-start"}>
//             <ListHeader>Company</ListHeader>
//             <Link href={"#"}>About</Link>
//             <Link href={"#"}>Press</Link>
//             <Link href={"#"}>Careers</Link>
//             <Link href={"#"}>Contact</Link>
//             <Link href={"#"}>Partners</Link>
//           </Stack>
//           <Stack align={"flex-start"}>
//             <ListHeader>Support</ListHeader>
//             <Link href={"#"}>Help Center</Link>
//             <Link href={"#"}>Terms of Service</Link>
//             <Link href={"#"}>Legal</Link>
//             <Link href={"#"}>Privacy Policy</Link>
//             <Link href={"#"}>Status</Link>
//           </Stack>
//           <Stack align={"flex-start"}>
//             <ListHeader>Follow Us</ListHeader>
//             <Link href={"#"}>Facebook</Link>
//             <Link href={"#"}>Twitter</Link>
//             <Link href={"#"}>Dribbble</Link>
//             <Link href={"#"}>Instagram</Link>
//             <Link href={"#"}>LinkedIn</Link>
//           </Stack>
//         </SimpleGrid>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;

import { ReactNode } from "react";
import MainLogo from "../Images/Logo.png";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

type Props = {};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = (props: Props) => {
  return (
    <Box bg="#FFCCBC">
      <Container as={Stack} maxW={"10xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image src={MainLogo} alt="logo" />
            </Box>
            <Text fontSize={"sm"}>© 2023 wefit. All rights reserved</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Releases</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
