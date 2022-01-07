import { Flex, Spacer, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
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
              src="/public/magruu.jpg"
              alt="una foto mia"
              width={10}
              height={10}
            />
          </Flex>
        </section>
      </main>
    </div>
  );
};

export default Home;
