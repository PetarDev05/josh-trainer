const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-5 px-5"
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
    </section>
  );
};

export default Hero;
