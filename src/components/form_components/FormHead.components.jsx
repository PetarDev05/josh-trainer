import { FaRegEnvelope } from "react-icons/fa";

const FormHead = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <FaRegEnvelope className="text-(--light) text-2xl md:text-3xl" />
      <h2 className="max-w-80 min-[850px]:max-w-150 text-2xl md:text-3xl">Contact Me</h2>
      <p className="text-sm text-(--text) text-center">
        You can fill out this form and contact me and I will get back to you
        within 24h
      </p>
    </div>
  );
};

export default FormHead;
