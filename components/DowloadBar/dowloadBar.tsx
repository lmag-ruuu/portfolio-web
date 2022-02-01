import { Flex } from "@chakra-ui/react";
import DowloadLink from "./dowloadLink";
import { useMediaQuery } from "@chakra-ui/react";
type file = {
  name: string;
  path: string;
};

interface propsBar {
  file: file[];
}

export default function DowloadBar(props: propsBar) {
  const [isLargerThan430] = useMediaQuery("(max-width: 430px)");
  const [isLargerThan479] = useMediaQuery("(max-width: 479px)");

  return (
    <Flex
      minChildWidth="120px"
      flexDirection={isLargerThan430 ? "column" : "row"}
      gap={{ base: isLargerThan479 ? 4 : 20, sm: 8 }}
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
