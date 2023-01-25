import SectionHeading from "./SectionHeading";
import {
  SiCplusplus,
  SiBootstrap,
  SiTailwindcss,
  SiCss3,
  SiGithub,
  SiNetlify,
  SiPostman,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVisualstudiocode,
} from "react-icons/si";

import {
  DiDatabase,
  DiDjango,
  DiGit,
  DiGithub,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiNpm,
} from "react-icons/di";
import Technology from "./Technology";

function Technlogies() {
  return (
    <div
      className="container mx-auto px-4 sm:p-2 min-h-screen mt-5"
      id="technologies"
    >
      <SectionHeading heading={"Technologies"} />

      <div className="grid grid-cols-3 md:grid-cols-6 gap-y-6">
        <Technology Icon={SiBootstrap} name="Bootstrap" />
        <Technology Icon={SiCplusplus} name="C/C++" />
        <Technology Icon={SiCss3} name="CSS" />
        <Technology Icon={DiDatabase} name="Database" />
        <Technology Icon={DiDjango} name="Django" />
        <Technology Icon={DiGit} name="Git" />
        <Technology Icon={SiGithub} name="GitHub" />
        <Technology Icon={DiHtml5} name="HTML" />
        <Technology Icon={DiJava} name="Java" />
        <Technology Icon={DiJavascript} name="Javascript" />
        <Technology Icon={DiMongodb} name="MonogDB" />
        <Technology Icon={SiNetlify} name="Netlify" />
        <Technology Icon={SiNextdotjs} name="NextJS" />
        <Technology Icon={DiNodejs} name="NodeJS" />
        <Technology Icon={DiNpm} name="NPM" />
        <Technology Icon={SiPostman} name="Postman" />
        <Technology Icon={SiPython} name="Python" />
        <Technology Icon={SiReact} name="ReactJS" />
        <Technology Icon={SiTailwindcss} name="TailwindCSS" />
        <Technology Icon={SiVisualstudiocode} name="VSCode" />
      </div>

      <hr
        className="text-gray-600
        w-full mx-auto mt-20 h-0 my-auto"
      />
    </div>
  );
}

export default Technlogies;
