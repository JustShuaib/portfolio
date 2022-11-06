import Demo from "./demo";
import Github from "./github";
import { projectTypes } from "../pages/index";

const Projects = ({ projects }: { projects: projectTypes[] }) => {
  return (
    <section>
      <h2 className="text-center text-xl md:text-2xl">
        Projects <span className="text-royal-blue">.</span>
      </h2>
      <div className="my-6 grid gap-8 md:grid-cols-3">
        {projects.map(({ id, name, about, stack, demo, code }) => (
          <section
            key={id}
            className="flex flex-col border border-royal-blue p-6 md:transition-all md:duration-300 md:hover:scale-110"
          >
            <h3 className="text-center text-lg font-semibold dark:text-gray-100">
              {name}
            </h3>
            <p className="text-sm tracking-wide">{about}</p>
            <ul className="my-3 flex flex-wrap items-center gap-3 text-xs font-semibold leading-4 tracking-wide">
              {stack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className="flex items-center gap-x-4">
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 rounded-sm border border-transparent bg-gray-200 px-3 py-2 text-xs transition duration-300 hover:border hover:border-royal-blue dark:bg-box-bg dark:text-light-grey"
              >
                <span>Live Demo</span>
                <Demo />
              </a>
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 rounded-sm border border-transparent bg-gray-200 px-3 py-2 text-xs transition duration-300 hover:border-royal-blue dark:bg-box-bg dark:text-light-grey"
              >
                <span>Source Code</span>
                <Github />
              </a>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};
export default Projects;
