import type { NextPage } from "next";
import Head from "next/head";
import Assignments from "../src/Assignments";
import Vehicles from "../src/components/Vehicles";

const Home: NextPage = () => {
  return (
    <div className="columns assignment">
      <Head>
        <title>WG Job Interview</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Vehicles />
      </div>
      <Assignments initialAssignment={1} />
    </div>
  );
};

export default Home;
