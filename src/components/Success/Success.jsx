import {
  DOUGH_OPTIONS,
  EXTRAS,
  SIZES,
} from "@/components/Order/components/OrderForm/OrderForm.constants";
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
    <section className="bg-red min-h-screen w-full px-4 pt-0 mobile:pt-7 pb-20 flex flex-col items-center justify-start gap-10 text-white">
      <div className="flex flex-col items-center justify-center gap-1 border-b-1 border-white pb-10 !mt-10">
        <p className="text-yellow font-satisfy text-3xl">lezzetin yolda</p>
        <h1 className="flex items-center justify-center leading-16 tablet:leading-24 text-center font-roboto text-6xl tablet:text-7xl font-light">
          SİPARİŞ ALINDI
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-2xl font-barlow font-semibold">{itemName}</h3>
        <div className="flex flex-col items-start justify-center gap-4 w-full max-w-64">
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
          <div className="flex items-start justify-start gap-1 flex-wrap">
            <p className="min-w-fit">Ek Malzemeler:</p>
            {extras.map((extra, index) => (
              <p key={index} className="font-semibold ">
                {EXTRAS.find((e) => e.id === extra).title}
                {index !== extras.length - 1 && ","}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="p-10 w-full max-w-80 flex items-start jusify-center gap-4 flex-col border-1 border-white rounded-sm">
        <p className="text-xl font-semibold">Sipariş Toplamı</p>
        <p className="text-lg font-semibold flex items-center justify-between w-full">
          Seçimler <span>{extras.length * 5}₺</span>
        </p>
        <p className="text-lg font-semibold flex items-center justify-between w-full">
          Toplam <span>{totalPrice}₺</span>
        </p>
      </div>
    </section>
  );
};

export default Success;
