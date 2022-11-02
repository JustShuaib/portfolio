import Demo from "./demo";
import ExtLink from "./extLink";
import Github from "./github";
const Projects = () => {
  return (
    <section>
      <h2 className="text-center text-xl md:text-2xl">
        Projects<span className="text-royal-blue">.</span>
      </h2>
      <div className="my-6 grid gap-6 px-6 md:grid-cols-3">
        <section className="flex flex-col border border-royal-blue p-6 md:transition-all md:duration-300 md:hover:scale-110">
          <h3 className="text-center text-lg font-semibold dark:text-gray-100">
            Fitfest
          </h3>
          <p className="text-sm tracking-wider">
            A project showing a variety of exercises with illustrations,
            exercises videos on Youtube, and similar exercises
          </p>
          <ul className="my-3 flex flex-wrap items-center gap-3 text-xs font-semibold leading-4 tracking-wide">
            {["React.js", "MUI", "Vite", "Swiper"].map((tech, i) => (
              <li
                key={i}
                // className="rounded border border-royal-blue px-3 py-1.5"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-4">
            <a
              href="https://fitfest.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 rounded-sm border border-transparent bg-gray-200 px-3 py-2 text-xs transition hover:border hover:border-royal-blue dark:bg-box-bg dark:text-light-grey"
              // className="inline-flex items-center justify-start gap-x-1 text-xs dark:text-light-grey hover:text-white"
            >
              {/* <FaEye /> */}
              <span>Live Demo</span>
              {/* <Demo /> */}
              <ExtLink />
            </a>
            <a
              href="https://github.com/JustShuaib/fitfest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 rounded-sm border border-transparent bg-gray-200 px-3 py-2 text-xs transition hover:border-royal-blue dark:bg-box-bg dark:text-light-grey"
              // className="flex items-center gap-x-1 text-xs hover:text-white dark:text-light-grey"
            >
              <span>Source Code</span>
              <Github />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Projects;
