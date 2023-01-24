import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-bgDark">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}
