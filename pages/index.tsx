import Head from "next/head";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>JustShuaib</title>
        <meta name="description" content="Portfolio site of Shuaib" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black text-gray-300">
        <Navbar />
        <header className="text-center mb-10">
          <h1 className="text-2xl">
            Hi, I&apos;m{" "}
            <span className="text-royal-blue animate-typewriter font-source-code overflow-hidden">
              Adeoti Shuaib
            </span>
          </h1>
          <p>Frontend Developer</p>
        </header>
      </main>
    </>
  );
};
export default Home;
