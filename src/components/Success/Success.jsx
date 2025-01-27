import {
  DOUGH_OPTIONS,
  EXTRAS,
  SIZES,
} from "@/components/OrderForm/OrderForm.constants";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Success = ({ orderDetails }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!orderDetails) navigate("/");
  }, []);

  if (!orderDetails) return;

  const { itemName, size, thickness, extras, totalPrice } = orderDetails;

  return (
    <section className="bg-red w-full h-screen px-4 py-7 flex flex-col items-center justify-start gap-4">
      <div className="w-full pt-20 tablet:pt-30 flex items-end justify-center">
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler Logo"
        />
      </div>
      <p className="text-yellow font-satisfy text-4xl">lezzetin yolda</p>
      <h1 className="flex flex-col items-center justify-center leading-[92px] text-center font-roboto text-[60px] tablet:text-[86px] text-white font-light">
        SİPARİŞ ALINDI
      </h1>
      <hr className="border-t-1 border-white w-full"></hr>
      <h3 className="text-2xl font-barlow text-white font-semibold">
        {itemName}
      </h3>
      <div className="flex flex-col items-start justify-center gap-4 text-white">
        <p>
          Boyut:{" "}
          <span className="font-semibold">
            {SIZES.find((s) => s.id === size).title}
          </span>
        </p>
        <p>
          Hamur:{" "}
          <span className="font-semibold">
            {DOUGH_OPTIONS.find((d) => d.id === thickness).title}
          </span>
        </p>
        <p className="flex items-center justify-start gap-1">
          Ek Malzemeler:{" "}
          {extras.map((extra, index) => (
            <span key={index} className="font-semibold">
              {EXTRAS.find((e) => e.id === extra).title}
              {index !== extras.length - 1 && ","}
            </span>
          ))}
        </p>
        <div className="p-10 w-full flex items-start jusify-center gap-4 flex-col border-1 border-white rounded-sm">
          <p className="text-xl font-semibold">Sipariş Toplamı</p>
          <p className="text-lg font-semibold flex items-center justify-between w-full">
            Seçimler <span>{extras.length * 5}₺</span>
          </p>
          <p className="text-lg font-semibold flex items-center justify-between w-full">
            Toplam <span>{totalPrice}₺</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Success;
