import { navLinks } from "@/components/Home/components/Nav/Nav.constants";
import { Link } from "react-router";

const Nav = ({ background = false }) => {
  return (
    <nav
      className={`${
        background ? "bg-white" : "bg-beige"
      } w-full flex items-center justify-center gap-4 py-10 flex-wrap`}
    >
      {navLinks.map((link) => (
        <Link
          to=""
          className={`${
            background ? "justify-start mobil:justify-center" : "justify-center"
          } bg-white tablet:w-fit mobile:w-[30%] w-[40%] flex items-center gap-2 text-xs mobile:text-sm text-gray-medium font-semibold font-barlow rounded-full py-2 px-3`}
        >
          <img src={link.iconSrc} className="w-6 mobile:w-8 aspect-square" />
          <p>{link.title}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
