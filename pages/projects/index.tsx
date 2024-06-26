import {
  Box,
  Container,
  useColorMode,
  Heading,
  Text,
  useMediaQuery,
  Wrap,
  WrapItem,
  Divider,
} from "@chakra-ui/react";
import { FC } from "react";
import Card from "../../components/cardProjects/CardProject";
import Projects from "../../src/Projects";

const ProjectSection: FC = () => {
  const [isLargerThan1120] = useMediaQuery("(max-width: 1120px)");
  const { colorMode } = useColorMode();
  const bgCol = colorMode === "dark" ? "#181818" : "#f8f9fa";
  return (
    <Container
      id="projects"
      maxW={"7xl"}
      bgColor={bgCol}
      pl={{ base: "6px", lg: "3rem" }}
      pr={{ base: "6px", lg: "3rem" }}
      pt={6}
      mb={12}
      borderRadius={"6px"}
    >
      <Heading textAlign={"center"} mb={4}>
        My projects
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={isLargerThan1120 ? "column" : "row"}
        justifyContent="space-between"
      >
        <Text fontSize="2xl">
          These are some works that I have done to be able to share the things
          that I am able to do, there are some that I have not shown here, that
          are in my codepen and also in my github.
        </Text>
      </Box>
      <Divider marginTop="5" />
      <Box
        marginTop="5"
        display={"grid"}
        gridTemplateColumns={"repeat(auto-fit, minmax(min(100%, 375px), 1fr))"}
        gap={4}
      >
        {Projects.map((project) => {
          return (
            <Box
              key={project.title}
              height={"100%"}
            >
              <Card
                image={project.image}
                technology={project.technology}
                title={project.title}
                link={project.link}
                description={project.description}
              />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ProjectSection;
