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
import boyJpg from "../../public/static/job-image.svg";
import AboutTags from "../../components/aboutCpn/aboutTags";

const Experience = () => {
  const { colorMode } = useColorMode();
  const bgCol = colorMode === "dark" ? "#181818" : "#f8f9fa";
  const [isLargerThan630] = useMediaQuery("(max-width: 600px)");
  const justCtn = isLargerThan630 ? "center" : "start";

  return (
    <Container
      id="about"
      maxW={"7xl"}
      bgColor={bgCol}
      pt={6}
      pl={{ base: 0, lg: "3rem" }}
      pr={{ base: 0, lg: "3rem" }}
      mt={12}
      mb={12}
      pb={6}
      borderRadius={"6px"}
    >
      <Heading textAlign={"center"} as="h1">
        Experience
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        mb={14}
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
            <Image
              src={boyJpg}
              alt="drawing of a person on his computer"
              objectFit="contain"
            />
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
        >
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
            pl={6}
          >
            <Link href="https://aluxion.com/">
              <AboutTags tags={["Aluxion"]} bgCol="blackAlpha" />
            </Link>
            <Heading marginTop="1">
              <Text as={"h1"}>Frontend Developer</Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              As a web developer at aluxion, I was in several squads to work on a variety of projects, in angular, vue, php and finally react, where we focused our efforts on improving in this technology and doing most of our solutions in this one.
            </Text>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              From November 2021 to April 2023
            </Text>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "6" }}
            pl={6}
          >
            <Link href="https://www.blindcreator.com/">
              <AboutTags tags={["Blind Creator"]} bgCol="blue" />
            </Link>
            <Heading marginTop="1">
              <Text as={"h1"}>Frontend Developer</Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Blind Creator is a startup focused on agencies and influencers, we developed our platform in NextJs, we got to work a monorepo for a private library using turborepo, here I got to lead some sprints and develop myself more as a fullstack NextJs.
            </Text>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              From April 2023 to May 2024
            </Text>
          </Box>
        </Box>
      </Box>
      <Divider marginTop="5" />
    </Container>
  );
};

export default Experience;
