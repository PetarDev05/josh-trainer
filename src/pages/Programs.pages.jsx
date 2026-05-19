import ProgramCard from "../components/ProgramCard.components.jsx";
import { programs } from "../data/programs.data.js";

const Programs = () => {
  return (
    <section id="programs" className="w-full min-h-screen flex flex-col items-center justify-center gap-5 px-5 py-15">
      <h2 className="max-w-80 min-[850px]:max-w-150 text-2xl md:text-3xl lg:text-4xl">Training programs</h2>
      <p className="w-full max-w-80 min-[850px]:max-w-150 text-center text-(--text)">Chose the options that best fits your experience level, budget and goals.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
};

export default Programs;
