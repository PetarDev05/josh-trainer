import Footer from "./components/Footer.components.jsx";
import Header from "./components/Header.components.jsx";
import About from "./pages/About.pages.jsx";
import Contact from "./pages/Contact.pages.jsx";
import Hero from "./pages/Hero.pages.jsx";
import Programs from "./pages/Programs.pages.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      
      <Header />
      <Hero />
      <About />
      <Programs />
      <Contact />
      <Footer/>
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
