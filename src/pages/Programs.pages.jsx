import ProgramCard from "../components/ProgramCard.components.jsx";
import { programs } from "../data/programs.data.js";

const Programs = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-5 px-5">
      <h1 className="">Training programs</h1>
      <p className="">Chose the options that best fits your exxperiance level, budget and goals.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
};

export default Programs;
