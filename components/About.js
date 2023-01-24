import Image from "next/image";

function About() {
  return (
    <div className="container px-4 sm:p-2 mx-auto min-h-screen" id="about">
      <h1 className="text-4xl text-white font-mono my-4">About</h1>
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
            especially Indian History, Geopolitics.
          </p>

          <br />
          <p className="text-gray-400">
            I have worked on many Web development projects. I have also worked
            on NLP projects in my college.
          </p>
        </div>
        {/* Image */}
        <div className="mx-auto">
          <img src="/hd.png" className="mt-5 h-4/5 w-3/5 mx-auto rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default About;
