import { FC } from "react";
import { Flex, Spacer } from "@chakra-ui/react";

const Footer: FC = () => {
  return (
    <Flex align="center" p={4}>
      <span>&copy;lMag-Ruu. All Rights Reserved.</span>
      <Spacer />
      <span>Developed by Ruben Perozo</span>
      <Spacer />
      <span>Redes sociales aqui xd</span>
    </Flex>
  );
};

export default Footer;
