import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import graphic1 from "../../Images/HomePageGraphic.png";
import Logo2 from "../../Images/Logo2.png";
type Props = {};

const FirstIntro = (props: Props) => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          {/* <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 2,
                bg: "#FFC132",
                zIndex: -10,
              }}
            >
              <Image src={Logo2} alt="logo2" />
            </Text>
            <br />{" "}
            <Text color={"#5D0000"} as={"span"}>
              W E F I T
            </Text>{" "}
          </Heading> */}
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text position="relative" display="inline-block">
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 1,
                  bg: "#FFC132",
                  zIndex: -10,
                }}
              ></Text>
              <Image
                src={Logo2}
                alt="logo2"
                mb="-15%"
                // transform="translateY(-50%)"
                zIndex="-2"
              />
              <Text bg="transparent" color={"#5D0000"} as={"span"}>
                W E F I T
              </Text>{" "}
            </Text>
          </Heading>

          <Text fontSize={{ base: "md", lg: "lg" }} color={"#5D0000"}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"#FFC132"}
              color="#5D0000"
              _hover={{
                bg: "#FF7362",
              }}
            >
              Join Now
            </Button>
            <Button rounded={"full"}>Learn More</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image mt={10} alt={"Login Image"} objectFit={"cover"} src={graphic1} />
      </Flex>
    </Stack>
  );
};

export default FirstIntro;
