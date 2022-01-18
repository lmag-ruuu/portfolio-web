import React from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import Head from "next/head";
import {
  Container,
  ContainerProps,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import BackgroundDark from "./BackgroundDark";
import BackgroundLight from "./BackgroundLight";

type ContainerLayoutProps = {
  children: React.ReactNode;
  maxW?: ContainerProps["maxW"];
};

const ContainerLayout = ({
  maxW = "container.xl",
  children,
}: ContainerLayoutProps) => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <VStack spacing={4} align="stretch">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ruben&apos; Web</title>
      </Head>
      <Navbar />
      <Container maxW={maxW}>{children}</Container>
      <Footer />
      <Portal>
        {colorMode === "dark" ? <BackgroundDark /> : <BackgroundLight />}
      </Portal>
    </VStack>
  );
};

export default ContainerLayout;
