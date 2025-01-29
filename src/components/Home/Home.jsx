import CTASection from "@/components/Home/components/CTASection/CTASection";
import MenuItems from "@/components/Home/components/MenuItems/MenuItems";
import Nav from "@/components/Home/components/Nav/Nav";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <section className="bg-red bg-[url('/images/iteration-1-images/home-banner.png')] bg-[50%_0%] mobile:bg-[50%_0%] mobile:bg-cover bg-no-repeat w-full h-screen px-4 py-7 flex flex-col items-center justify-start gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="/images/iteration-1-images/logo.svg"
            alt="Teknolojik Yemekler Logo"
            className="py-10"
          />
          <p className="font-satisfy text-yellow text-3xl">fırsatı kaçırma</p>
          <h1 className="font-roboto text-white font-light text-6xl tablet:text-7xl text-center max-w-[640px]">
            KOD ACIKTIRIR, PİZZA DOYURUR
          </h1>
          <Link
            to="/order"
            className="bg-yellow text-gray-medium font-barlow font-semibold text-lg mobile:text-xl rounded-4xl py-2 px-10 mobile:py-3 mobile:px-14 !mt-2 transition hover:shadow-xl"
          >
            ACIKTIM
          </Link>
        </div>
      </section>
      <div className="w-full py-4 bg-white">
        <Nav />
      </div>
      <section className="bg-beige w-full py-14 flex items-center justify-center px-4">
        <div className="w-full max-w-full laptop:max-w-[800px] flex flex-col items-center justify-start gap-10">
          <CTASection />
          <div className="flex flex-col w-full items-center justify-center gap-2">
            <p className="font-satisfy text-red text-2xl text-center">
              en çok paketlenen menüler
            </p>
            <p className="font-barlow text-3xl font-semibold text-center">
              Acıktıran Kodlara Doyuran Lezzetler
            </p>
          </div>

          <Nav />
          <MenuItems />
        </div>
      </section>
    </div>
  );
};

export default Home;
