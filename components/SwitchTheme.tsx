import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";

import { useState, FC } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const SwitchTheme: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex>
      <Switch
        color="green"
        isChecked={isDark}
        onChange={toggleColorMode}
      ></Switch>
    </Flex>
  );
};

export default SwitchTheme;
