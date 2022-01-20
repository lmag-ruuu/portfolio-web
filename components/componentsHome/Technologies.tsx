import { FC } from "react";
import { SimpleGrid, useColorMode } from "@chakra-ui/react";
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
const Technologies: FC = () => {
  const { colorMode } = useColorMode();
  const htmlCol = colorMode === "dark" ? "#ff992b" : "#fd7e14";
  const css3Col = colorMode === "dark" ? "#339af0" : "#1864ab";
  const javascriptCol = colorMode === "dark" ? "#fcc419" : "#e67700";
  const reactCol = colorMode === "dark" ? "#22b8cf" : "#0b7285";
  const typescriptCol = colorMode === "dark" ? "#20c997" : "#087f5b";
  const nodejsCol = colorMode === "dark" ? "#94d82d" : "#5c940d";

  return (
    <SimpleGrid
      minChildWidth="40px"
      spacing="40px"
      pt={"40px"}
      pb={"40px"}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <DiHtml5 size={40} color={htmlCol} />
      <DiCss3 size={40} color={css3Col} />
      <DiJsBadge size={30} color={javascriptCol} />
      <DiReact size={40} color={reactCol} />
      <SiTypescript size={30} color={typescriptCol} />
      <DiNodejs size={45} color={nodejsCol} />
    </SimpleGrid>
  );
};

export default Technologies;
