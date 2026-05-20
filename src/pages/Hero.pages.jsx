import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex items-center justify-center min-h-screen px-5"
    >
      <motion.div
        initial={{ y: 35, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center justify-center gap-5"
      >
        <h1 className="max-w-170 text-3xl md:text-4xl lg:text-5xl">
          Build Strength. Burn Fat. Stay Consistent.
        </h1>
        <p className="w-full max-w-130 md:max-w-170 text-center text-(--text) text-sm sm:text-[16px]">
          Personalized training programs designed to help you get stronger, move
          better, and achieve long-term results without wasting time on
          ineffective workouts.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <a href="#contact">
            <button className="hover:bg-(--light) text-(--light) hover:text-(--dark) transition-all duration-200">
              Start Your Journey
            </button>
          </a>
          <a href="#programs">
            <button className="hover:bg-(--light) text-(--light) hover:text-(--dark) transition-all duration-200">
              View programs
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
