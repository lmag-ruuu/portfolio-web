import {
  Box,
  Container,
  SimpleGrid,
  useColorMode,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FC } from "react";
import Card from "../../components/cardProjects/CardProject";

const ProjectSection: FC = () => {
  const [isLargerThan1120] = useMediaQuery("(max-width: 1120px)");
  const { colorMode } = useColorMode();
  const bgCol = colorMode === "dark" ? "#181818" : "#e1e0e0";
  return (
    <Container maxW={"7xl"} p="0 12 12 12" bgColor={bgCol}>
      <Box p={12}>
        <Heading textAlign={"center"} mb={4}>
          My projects
        </Heading>
        <Text fontSize="2xl">
          These are some works that I have done to be able to share the things
          that I am able to do, there are some that I have not shown here, that
          are in my codepen and also in my github.
        </Text>
        <SimpleGrid
          minChildWidth={isLargerThan1120 ? "300px" : "260px"}
          spacing="40px"
        >
          <Card
            image={"https://i.imgur.com/jApRUrc.png"}
            technology={["HTMl", "CSS", "JavaScript"]}
            title={"PokeSearch"}
            link={"https://lmag-pokesearch.netlify.app/"}
            description={"a"}
          />
          <Card
            image={"https://i.imgur.com/jApRUrc.png"}
            technology={["HTMl", "CSS", "JavaScript"]}
            title={"PortFolio Fake"}
            link={"https://lmag-pokesearch.netlify.app/"}
            description={"a"}
          />
          <Card
            image={"https://i.imgur.com/jApRUrc.png"}
            technology={["HTMl", "CSS", "JavaScript"]}
            title={"Omnifood"}
            link={"https://lmag-pokesearch.netlify.app/"}
            description={"a"}
          />
          <Card
            image={"https://i.imgur.com/jApRUrc.png"}
            technology={["HTMl", "CSS", "JavaScript"]}
            title={"Portfolio"}
            link={"https://lmag-pokesearch.netlify.app/"}
            description={"a"}
          />
          <Card
            image={"https://i.imgur.com/jApRUrc.png"}
            technology={["HTMl", "CSS", "JavaScript"]}
            title={"Meetups"}
            link={"https://lmag-pokesearch.netlify.app/"}
            description={"a"}
          />
          <Card
            image={"https://i.imgur.com/jApRUrc.png"}
            technology={["HTMl", "CSS", "JavaScript"]}
            title={"Quotes"}
            link={"https://lmag-pokesearch.netlify.app/"}
            description={"a"}
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ProjectSection;
