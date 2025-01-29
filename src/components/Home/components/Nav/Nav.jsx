import { navLinks } from "@/components/Home/components/Nav/Nav.constants";
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="bg-transparent w-full flex items-center justify-center gap-4 flex-wrap">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to=""
          className={`hover:bg-gray-medium hover:text-white transition justify-start
           bg-white tablet:w-fit mobile:w-[30%] w-[40%] flex items-center gap-2 text-xs mobile:text-sm text-gray-medium font-semibold font-barlow rounded-full py-2 px-3`}
        >
          <img
            src={link.iconSrc}
            alt={`${link} icon`}
            className="w-6 mobile:w-8 aspect-square"
          />
          <p>{link.title}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
