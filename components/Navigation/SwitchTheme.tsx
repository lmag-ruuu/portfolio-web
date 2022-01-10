import { useColorMode, Flex, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FC } from "react";

const SwitchTheme: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex>
      <IconButton
        onClick={toggleColorMode}
        aria-label="Swith theme"
        icon={isDark ? <SunIcon /> : <MoonIcon />}
      />
    </Flex>
  );
};

export default SwitchTheme;
