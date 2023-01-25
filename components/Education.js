import React from "react";
import EducationItem from "./EducationItem";
import SectionHeading from "./SectionHeading";

function Education() {
  return (
    <div className="container mx-auto px-4 sm:p-2 min-h-screen" id="education">
      <SectionHeading heading="Education" />
      <div className="flex flex-col sm:flex-row justify-between my-4 pt-5">
        <EducationItem
          year="2017"
          score="93.8%"
          name="Class X"
          institutionName="Ramesh Chandak English School, Mahal, Nagpur"
          time="June 2016 - March 2017"
          board="Maharashtra State Board of Secondary and Higher Secondary Education."
        />

        <EducationItem
          year="2019"
          score="93.5%"
          name="Class XII"
          institutionName="New English Junior College, Mahal, Nagpur"
          time="June 2018 - March 2019"
          board="Maharashtra State Board of Secondary and Higher Secondary Education."
        />

        <EducationItem
          year="2023"
          score="8.39 CGPA (upto 7th sem)"
          name="B.E. in Computer Science and Engineering"
          institutionName="Shri Ramdeobaba College of Engineering and Management, Gittikhadan, Nagpur"
          time="August 2019 - May 2023"
          isCollege
        />
      </div>
      <hr
        className="text-gray-600
        w-full mx-auto mt-20 h-0 my-auto"
      />
    </div>
  );
}

export default Education;
