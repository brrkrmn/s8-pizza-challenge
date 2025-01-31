import { useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header
      className={`${
        pathname === "/" && "hidden"
      } bg-red w-screen pt-10 h-fit  pb-6 px-4 mobile:px-7 flex items-center justify-center`}
    >
      <img
        src="/images/iteration-1-images/logo.svg"
        alt="Teknolojik Yemekler Logo"
      />
    </header>
  );
};

export default Header;
