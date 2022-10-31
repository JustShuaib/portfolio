import Head from "next/head";
import Navbar from "../components/navbar";
import Projects from "../components/projects";

const Home = () => {
  return (
    <>
      <Head>
        <title>JustShuaib</title>
        <meta name="description" content="Portfolio site of Shuaib" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100 dark:bg-black dark:text-gray-300">
        <Navbar />
        <header className="text-center p-6">
          <h1 className="text-xl">
            Hi, I&apos;m{" "}
            <p className="text-3xl text-blue-700 dark:text-royal-blue font-source-code">
              Adeoti Shuaib
            </p>
          </h1>
          <p className="text-sm mt-3">
            A detail-oriented frontend web developer providing web solutions
            that are accessible, maintainable, and scalable.
          </p>
        </header>
        <Projects />
      </main>
    </>
  );
};
export default Home;
