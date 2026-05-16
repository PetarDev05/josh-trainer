const EmailInput = ({ input, handleChange }) => {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <input
        name="email"
        value={input.email}
        onChange={handleChange}
        className="border border-(--border)"
        type="text"
        placeholder="Your E-mail *"
      />
    </div>
  );
};

export default EmailInput;
