import Head from "next/head";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import { GetStaticProps } from "next";
import { Source_Code_Pro, Mukta } from "@next/font/google";
import Technologies from "../components/technologies";
const sourceCodePro = Source_Code_Pro({
  weight: ["400"],
  subsets: ["cyrillic"],
  display: "swap",
});
const mukta = Mukta({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
export type projectTypes = {
  id: string;
  name: string;
  about: string;
  stack: string[];
  demo: string;
  code: string;
};

const Home = ({ projects }: { projects: projectTypes[] }) => {
  return (
    <>
      <Head>
        <title>JustShuaib</title>
        <meta name="description" content="Portfolio site of Shuaib" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "bg-gray-50 dark:bg-black dark:text-gray-200 " + mukta.className
        }
      >
        <Navbar />
        <header className="p-6 pb-0 text-center">
          <h1 className="text-xl">
            Hi, I&apos;m{" "}
            <span
              className={`block text-3xl text-blue-700 dark:text-royal-blue ${sourceCodePro.className}`}
            >
              Adeoti Shuaib
            </span>
          </h1>
          <p className="mt-3 text-sm md:mx-auto md:max-w-lg md:text-lg">
            A detail-oriented frontend web developer providing web solutions
            that are accessible, maintainable, and scalable.
          </p>
        </header>
        <main className="px-6">
          <Projects projects={projects} />
          <Technologies />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const res: { projects: projectTypes[] } = require("projects.json");
  const { projects } = res;
  return {
    props: {
      projects,
    },
  };
};
export default Home;
