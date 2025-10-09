import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="pt-36 pb-16">
      {/* HEADING */}
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
        <p className="font-playfair font-semibold text-4xl mb-5 text-yellow">
          RESUME
        </p>
            <div className="flex justify-center md:justify-start">
                <LineGradient width="w-2/3" />
            </div>
        <p className="mt-10">
          Mechatronics Engineer with 4+ years of experience in RPA automation, database management, and systems analysis. Skilled in UiPath, SQL,
          and web service integrations, focused on building efficient solutions
          and ensuring software quality.
        </p>
      </motion.div>

      {/* CONTENT: EXPERIENCIA & EDUCACION */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* EXPERIENCIA PROFESIONAL */}

        <div>
          <h3 className="font-playfair font-bold text-2xl mb-5 text-yellow">
            PROFESSIONAL EXPERIENCE
          </h3>
          <div className="mb-10">
            <p className="font-semibold mb-2">Inbursa</p>
            <div className="ml-5">
            <p>Systems Analyst</p>
            <p className="text-sm text-gray-500">2022 – 2025</p>
          </div>
          </div>
          <div>
            <p className="font-semibold mb-2">BeeckerCo</p>
            <div className="ml-5">
            <p>RPA Developer</p>
            <p className="text-sm text-gray-500">2020 – 2022</p>
          </div>
          </div>
        </div>

        {/* EDUCACION */}
        <div>
          <h3 className="font-playfair font-bold text-2xl mb-5 text-yellow">
            EDUCATION
          </h3>
          <div>
            <p className="font-semibold mb-2">B.S. in Mechatronics Engineering</p>
            <div className="ml-5">
            <p>
              Tecnológico de Estudios Superiores de Chimalhuacán
            </p>
            <p className="text-sm text-gray-500">2021</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
