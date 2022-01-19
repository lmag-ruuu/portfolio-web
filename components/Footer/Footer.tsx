import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactNode } from "react";
import MyName from "./MyName";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = colorMode === "dark" ? "#1864ab" : "#087f5b";
  const hoverColor = colorMode === "dark" ? "#087f5b" : "#1864ab";
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          &copy; <strong>2022</strong> With love.{" "}
          <Text display={"inline"} fontWeight={700} padding={1} rounded={2}>
            <MyName />
          </Text>
        </Text>
        <Stack direction={"row"} spacing={6} align={"center"}>
          <Text fontWeight={"700"}>Contact</Text>
          <Link
            href="https://www.linkedin.com/in/rub%C3%A9n-perozo-8b72b3200/"
            isExternal
          >
            <FaLinkedin color={iconColor} size={35} />
          </Link>
          <Link href="https://github.com/lmag-ruuu/" isExternal>
            <FaGithub color={iconColor} size={35} />
          </Link>
          <Link href="https://twitter.com/lmag_ruuu" isExternal>
            <FaTwitter color={iconColor} size={35} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
