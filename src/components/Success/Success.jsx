const Success = () => {
  return (
    <section className="relative bg-red w-full h-screen px-4 py-7 flex flex-col items-center justify-start gap-12">
      <div className="w-full pt-20 tablet:pt-30 flex items-end justify-center">
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler Logo"
        />
      </div>
      <h1 className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center leading-[92px] text-center font-roboto text-[60px] tablet:text-[86px] text-white font-light">
        <span>TEBRİKLER!</span>
        <span>SİPARİŞİNİZ ALINDI!</span>
      </h1>
    </section>
  );
}

export default Success