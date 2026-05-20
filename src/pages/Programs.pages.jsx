import ProgramCard from "../components/ProgramCard.components.jsx";
import { programs } from "../data/programs.data.js";
import { motion } from "motion/react";

const Programs = () => {
  return (
    <section
      id="programs"
      className="w-full min-h-screen flex items-center justify-center px-5 py-15"
    >
      <motion.div
        initial={{ y: 35, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center justify-center gap-5"
      >
        <h2 className="max-w-80 min-[850px]:max-w-150 text-2xl md:text-3xl lg:text-4xl">
          Training programs
        </h2>
        <p className="w-full max-w-80 min-[850px]:max-w-150 text-center text-(--text)">
          Chose the options that best fits your experience level, budget and
          goals.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Programs;
