import { FC } from "react";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
import SwitchTheme from "./SwitchTheme";
import Link from "next/link";
import classes from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <header className={classes.navheader}>
      <Flex align="center" p={16}>
        <span>Ruben&apos;s</span>
        <Spacer />
        <Flex gap={5}>
          <Link href="/">
            <a>Home</a>
          </Link>
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
