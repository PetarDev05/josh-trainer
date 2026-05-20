import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col min-[850px]:flex-row items-center justify-center gap-7 px-5 py-15"
    >
      <motion.div
        initial={{ y: 35, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col min-[850px]:flex-row items-center justify-center gap-5"
      >
        <img
          src="/josh.jpg"
          alt="coach-image"
          className="w-full max-w-80 rounded-2xl"
        />
        <div className="flex flex-col items-start gap-5">
          <h2 className="max-w-80 min-[850px]:max-w-150 text-2xl md:text-3xl lg:text-4xl">
            Hi, my name is Josh
          </h2>
          <p className="w-full max-w-80 min-[850px]:max-w-130 text-(--text)">
            I’m a certified personal trainer focused on helping people build
            sustainable habits, improve physical performance, and achieve
            long-term fitness results. My coaching approach is built around
            structure, consistency, and realistic progress. Whether your goal is
            building muscle, losing fat, or improving overall fitness, every
            program is tailored to your current level and lifestyle.
          </p>
          <a href="#contact">
            <button className="hover:bg-(--light) text-(--light) hover:text-(--dark) transition-all duration-200">
              Get in touch
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
