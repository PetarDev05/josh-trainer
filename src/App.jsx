import { Toaster } from "react-hot-toast";
import Contact from "./pages/Contact.pages.jsx";

const App = () => {
  return (
    <div>
      <Contact />
      <Toaster
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: "var(--success)",
              color: "var(--light)",
            },
          },
          error: {
            style: {
              background: "var(--error)",
              color: "var(--light)",
            },
          },
        }}
      />
    </div>
  );
};

export default App;
