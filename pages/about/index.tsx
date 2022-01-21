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
import Certificates from "../../src/Certificates";

const tagColor: any = {
  freecodecamp: "gray",
  udemy: "purple",
};

const AboutMe = () => {
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
        I&apos;ll tell you a little about myself 😊
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
            <Text as={"h1"}>Who i am ?</Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            My name is Ruben Magdiel Perozo, I am a baker 🍞 who loves cooking,
            in 2019, a friend awakened in me a curiosity about programming. By
            2020 and due to some events that led me to my computer, I started to
            investigate a world that was more extensive than I thought... 😱
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
      <Heading as="h2" marginTop="5" textAlign={"center"}>
        My achievements
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5" justify={justCtn}>
        {Certificates.map((certificate) => {
          return (
            <WrapItem
              key={certificate.id}
              width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
            >
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                    isExternal
                    href={certificate.link}
                  >
                    <Img
                      transform="scale(1.0)"
                      src={certificate.img}
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
                <AboutTags
                  tags={[certificate.tags.toUpperCase()]}
                  marginTop="3"
                  bgCol={tagColor[certificate.tags]}
                />
                <Heading fontSize="xl" marginTop="2">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                    isExternal
                    href={certificate.link}
                  >
                    {certificate.title}
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  {certificate.description}
                </Text>
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
    </Container>
  );
};

export default AboutMe;
