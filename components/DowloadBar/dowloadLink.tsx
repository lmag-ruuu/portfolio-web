import { Link as ChakraLink } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface path {
  children?: ReactNode;
  path: string;
  fileName: string;
}

export default function DowloadLink(props: path) {
  const { colorMode } = useColorMode();
  const bgCol = colorMode === "dark" ? "blue.500" : "green.500";
  return (
    <Button
      size="md"
      height="48px"
      width="200px"
      border="2px"
      borderColor={bgCol}
    >
      <ChakraLink href={props.path} download={props.fileName}>
        {props.children}
      </ChakraLink>
    </Button>
  );
}
