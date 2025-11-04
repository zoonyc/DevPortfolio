
import { IoLogoDiscord } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/javier-león-rivera-b39ab6238"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-blue-600 w-9 h-9 hover:text-blue-800 transition-colors" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/zoonyc"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareGithub className="text-blue-600 w-9 h-9 hover:text-blue-800 transition-colors" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/z00nyc"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare className="text-blue-600 w-9 h-9 hover:text-blue-800 transition-colors" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/_zoonyc_"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareInstagram className="text-blue-600 w-9 h-9 hover:text-blue-800 transition-colors" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://discordapp.com/users/zoonyc"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoDiscord className="text-blue-600 w-9 h-9 hover:text-blue-800 transition-colors" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;