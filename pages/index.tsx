import { Flex, Spacer, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Ruben&apos;s, Frontend Developer</title>
        <meta content="description" name="Ruben's Portfolio Page" />
      </Head>
      <main>
        <section>
          <Flex>
            <Heading>Adelante amigues</Heading>
            <Spacer />
            <Image
              src={"/magruu.jpg"}
              alt="a drawing of me, with glasses and dark blue clothes"
              width="800px"
              height="800px"
            />
          </Flex>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
