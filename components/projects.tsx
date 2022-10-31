const Projects = () => {
  return (
    <section>
      <h2 className="text-xl text-center">
        Projects <span className="text-royal-blue">.</span>
      </h2>
      <div className="grid my-6 px-6 gap-6 md:grid-cols-3">
        <section className="flex p-8 flex-col backdrop-blur-sm border border-royal-blue transition-all duration-300 md:hover:scale-110">
          <h3 className="text-lg font-semibold text-white">Fitfest</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            HTML + CSS + JAVASCRIPT + AJAX + DJANGO + PAYSTACK PAYMENT GATEWAY +
            POSTGRESQL + AWS
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-10">
            A project showing a variety of exercises with illustrations,
            exercises videos on Youtube, and similar exercises
          </p>
          <div className="flex items-center gap-x-4">
            <a
              href="https://summit.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              {/* <FaEye /> */}
              <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/E-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              {/* <FaCodeBranch /> */}
              <span>Code</span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Projects;
