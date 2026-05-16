import { TbTopologyStarRing3 } from "react-icons/tb";

const Header = () => {
  return (
    <header className="w-full fixed top-0 justify-between p-4 text-(--light) backdrop-blur-2xl border-b border-(--border) z-10">
      <h3 className="text-xl gap-3 ">
        <TbTopologyStarRing3 />
        Alex Coach
      </h3>

      <nav className="text-sm gap-7 pr-5">
        <a>About</a>
        <a>Programs</a>
        <a>Blog</a>
      </nav>
    </header>
  );
};

export default Header;
