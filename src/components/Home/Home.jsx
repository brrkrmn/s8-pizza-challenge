import Nav from "@/components/Home/components/Nav/Nav";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <section className="bg-red bg-[url('/images/iteration-1-images/home-banner.png')] bg-[50%_0%] laptop:bg-cover bg-no-repeat w-full h-screen px-4 py-7 flex flex-col items-center justify-start gap-12">
        <div className="w-full pt-20 flex items-end justify-center">
          <img
            src="/images/iteration-1-images/logo.svg"
            alt="Teknolojik Yemekler Logo"
          />
        </div>
        <h1 className="font-roboto text-white font-light text-7xl tablet:text-[88px] text-center max-w-[640px]">
          KOD ACIKTIRIR, PİZZA DOYURUR
        </h1>
        <Link
          to="/order"
          className="bg-yellow text-gray-medium font-barlow font-semibold text-xl rounded-4xl py-3 px-14"
        >
          ACIKTIM
        </Link>
      </section>
      <Nav background={true} />
      <Nav background={false} />
    </div>
  );
};

export default Home;
