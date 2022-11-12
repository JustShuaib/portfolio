import CSS from "../icons/css";
import Gatsby from "../icons/gatsby";
import HTML from "../icons/html";
import JavaScript from "../icons/javascript";
import MUI from "../icons/mui";
import Next from "../icons/next";
import React from "../icons/react";
import Redux from "../icons/redux";
import SASS from "../icons/sass";
import StyledComponents from "../icons/styled-components";
import Tailwind from "../icons/tailwind";
import TypeScript from "../icons/typescript";
import Vite from "../icons/vite";

const techs = [
  {
    Icon: <TypeScript />,
    title: "TypeScript",
  },
  {
    Icon: <JavaScript />,
    title: "JavaScript",
  },
  {
    Icon: <Next />,
    title: "Next.js",
  },
  {
    Icon: <React />,
    title: "React.js",
  },
  {
    Icon: <Redux />,
    title: "Redux",
  },
  {
    Icon: <Gatsby />,
    title: "Gatsby",
  },
  {
    Icon: <MUI />,
    title: "Material UI",
  },
  {
    Icon: <Tailwind />,
    title: "Tailwind",
  },
  {
    Icon: <StyledComponents />,
    title: "Styled Components",
  },
  {
    Icon: <SASS />,
    title: "SASS",
  },
  {
    Icon: <CSS />,
    title: "CSS",
  },
  {
    Icon: <HTML />,
    title: "HTML",
  },
  {
    Icon: <Vite />,
    title: "Vite",
  },
];
const Technologies = () => {
  return (
    <section id="technologies" className="my-14">
      <h2 className="mb-3 text-center text-xl md:text-2xl">
        Technologies<span className="text-royal-blue">?</span>
      </h2>
      <div className="flex flex-wrap gap-6 md:justify-center">
        {techs.map(({ Icon, title }, index) => (
          <p key={index} className="flex flex-col items-center gap-y-1">
            {Icon}
            <span>{title}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
