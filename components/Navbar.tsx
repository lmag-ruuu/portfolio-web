import { FC } from "react";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
import SwitchTheme from "./SwitchTheme";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <header>
      <Flex align="center" p={6}>
        <span>Ruben&apos;s</span>
        <Spacer />
        <Flex gap={5}>
          <Link href="/">Home</Link>
          <Link href="about">About</Link>
          <Link href="contact">Contact</Link>
        </Flex>

        <Spacer />

        <SwitchTheme />
      </Flex>
    </header>
  );
};

export default Navbar;
