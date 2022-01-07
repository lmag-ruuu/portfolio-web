import { FC } from "react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Container: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <hr />
      <Box width="100vh" height="100vh">
        {children}
      </Box>
      <Footer />
    </div>
  );
};

export default Container;
