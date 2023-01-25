import Head from "next/head";
import About from "../components/About";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Technlogies from "../components/Technlogies";

export default function Home() {
  return (
    <div className="bg-bgDark ">
      <Head>
        <title>Hardik Dharmik</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Education />
      <Projects />
      <Technlogies />
      <Footer />
    </div>
  );
}
