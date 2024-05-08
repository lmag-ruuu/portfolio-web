import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "./NavLink";
import SwitchTheme from "./SwitchTheme";

const Links = ["Home", "About", "Projects"];

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={{ base: "sm", md: "md" }}
          icon={isOpen ? <CloseIcon color={"gray.900"} /> : <HamburgerIcon color={"gray.900"} />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link} href={`#${link.toLowerCase()}`}>
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
          <Stack as={"nav"} spacing={4} align={"center"}>
            {Links.map((link) => (
              <NavLink href={`#${link.toLowerCase()}`} key={link}>
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
