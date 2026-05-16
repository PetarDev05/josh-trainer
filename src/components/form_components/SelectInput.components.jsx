const SelectInput = ({ input, handleChange }) => {
  return (
    <div className="relative w-full flex flex-col items-start gap-2">
      <select
        name="trainingLevel"
        value={input.trainingLevel}
        onChange={handleChange}
        className="border border-(--border)"
      >
        <option className="bg-(--card-fill-bg)" value="">
          Select your training level
        </option>
        <option className="bg-(--card-fill-bg)" value="begginer">
          Begginer
        </option>
        <option className="bg-(--card-fill-bg)" value="intermediate">
          Intermediate
        </option>
        <option className="bg-(--card-fill-bg)" value="advanced">
          Advanced
        </option>
      </select>
    </div>
  );
};

export default SelectInput;
