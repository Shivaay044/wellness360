import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import graphic2 from "../../Images/BenefitsPageGraphic.png";

type Props = {};

const SecondIntro = (props: Props) => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image mt={10} alt={"Login Image"} objectFit={"cover"} src={graphic2} />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
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
              <Text bg="transparent" color={"#5D0000"} as={"span"}>
                MILLIONS OF HAPPY MEMBERS GETTING FIT
              </Text>{" "}
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"#5D0000"}
            align="justify"
          >
            Join millions of happy members who are getting fit with our
            platform! Our comprehensive suite of features and tools is designed
            to help you achieve your fitness goals and lead a healthy lifestyle.
            <br />
            <br />
            From personalized goal tracking and workout routines to nutritional
            guidance and community support, we offer everything you need to make
            informed choices about your wellness journey. Join us today and
            start your journey towards a healthier, happier you!
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
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default SecondIntro;
