import { useState, useEffect } from "react";
import Link from "next/link";
const routes = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/about",
    text: "About",
  },
  {
    to: "/projects",
    text: "Projects",
  },
  {
    to: "/resume",
    text: "Resume",
  },
];
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    navOpen
      ? document.body.classList.add("fixed")
      : document.body.classList.remove("fixed");
  }, [navOpen]);
  return (
    <nav className="flex items-center justify-between px-6 py-7 md:px-14">
      <div className="flex basis-full justify-end md:hidden">
        <button
          type="button"
          onClick={() => setNavOpen((open) => !open)}
          aria-label="toggle side navigation menu"
          className="relative top-5 z-20 flex flex-col items-end transition-all duration-700 ease-in-out"
        >
          <span
            className={`my-1 h-px bg-black transition-all duration-300 ease-linear dark:bg-white ${
              navOpen ? "w-8 rotate-45" : "w-9"
            }`}
          ></span>
          <span
            className={`my-1 h-px bg-black transition-all duration-300 ease-linear dark:bg-white ${
              navOpen ? "relative -top-2 w-8 -rotate-45" : "w-6"
            }`}
          ></span>
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 z-10 min-h-screen w-full bg-gray-300 bg-opacity-20 backdrop-blur-sm transition-all duration-500 dark:bg-black dark:bg-opacity-10 md:visible md:static md:min-h-0 md:w-auto md:translate-x-0 ${
          navOpen ? "translate-x-0" : "translate-x-[100rem]"
        }`}
      >
        <div
          className={`fixed right-0 min-h-screen w-4/5 flex-col items-center justify-center gap-x-6 bg-gray-50 text-lg dark:bg-black md:static md:flex md:min-h-0 md:w-auto md:flex-row md:text-sm ${
            navOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-y-8 gap-x-6 md:flex-row md:text-base">
            {routes.map(({ to, text }, i) => (
              <li key={i}>
                <Link
                  className="md:transition md:duration-500 md:hover:text-royal-blue"
                  href={to}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
