import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
  Link as ChakraLink,
} from "@chakra-ui/react";

import Technologies from "../components/componentsHome/Technologies";
import DowloadBar from "../components/DowloadBar/dowloadBar";

export default function Home() {
  const [isLargerThan767] = useMediaQuery("(max-width: 767px)");
  const [isLargerThan479] = useMediaQuery("(max-width: 479px)");

  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "#1864ab" : "#5c940d";
  const lineColor = colorMode === "dark" ? "#1864ab" : "#5c940d";
  const textColor = colorMode === "dark" ? "#e9ecef" : "#343a40";
  const paddingTop = isLargerThan767 ? 10 : 0;

  const cvItems = [
    { name: "CV Ruben ENG", path: "/static/cv-ruben-magdiel-ENG.pdf" },
    { name: "CV Ruben ESP", path: "/static/cv-ruben-magdiel.pdf" },
  ];

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} id="home">
      <Flex
        pl={{ base: 0, lg: "3rem" }}
        pr={{ base: 0, lg: "3rem" }}
        flex={1}
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={1} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            pt={paddingTop}
          >
            <Text
              as={"span"}
              position={"relative"}
              color={textColor}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: lineColor,
                zIndex: -1,
              }}
            >
              Hi, I&apos;m Magdiel
            </Text>
            <br />{" "}
            <Text fontSize={28} color={color} as={"span"}>
              A self-taught frontend developer
            </Text>{" "}
          </Heading>
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "md", lg: "lg" }}
            color={textColor}
          >
            I am a very passionate person, I like music, video games,
            programming, pokémon, I am someone curious who is always learning
            something new, I do web development with react, typescript and
            believe it or not, I like javascript.
          </Text>
          <Technologies />
          <DowloadBar file={cvItems} />
        </Stack>
      </Flex>
      <Flex flex={1} align={"center"} justify={"center"}>
        <Image
          mt={{ base: isLargerThan479 ? 8 : 0, sm: 8 }}
          ml={{ base: 0, md: 12 }}
          alt={"Magdiel Draw"}
          boxSize="450px"
          objectFit={"cover"}
          src={"/static/lmagcut.webp"}
          boxShadow={`0 0 10px #343a40`}
          borderRadius={"16% 84% 3% 97% / 95% 4% 96% 5% "}
        />
      </Flex>
    </Stack>
  );
}
