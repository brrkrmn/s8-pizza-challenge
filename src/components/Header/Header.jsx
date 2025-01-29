import { useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header
      className={`${
        pathname === "/" ? "pt-16" : "pt-10"
      } bg-red w-screen h-fit  pb-6 px-4 mobile:px-7 flex items-center justify-center`}
    >
      <img
        src="/images/iteration-1-images/logo.svg"
        alt="Teknolojik Yemekler Logo"
      />
    </header>
  );
};

export default Header;
