import Head from "next/head";
import About from "../components/About";
import Education from "../components/Education";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-bgDark">
      <Head>
        <title>Hardik Dharmik</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Education />
      <Projects />
    </div>
  );
}
