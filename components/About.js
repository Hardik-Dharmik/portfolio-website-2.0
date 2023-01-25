import SectionHeading from "./SectionHeading";
import { SiLeetcode, SiCodechef } from "react-icons/si";

function About() {
  return (
    <div className="container px-4 sm:p-2 mx-auto min-h-screen" id="about">
      <SectionHeading heading="About" />
      <div className="flex flex-col sm:flex-row justify-between">
        {/* About  */}
        <div className="sm:w-3/5 mx-auto sm:ml-0">
          <p className="text-gray-400 leading-relaxed">
            Hi, My name is Hardik Dharmik, a final year undergrad student at{" "}
            <a href="http://www.rknec.edu/" className="text-teal font-semibold">
              Shri Ramdeobaba College Of Engineering and Management, Nagpur
            </a>
            . I am a good and keen learner, always eager and curious to learn
            new things. My strength includes smart and hard work along with good
            skill of time management. I am the person who loves to live a
            disciplined life.
          </p>
          <br />
          <p className="text-gray-400">
            {" "}
            I am a curious and fast learner and always ready to gain knowledge.
            Apart from computer science, I am very much interested in History
            especially Indian History and Geopolitics.
          </p>

          <br />
          <p className="text-gray-400">
            I have worked on many Web development projects. I have also worked
            on NLP projects in my college. Also I am a{" "}
            <span className="text-teal font-semibold">
              5 star coder at CodeChef
            </span>
            and has solved around{" "}
            <span className="text-teal font-semibold">
              700+ coding problems
            </span>{" "}
            across platforms.
          </p>

          <div className="flex justify-evenly mt-6">
            <div className="flex flex-col items-center justify-center space-y-1 text-gray-300 hover:text-teal cursor-pointer">
              <a
                href="https://leetcode.com/hardikdharmik9401/"
                target="_blank"
                className="flex flex-col items-center justify-cente space-y-1"
              >
                <SiLeetcode className="" size="2.5rem" />
                <p className=" ">LeetCode</p>
              </a>
            </div>

            <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-teal cursor-pointer">
              <a
                href="https://www.codechef.com/users/hd94"
                target="_blank"
                className="flex flex-col items-center justify-cente space-y-1"
              >
                <SiCodechef className="" size="2.5rem" />
                <p className=" ">CodeChef</p>
              </a>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="mx-auto">
          <img src="/hd.png" className="mt-5 h-3/5 w-3/5 mx-auto rounded-md" />
        </div>
      </div>
      <hr
        className="text-gray-600
        w-full mx-auto mt-20 h-0 my-auto"
      />
    </div>
  );
}

export default About;
