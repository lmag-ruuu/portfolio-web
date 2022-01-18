import { FC } from "react";
import classes from "./MyName.module.css";
import { useColorMode } from "@chakra-ui/react";

const TextName: FC = () => {
  const { colorMode } = useColorMode();
  return (
    <p className={colorMode === "dark" ? classes.myName : classes.myNameLight}>
      <span>Ruben</span>s<span>Magdiel</span>
    </p>
  );
};

export default TextName;
