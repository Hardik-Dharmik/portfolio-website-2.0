function Main() {
  return (
    <div className="container px-4 sm:p-2 mx-auto flex flex-col items-center sm:items-start sm:min-h-screen  pt-5">
      <p className="text-teal font-mono my-5">Hello, My name is</p>
      <h1 className="text-7xl text-center font-semibold text-gray-200 my-5">
        Hardik Dharmik
      </h1>
      <h1 className="text-6xl text-center text-gray-400 font-semibold">
        A Computer Science Undergrad
      </h1>
      <p className="text-gray-400 text-center sm:text-left my-5 sm:w-4/5">
        I am a final undergrad student studying at{" "}
        <a href="http://www.rknec.edu/" className="text-teal font-semibold">
          Shri Ramdeobaba College Of Engineering and Management, Nagpur
        </a>
        . My curious mindset always makes me learn new things .
      </p>

      <a
        href="https://drive.google.com/file/d/1fFhzyPvt2THGKYGwJoD_a6Po_K7NvHDb/view?usp=share_link"
        target="_blank"
        className="px-6 py-2 border border-teal hover:bg-emerald-500 font-mono text-white rounded-md my-5"
      >
        RESUME
      </a>

      <hr
        className="text-gray-600
        w-full mx-auto mt-3 h-0 my-auto"
      />
    </div>
  );
}

export default Main;
