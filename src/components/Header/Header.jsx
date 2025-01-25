import { Link, useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="bg-red w-screen h-52 py-4 flex flex-col items-center justify-center font-barlow text-base text-beige px-4 mobile:px-7">
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler Logo"
        />
      </div>
      {pathname === "/order" && (
        <nav className="max-w-[532px] w-full flex items-center justify-start gap-2">
          <Link to="/">Anasayfa</Link>
          <span>-</span>
          <Link to="/order" className="font-bold">
            Sipariş Oluştur
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
