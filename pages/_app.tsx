import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/Container";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
