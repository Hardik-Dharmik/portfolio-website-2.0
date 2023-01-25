import React from "react";
import ProjectItem from "./ProjectItem";
import SectionHeading from "./SectionHeading";
import { projects } from "../utils/projectInfo";

function Projects() {
  return (
    <div className="container mx-auto px-4 sm:p-2 min-h-screen" id="projects">
      <SectionHeading heading="Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-5 mt-4">
        {projects.map(
          ({
            projectName,
            projectDesc,
            isDeployed,
            githubUrl,
            projectUrl,
            techStacks,
          }) => (
            <ProjectItem
              name={projectName}
              desc={projectDesc}
              isDeployed={isDeployed}
              githubUrl={githubUrl}
              projectUrl={projectUrl}
              techStacks={techStacks}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
