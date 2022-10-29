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
    document.body.classList.toggle("fixed");
  }, [navOpen]);
  return (
    <nav className="flex items-center justify-between bg-opacity-80 px-6 py-7 shadow-sm md:px-14">
      <div className="flex md:hidden basis-full justify-end">
        <button
          type="button"
          onClick={() => setNavOpen((open) => !open)}
          aria-label="toggle side navigation menu"
          className="flex flex-col items-end z-20 transition-all duration-700 ease-in-out"
        >
          <span
            className={`my-1 h-px bg-white transition-all duration-200 ease-linear ${
              navOpen ? "w-8 rotate-45" : "w-9"
            }`}
          ></span>
          <span
            className={`my-1 h-px bg-white transition-all duration-200 ease-linear ${
              navOpen ? "relative -top-2 w-8 -rotate-45" : "w-6"
            }`}
          ></span>
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 z-10 min-h-screen w-full bg-gray-900 bg-opacity-30 md:static md:min-h-0 md:w-auto ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <div
          className={`fixed right-0 min-h-screen w-4/5 flex-col items-center justify-center gap-x-6 bg-black text-lg md:static md:flex md:min-h-0 md:w-auto md:flex-row md:text-sm ${
            navOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-y-8 gap-x-6 md:flex-row">
            {routes.map(({ to, text }, i) => (
              <li key={i}>
                <Link
                  href={to}
                  // className={({ isActive }) =>
                  //   isActive ? "text-royal-blue" : ""
                  // }
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
