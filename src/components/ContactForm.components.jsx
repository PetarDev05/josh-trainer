import { useState } from "react";
import { toast } from "react-hot-toast";
import FormHead from "./form_components/FormHead.components.jsx";
import NameInput from "./form_components/NameInput.components.jsx";
import EmailInput from "./form_components/EmailInput.components.jsx";
import SelectInput from "./form_components/SelectInput.components.jsx";
import TextArea from "./form_components/TextArea.components.jsx";
import Buttons from "./form_components/Buttons.components.jsx";

const ContactForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    trainingLevel: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const clearInput = () => {
    setInput({
      name: "",
      email: "",
      trainingLevel: "",
      message: "",
      username: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent.");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-100 flex flex-col items-center gap-5">
      <FormHead />

      {/* Name Input */}
      <NameInput
        input={input}
        handleChange={handleChange}
      />

      {/* Email Input */}
      <EmailInput
        input={input}
        handleChange={handleChange}
      />

      {/* Select Input */}
      <SelectInput
        input={input}
        handleChange={handleChange}
      />

      {/* TextArea Input */}
      <TextArea
        input={input}
        handleChange={handleChange}
      />

      {/* Buttons */}
      <Buttons loading={loading} clearInput={clearInput} />
    </form>
  );
};

export default ContactForm;
