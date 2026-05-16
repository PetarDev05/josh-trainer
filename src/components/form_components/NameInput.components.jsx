const NameInput = ({ input, handleChange }) => {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <input
        name="name"
        value={input.name}
        onChange={handleChange}
        className="border border-(--border)"
        type="text"
        placeholder="Your Name *"
      />
    </div>
  );
};

export default NameInput;
