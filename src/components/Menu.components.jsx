const Menu = ({ menu, setMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 z-9 w-full max-w-75 flex flex-col items-center py-5 gap-2 rounded-b-2xl border border-(--border) bg-(--card-bg) text-(--light) overflow-hidden ${menu ? "translate-y-15" : "-translate-y-full"} transition-all duration-300 md:hidden`}
    >
      <a
        onClick={() => setMenu((prev) => !prev)}
        href="#home"
        className="w-full py-2 hover:bg-(--light) hover:text-(--dark) px-5 transition-all duration-150"
      >
        Home
      </a>
      <a
        onClick={() => setMenu((prev) => !prev)}
        href="#about"
        className="w-full py-2 hover:bg-(--light) hover:text-(--dark) px-5 transition-all duration-150"
      >
        About me
      </a>
      <a
        onClick={() => setMenu((prev) => !prev)}
        href="#programs"
        className="w-full py-2 hover:bg-(--light) hover:text-(--dark) px-5 transition-all duration-150"
      >
        Programs
      </a>
      <a
        onClick={() => setMenu((prev) => !prev)}
        href="#contact"
        className="w-full py-2 hover:bg-(--light) hover:text-(--dark) px-5 transition-all duration-150"
      >
        Contact
      </a>
    </div>
  );
};

export default Menu;
