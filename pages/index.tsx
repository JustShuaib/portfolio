import Head from "next/head";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import { GetStaticProps } from "next";
import { Source_Code_Pro, Mukta } from "@next/font/google";
const sourceCodePro = Source_Code_Pro();
const mukta = Mukta({ weight: ["400", "500", "700"], display: "swap" });
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
        <main className="p-6">
          <header className="text-center">
            <h1 className="text-xl">
              Hi, I&apos;m{" "}
              <p
                className={`text-3xl text-blue-700 dark:text-royal-blue ${sourceCodePro.className}`}
              >
                Adeoti Shuaib
              </p>
            </h1>
            <p className="mt-3 text-sm md:text-base">
              A detail-oriented frontend web developer providing web solutions
              that are accessible, maintainable, and scalable.
            </p>
          </header>
          <Projects projects={projects} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const res = require("projects.json");
  const { projects } = res;
  return {
    props: {
      projects,
    },
  };
};
export default Home;
