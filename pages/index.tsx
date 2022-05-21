import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../src/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-10">
        <Link href="/host">
          <a className="text-2xl hover:text-red-400">ホスト</a>
        </Link>
        <Link href="/crew">
          <a className="text-2xl hover:text-red-400">クルー</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
