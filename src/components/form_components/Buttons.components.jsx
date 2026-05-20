import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { TbCircleDotted } from "react-icons/tb";

const Buttons = ({ loading, clearInput }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-end sm:items-center gap-5 justify-between">
      <div className="w-full sm:w-fit flex flex-row items-center gap-3 text-xl text-(--text)">
        <span className="flex-1 flex items-center justify-center hover:bg-(--light)
hover:text-(--dark) transition-all duration-200 text-(--light) px-2 py-1.75 border border-(--border) rounded-[5px] cursor-pointer">
          <FaInstagram />
        </span>
        <span className="flex-1 flex items-center justify-center hover:bg-(--light)
hover:text-(--dark) transition-all duration-200 text-(--light) px-2 py-1.75 border border-(--border) rounded-[5px] cursor-pointer">
          <FaLinkedin />
        </span>
        <span className="flex-1 flex items-center justify-center hover:bg-(--light)
hover:text-(--dark) transition-all duration-200 text-(--light) px-2 py-1.75 border border-(--border) rounded-[5px] cursor-pointer">
          <RiTwitterXFill />
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        <span
          className="hover:bg-(--light) text-(--light) hover:text-(--dark) transition-all duration-200 px-2 py-1.75 border border-(--border) rounded-[5px] cursor-pointer"
          disabled={loading}
          id="refresh"
          type="button"
          onClick={clearInput}
        >
          <IoRefresh className="text-xl" />
        </span>
        <button
          className="w-21 flex items-center justify-center hover:bg-(--light) text-(--light) hover:text-(--dark) transition-all duration-200"
          id="submit"
          disabled={loading}
          type="submit"
        >
          {loading ? (
            <TbCircleDotted className="animate-spin text-2xl" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
};

export default Buttons;
