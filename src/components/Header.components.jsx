import { TbTopologyStarRing3 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";

const Header = ({ menu, setMenu }) => {
  return (
    <header className="w-full fixed top-0 justify-between p-4 text-(--light) backdrop-blur-2xl border-b border-(--border) z-10">
      <p className="text-lg flex flex-row items-center gap-3">
        <TbTopologyStarRing3 />
        Josh
      </p>

      <nav className="flex flex-row items-center text-sm gap-7 pr-5 max-md:hidden">
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#programs">Programs</a>
        <a href="#contact">Contact</a>
      </nav>

      <span
        onClick={() => setMenu((prev) => !prev)}
        className="text-2xl text-(--light) cursor-pointer md:hidden"
      >
        {menu ? <IoClose /> : <TbMenu2 />}
      </span>
    </header>
  );
};

export default Header;
