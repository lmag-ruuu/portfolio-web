import { Flex } from "@chakra-ui/react";
import DowloadLink from "./dowloadLink";
type file = {
  name: string;
  path: string;
};

interface propsBar {
  file: file[];
}

export default function DowloadBar(props: propsBar) {
  return (
    <Flex
      minChildWidth="120px"
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 8, sm: 10, md: 20 }}
      alignSelf={"center"}
    >
      {props.file.map((fileToLink, index) => {
        return (
          <DowloadLink
            key={index}
            path={fileToLink.path}
            fileName={fileToLink.name}
          >
            Dowload {fileToLink.name}
          </DowloadLink>
        );
      })}
    </Flex>
  );
}
