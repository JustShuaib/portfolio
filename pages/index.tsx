import Head from "next/head";
import Footer from "../components/footer";
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

      <main className="min-h-screen bg-gray-50 dark:bg-black dark:text-gray-300">
        <Navbar />
        <header className="p-6 text-center">
          <h1 className="text-xl">
            Hi, I&apos;m{" "}
            <p className="font-source-code text-3xl text-blue-700 dark:text-royal-blue">
              Adeoti Shuaib
            </p>
          </h1>
          <p className="mt-3 text-sm">
            A detail-oriented frontend web developer providing web solutions
            that are accessible, maintainable, and scalable.
          </p>
        </header>
        <Projects />
        <Footer />
      </main>
    </>
  );
};
export default Home;
