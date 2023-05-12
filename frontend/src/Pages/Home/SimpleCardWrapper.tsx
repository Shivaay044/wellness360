import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};
const SimpleCardWrapper = (props: any) => {
  return (
    <Box p={4} m={5}>
      <Stack spacing={4} as={Container} maxW={"6xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          color="#5D0000"
        >
          Key Features of WEFIT
        </Heading>
        <Text
          color="#5D0000"
          fontSize={{ base: "sm", sm: "lg" }}
          textAlign="center"
        >
          Discover the comprehensive suite of features that WeFit offers to help
          you achieve your fitness goals and make informed choices about your
          wellness journey. From personalized goal tracking and workout routines
          to nutritional guidance and community support, WeFit provides all the
          tools you need to lead a healthy lifestyle. Explore our key features
          below to learn more.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Set Your Goals and Track Your Progress"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Set achievable fitness goals and track your progress with our goal tracking tools, progress analytics, and milestone tracking features."
            }
            href={"#"}
          />
          <Card
            heading={"Customize Your Workout Routines"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Choose from pre-designed workout routines or create custom ones to fit your individual needs and goals, with step-by-step instructions and progress tracking for each exercise."
            }
            href={"#"}
          />
          <Card
            heading={"Eat Well and Stay on Track with Nutritional Guidance"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "t personalized meal plans, recipe suggestions, and calorie tracking tools to make informed choices about your diet based on your preferences and dietary restrictions."
            }
            href={"#"}
          />
          <Card
            heading={"Connect with Like-Minded Individuals in Our Community"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Join our community of like-minded individuals and connect with others, participate in challenges, and engage in discussion groups for support and motivation."
            }
            href={"#"}
          />
          <Card
            heading={
              "Stay on Top of Your Wellness with Reminders and Notifications"
            }
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Stay consistent with your workouts and goals with personalized reminders and notifications tailored to your preferences and schedule."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
};
export default SimpleCardWrapper;
