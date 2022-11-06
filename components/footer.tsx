import Email from "./email";
import Github from "./github";
import LinkedIn from "./linkedIn";
import Twitter from "./twitter";

const Footer = () => {
  return (
    <footer className="py-6">
      <ul className="grid grid-cols-4 items-center justify-center px-6 md:mx-auto md:max-w-xl">
        <li className="justify-self-center">
          <a
            href="mailto:justshuaib@gmail.com"
            className="group flex flex-col items-center gap-y-1 text-sm transition duration-500 hover:-translate-y-1 hover:text-royal-blue md:text-base"
          >
            <Email />
            Email
          </a>
        </li>
        <li className="justify-self-center">
          <a
            href="https://www.github.com/JustShuaib"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-y-1 text-sm transition duration-500 hover:-translate-y-1 hover:text-royal-blue md:text-base"
          >
            <Github footer />
            Github
          </a>
        </li>
        <li className="justify-self-center">
          <a
            href="https://www.twitter.com/JustShuaib"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-y-1 text-sm transition duration-500 hover:-translate-y-1 hover:text-royal-blue md:text-base"
          >
            <Twitter />
            Twitter
          </a>
        </li>
        <li className="justify-self-center">
          <a
            href="https://www.linkedin.com/in/adeoti-shuaib-55576b186"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-y-1 text-sm transition duration-500 hover:-translate-y-1 hover:text-royal-blue md:text-base"
          >
            <LinkedIn />
            LinkedIn
          </a>
        </li>
      </ul>
      <p className="mt-8 text-center text-xs">
        &copy; {new Date().getFullYear()} Designed and Developed by JustShuaib
      </p>
    </footer>
  );
};

export default Footer;
