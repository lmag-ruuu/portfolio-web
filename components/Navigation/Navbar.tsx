import { FC } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import SwitchTheme from "./SwitchTheme";
import NavLink from "./NavLink";
import classes from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <header className={classes.navheader}>
      <Flex align="center" p={6}>
        <span className={classes.myName}>
          Ruben&apos;s <br />
          Front-End Developer
        </span>
        <Spacer />
        <Flex gap={12}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
        </Flex>

        <Spacer />
        <Flex gap={6} align="center">
          <NavLink href="/contact">Contact</NavLink>
          <SwitchTheme />
        </Flex>
      </Flex>
    </header>
  );
};

export default Navbar;
