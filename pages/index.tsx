import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = colorMode === "dark" ? "#1864ab" : "#5c940d";
  const lineColor = colorMode === "dark" ? "#1864ab" : "#d8f5a2";
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={1} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={1} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
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
              Hi, i&apos; Magdiel
            </Text>
            <br />{" "}
            <Text fontSize={28} color={color} as={"span"}>
              A self-taught frontend developer
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            I am a very passionate person, I like music, video games,
            programming, pokémon, I am someone curious who is always learning
            something new, I do web development with react, typescript and
            believe it or not, I like javascript.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Text>TECNOLOGIAS</Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={"center"} justify={"center"}>
        <Image
          alt={"Magdiel Draw"}
          boxSize="600px"
          objectFit={"cover"}
          src={"https://i.imgur.com/c29l9om.jpg"}
          borderTopRadius={"45%"}
        />
      </Flex>
    </Stack>
  );
}
