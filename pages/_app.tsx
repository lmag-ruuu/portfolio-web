import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Container";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
