import type { NextPage } from "next";
import Layout from "../src/components/Layout";
import Famicon from "../src/components/Famicon";

const Home: NextPage = () => {
  return (
    <Layout>
      <Famicon />
    </Layout>
  );
};

export default Home;
