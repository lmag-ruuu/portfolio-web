import { SimpleGrid } from "@chakra-ui/react";
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
    <SimpleGrid minChildWidth="120px" spacing="40px">
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
    </SimpleGrid>
  );
}
