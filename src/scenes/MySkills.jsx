import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { SiJavascript, SiReact, SiGithub, SiCss3, SiHtml5, SiOracle, SiJira, } from "react-icons/si";
import { TbBrandMysql, TbBrandCSharp } from "react-icons/tb";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-16 pb-24">

      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-yellow">SKILLS</span>
          </p>
            <div className="flex justify-center md:justify-start">
                <LineGradient width="w-2/3" />
            </div>
          <p className="mt-10 mb-7">
            I enjoy solving problems with ingenuity and precision. Creativity, 
            self-learning, and innovation are the foundation of my development.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-3xl text-gray-500">
            <SiJavascript className="hover:text-yellow transition duration-200" />
            <SiReact className="hover:text-sky-500 transition duration-200" />
            <SiCss3 className="hover:text-sky-800 transition duration-200" />
            <SiHtml5 className="hover:text-orange-500 transition duration-200" />
            <SiGithub className="hover:text-grey transition duration-200" />
            <SiJira className="hover:text-grey transition duration-200" />
            <TbBrandMysql className="hover:text-grey transition duration-200" />
            <PiMicrosoftExcelLogoFill className="hover:text-green-600 transition duration-200" />
          </div>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">

        {/* SELF-LEARNING */}
        <motion.div
          className="md:w-1/3 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-4xl mt-3">
                Self-learning
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-15">
           Self-motivation and quick learning. 
           Mastery of new technologies through continuous study and practice.
          </p>
        </motion.div>

        {/* INNOVATION */}
        <motion.div
          className="md:w-1/3 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-4xl mt-3">
                Innovation
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-15">
            I seek innovative solutions that 
            optimize performance and enhance user experience.
          </p>
        </motion.div>

        {/* CRATIVITY */}
        <motion.div
          className="md:w-1/3 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-4xl mt-3">
                Creativity
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-15">
            I use my creativity to solve complex technical 
            problems with bold and efficient approaches.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default MySkills;