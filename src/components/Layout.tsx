import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Famicon Wars</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
