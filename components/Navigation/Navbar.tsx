import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import NavLink from "./NavLink";
import SwitchTheme from "./SwitchTheme";
import Link from "next/link";

const Links = ["About", "Projects", "Contact"];

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bGradient =
    colorMode === "dark"
      ? "linear(to-l, #1864ab, #4dabf7)"
      : "linear(to-l, #82c91e, #5c940d)";

  const bGradientInvert =
    colorMode === "dark"
      ? "linear(to-l, #4dabf7, #1864ab)"
      : "linear(to-l, #5c940d, #82c91e)";

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Text
            bgGradient={bGradient}
            bgClip="text"
            fontSize="4xl"
            cursor={"pointer"}
            _hover={{
              textDecoration: "none",
              bgGradient: { bGradientInvert },
            }}
          >
            <Link passHref href="/">
              Welcome
            </Link>
          </Text>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} href={`/${link.toLocaleLowerCase()}`}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <SwitchTheme />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink href={link.toLowerCase()} key={link}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
