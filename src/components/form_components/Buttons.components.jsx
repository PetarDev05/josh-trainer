import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { TbCircleDotted } from "react-icons/tb";

const Buttons = ({ loading, clearInput }) => {
  return (
    <div id="container01" className="w-full justify-between">
      <div id="container02" className="gap-3 text-xl text-(--text)">
        <span className="span">
          <FaInstagram />
        </span>
        <span className="span">
          <FaLinkedin />
        </span>
        <span className="span">
          <RiTwitterXFill />
        </span>
      </div>

      <div id="container03" className="gap-3">
        <span className="span"
          disabled={loading}
          id="refresh"
          type="button"
          onClick={clearInput}
        >
          <IoRefresh className="text-xl" />
        </span>
        <button className="" id="submit" disabled={loading} type="submit">
          {loading ? <TbCircleDotted className="animate-spin text-2xl" /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Buttons;
