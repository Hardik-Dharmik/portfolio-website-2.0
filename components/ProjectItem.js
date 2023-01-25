import LaunchIcon from "@mui/icons-material/Launch";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectItem({
  name,
  desc,
  isDeployed,
  githubUrl,
  projectUrl,
  techStacks,
}) {
  return (
    <div className="border border-emerald-300 hover:shadow-md hover:shadow-emerald-700 shadow-lg px-5 py-2 w-5/6 cursor-pointer rounded-lg hover:-translate-y-3 transition duration-500 ease-in-out flex flex-col">
      <div className="flex justify-between my-3">
        <PhonelinkIcon fontSize="medium" className="text-emerald-400 " />

        <div className="flex space-x-3">
          <a href={githubUrl} target="_blank">
            <GitHubIcon className="text-gray-400 hover:text-teal" />
          </a>
          {isDeployed && (
            <a href={projectUrl} target="_blank">
              <LaunchIcon className="text-gray-400 hover:text-teal" />
            </a>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <p className="text-base text-gray-300 my-2 font-bold">{name}</p>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>

      <div className="flex flex-wrap justify-evenly my-4 ">
        {techStacks.map((techStack) => (
          <p className="font-mono text-sm text-gray-500">{techStack}</p>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
