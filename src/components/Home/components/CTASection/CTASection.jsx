import CTAButton from "@/components/Home/components/CTASection/components/CTAButton/CTAButton";

const CTASection = () => {
  return (
    <section className="w-full flex flex-col mobile:flex-row items-center justify-center gap-2 mobile:h-[314px]">
      <div className="w-full h-full py-6 px-6 rounded-xl bg-[url('/images/iteration-2-images/cta/kart-1.png')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-start justify-start gap-2 text-white w-48">
          <p className="font-quattrocento text-5xl font-bold">Özel Lezzetus</p>
          <p className="text-sm font-barlow font-semibold">
            Position:Absolute Acı Burger
          </p>
          <CTAButton />
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
        <div className="w-full bg-gray-medium rounded-xl py-4 px-6 bg-[url('/images/iteration-2-images/cta/kart-2.png')] bg-cover bg-no-repeat">
          <div className="flex flex-col items-start justify-start gap-2 text-white w-48">
            <p className="text-2xl font-barlow font-semibold">
              Hackathlon Burger Menü
            </p>
            <CTAButton />
          </div>
        </div>
        <div className="w-full rounded-xl py-4 px-6 bg-[url('/images/iteration-2-images/cta/kart-3.png')] bg-cover bg-no-repeat">
          <div className="flex flex-col items-start justify-start gap-2 text-white w-48">
            <p className="text-2xl font-barlow font-semibold text-gray-medium w-40">
              <span className="text-red !mr-1">Çoooook</span>
              hızlı npm gibi kurye
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
