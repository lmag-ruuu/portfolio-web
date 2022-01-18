import {
  Link as ChakraLink,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, ReactNode } from "react";

const Link: FC<{ children: ReactNode; href: string }> = (props) => {
  const { colorMode, setColorMode } = useColorMode();
  const darkBtn = {
    textDecoration: "none",
    bg: useColorModeValue("#212529", "#212529"),
    color: "#1864ab",
  };
  const lightBtn = {
    textDecoration: "none",
    bg: useColorModeValue("#f8f9fa", "#f8f9fa"),
    color: "#5c940d",
  };

  return (
    <NextLink passHref href={props.href}>
      <ChakraLink
        px={8}
        py={3}
        fontWeight={"bold"}
        rounded={"md"}
        _hover={colorMode === "dark" ? darkBtn : lightBtn}
      >
        {props.children}
      </ChakraLink>
    </NextLink>
  );
};

export default Link;
