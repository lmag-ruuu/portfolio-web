import {
  Box,
  Container,
  SimpleGrid,
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

const ProjectSection: FC = () => {
  const [isLargerThan1120] = useMediaQuery("(max-width: 1120px)");
  const justCtn = isLargerThan1120 ? "center" : "start";
  const { colorMode } = useColorMode();
  const bgCol = colorMode === "dark" ? "#181818" : "#e1e0e0";
  return (
    <Container maxW={"7xl"} p="12" bgColor={bgCol}>
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
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Card
            image={"https://i.imgur.com/jApRUrc.png"}
            technology={["html", "css", "javascript"]}
            title={"PokeSearch"}
            link={"https://lmag-pokesearch.netlify.app/"}
            description={
              "My first personal project, I was very excited to finish it, it's a pokemon finder that tells you stats about them."
            }
          />
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Card
            image={"https://i.imgur.com/JBYa9sX.png"}
            technology={["html", "css"]}
            title={"PortFolio Fake"}
            link={"https://codepen.io/lmag-ruu/full/zYEemyv"}
            description={
              "This was my final project for the freecodecamp certificate, it is my favorite project and the one I love the most."
            }
          />
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Card
            image={"https://i.imgur.com/RpqVgb5.jpg"}
            technology={["html", "css", "javascript"]}
            title={"Omnifood"}
            link={"https://lmagruu-omnifood.netlify.app/"}
            description={
              "One of the final projects done in Jonas' HTML course, is a fake startup food service, was the beginning of everything"
            }
          />
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Card
            image={"https://i.imgur.com/HsVMfpb.jpg"}
            technology={["nextjs", "chakra", "typescript"]}
            title={"Portfolio"}
            link={"#"}
            description={
              "One of my biggest projects, here I put into practice many things I have learned throughout my courses."
            }
          />
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Card
            image={
              "https://i.picsum.photos/id/896/600/600.jpg?hmac=Wq1oWSmP86R1o9b5kEmaUldvNKpz1HH_f1aZsN00b74"
            }
            technology={["typescript", "nextjs", "css"]}
            title={"Meetups"}
            link={"#"}
            description={
              "A small application for adding and viewing descriptions of well-known places. For this project only use module.css"
            }
          />
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Card
            image={
              "https://i.picsum.photos/id/401/600/600.jpg?hmac=kmInLc4JtDzlTjaQYrK7Hb1T8MHt-DYN9xNy3e-whc4"
            }
            technology={["nextjs", "typescript", "css"]}
            title={"Quotes"}
            link={"#"}
            description={
              "A small app to add conversation topics and give opinions about them, like the meetups one, use module.css"
            }
          />
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default ProjectSection;
