import Head from "next/head";
import About from "../components/About";
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
      <About />
    </div>
  );
}
