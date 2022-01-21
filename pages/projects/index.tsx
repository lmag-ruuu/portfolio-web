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
  const justCtn = isLargerThan1120 ? "center" : "start";
  const { colorMode } = useColorMode();
  const bgCol = colorMode === "dark" ? "#181818" : "#e1e0e0";
  return (
    <Container id="projects" maxW={"7xl"} pt={6} borderRadius={"20px"}>
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
      <Wrap spacing="30px" marginTop="5" justify={justCtn}>
        {Projects.map((project) => {
          return (
            <WrapItem
              key={project.title}
              width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
            >
              <Card
                image={project.image}
                technology={project.technology}
                title={project.title}
                link={project.link}
                description={project.description}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Container>
  );
};

export default ProjectSection;
