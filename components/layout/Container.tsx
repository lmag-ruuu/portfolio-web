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

import Home from "../../pages/index";
import About from "../../pages/about/index";
import Projects from "../../pages/projects/index";

type ContainerLayoutProps = {
  children: React.ReactNode;
  maxW?: ContainerProps["maxW"];
};

const ContainerLayout = ({ maxW = "100vw" }: ContainerLayoutProps) => {
  const { colorMode } = useColorMode();
  return (
    <VStack spacing={4} align="stretch">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ruben&apos;s Frontend Developer</title>
      </Head>
      <Navbar />
      <Container maxW={maxW} scrollBehavior={"smooth"}>
        <Home />
        <About />
        <Projects />
      </Container>
      <Footer />
    </VStack>
  );
};

export default ContainerLayout;
