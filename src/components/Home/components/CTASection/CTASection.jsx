const CTASection = () => {
  return (
    <div className="w-full flex flex-col tablet:flex-row items-center justify-center gap-2">
      <div className="w-full rounded-xl overflow-hidden relative">
        <img
          className="w-full object-cover"
          src="/images/iteration-2-images/cta/kart-1.png"
        />
        <div className="flex flex-col items-start justify-start gap-2 absolute top-8 left-8 text-white w-48">
          <p className="font-quattrocento text-5xl font-bold">Özel Lezzetus</p>
          <p className="text-sm font-barlow font-semibold">
            Position:Absolute Acı Burger
          </p>
          <button className="bg-white rounded-full text-red font-barlow !text-xs !font-semibold px-5 py-3 !mt-2">
            SİPARİŞ VER
          </button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
        <div className="relative w-full bg-gray-medium rounded-xl overflow-hidden border-2">
          <img src="/images/iteration-2-images/cta/kart-2.png" />
          <div className="flex flex-col items-start justify-start gap-2 absolute top-4 left-6 text-white w-48">
            <p className="text-2xl font-barlow font-semibold">
              Hackathlon Burger Menü
            </p>
            <button className="bg-white rounded-full text-red font-barlow !text-xs !font-semibold px-5 py-3 !mt-2">
              SİPARİŞ VER
            </button>
          </div>
        </div>
        <div className="relative w-full rounded-xl overflow-hidden">
          <img src="/images/iteration-2-images/cta/kart-3.png" />
          <div className="flex flex-col items-start justify-start gap-2 absolute top-4 left-6 text-white w-48">
            <p className="text-2xl font-barlow font-semibold text-gray-medium w-40">
              <span className="text-red !mr-1">Çoooook</span>
              hızlı npm gibi kurye
            </p>
            <button className="bg-white rounded-full text-red font-barlow !text-xs !font-semibold px-5 py-3 !mt-2">
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
