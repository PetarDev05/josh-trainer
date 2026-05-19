import { IoIosCheckmarkCircle } from "react-icons/io";

const ProgramCard = ({ program }) => {
  return (
    <div className="w-full max-w-80 bg-(--card-bg) border border-(--border) p-5 flex flex-col items-start gap-4 rounded-xl">
      <h3 className="text-xl lg:text-xl text-(--light)">{program.title}</h3>
      <p className="text-lg text-(--light)">$ {program.price} / month</p>
      <p className="text-sm text-(--text)">{program.description}</p>
      <ul className="text-(--light) flex flex-col items-start gap-3">
        {program.features.map((feature, i) => (
          <li key={i} className="flex flex-row items-center gap-2">
            <IoIosCheckmarkCircle className="text-(--success) text-lg" />
            {feature}
          </li>
        ))}
      </ul>
      <a href="#contact">
        <button className="hover:bg-(--light) text-(--light) hover:text-(--dark) transition-all duration-200">
          Start now
        </button>
      </a>
    </div>
  );
};

export default ProgramCard;
