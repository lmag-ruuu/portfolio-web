import { FC } from "react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";
import { Box, Flex } from "@chakra-ui/react";

const Container: FC = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <hr />
      <Box minH="100vh" minW="100vh">
        {children}
      </Box>
      <hr />
      <Footer />
    </Box>
  );
};

export default Container;
