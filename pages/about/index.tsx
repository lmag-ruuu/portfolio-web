import React from "react";
import {
  Box,
  Heading,
  Link,
  Text,
  Divider,
  Wrap,
  Img,
  WrapItem,
  useColorMode,
  useColorModeValue,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import boySvg from "../../public/static/boy-desktop.svg";
import AboutTags from "../../components/aboutCpn/aboutTags";

const AboutMe = () => {
  const { colorMode } = useColorMode();
  const bgCol = colorMode === "dark" ? "#181818" : "#e1e0e0";
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");
  const justCtn = isLargerThan700 ? "center" : "start";

  return (
    <Container maxW={"7xl"} p="12" bgColor={bgCol}>
      <Heading as="h1">I&apos;ll tell you a little about myself</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={isLargerThan700 ? "column" : "row"}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                src={boySvg}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(teal.900 1px, transparent 1px)",
                "radial(blue.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
          pl={6}
        >
          <AboutTags tags={["StoryTime"]} bgCol="teal" />
          <Heading marginTop="1">
            <Text as={"h1"}>Who i am?</Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            My name is Ruben Magdiel Perozo, I am a baker who loves cooking, in
            2019, a friend awakened in me a curiosity about programming. By 2020
            and due to some events that led me to my computer, I started to
            investigate a world that was more extensive than I thought...
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            After a year of having fun with programming, I decided to take this
            career seriously for my whole life and started to study in a more
            professional way to nurture my knowledge of programming.
          </Text>
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        My achievements
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5" justify={justCtn}>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                isExternal
                href="https://www.udemy.com/certificate/UC-54cdd087-7b56-4ddd-990c-ecd54cd5c027/"
              >
                <Img
                  transform="scale(1.0)"
                  src={"https://i.imgur.com/N0M5r5K.jpg"}
                  alt="certificate"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <AboutTags tags={["UDEMY"]} marginTop="3" bgCol="purple" />
            <Heading fontSize="xl" marginTop="2">
              <Link
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                isExternal
                href="https://www.udemy.com/certificate/UC-54cdd087-7b56-4ddd-990c-ecd54cd5c027/"
              >
                Responsive Website with HTML &amp; CSS
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Taught by Jonas Schmedtmann on Udemy was one of my first steps
              towards becoming a web developer.
            </Text>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Img
                  transform="scale(1.0)"
                  src={"https://i.imgur.com/WQFuhua.png"}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <AboutTags tags={["FREECODECAMP"]} marginTop="3" bgCol="gray" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Responsive Web Design
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              I consider it one of my favorite courses, the challenges and
              projects were very fun to do, I had a great time and learned a
              lot, thanks freecodecamp.
            </Text>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Img
                  transform="scale(1.0)"
                  src={"https://i.imgur.com/9MuP2Eu.png"}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <AboutTags tags={["FREECODECAMP"]} marginTop="3" bgCol="gray" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                JavaScript Algorithms and Data Structures
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              I thought I knew javascript until I did this course, the
              challenges and the projects kept me learning a lot more of
              something I thought I already knew.
            </Text>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Img
                  transform="scale(1.0)"
                  src={"https://i.imgur.com/7bpf2h7.jpg"}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <AboutTags tags={["UDEMY"]} marginTop="3" bgCol="purple" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                React - The Complete Guide
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Taught by Academind by Maximilian Schwarzmüller, Maximilian
              Schwarzmüller on Udemy, one of the longest and most complete
              courses I have ever taken, in fact, I made this entire portfolio
              with the knowledge acquired from this course.
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default AboutMe;
