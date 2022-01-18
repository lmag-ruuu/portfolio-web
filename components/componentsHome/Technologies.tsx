import { FC } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
const Technologies: FC = () => {
  return (
    <SimpleGrid
      minChildWidth="40px"
      spacing="40px"
      pt={"40px"}
      pb={"40px"}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <DiHtml5 size={40} color="#ffa94d" />
      <DiCss3 size={40} color="#339af0" />
      <DiJsBadge size={30} color="#ffe066" />
      <DiReact size={40} color="#22b8cf" />
      <SiTypescript size={30} color="#4dabf7" />
      <DiNodejs size={45} color="#087f5b" />
    </SimpleGrid>
  );
};

export default Technologies;
