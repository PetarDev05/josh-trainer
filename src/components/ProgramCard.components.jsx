const ProgramCard = ({ program }) => {
  return (
    <div className="w-full max-w-80 bg-(--card-bg) border border-(--border) p-5 flex flex-col items-start gap-5 rounded-xl">
      <h2 className="">{program.title}</h2>
      <p className="">$ {program.price} / month</p>
      <p className="">{program.description}</p>
      <ul className="text-(--light)">
        {program.features.map((feature, i) => (
          <li key={i} className="">
            {feature}
          </li>
        ))}
      </ul>
      <button className="">Purchase now</button>
    </div>
  );
};

export default ProgramCard;
