import Header from "@/components/Header/Header";
import {
  DOUGH_OPTIONS,
  SIZES,
} from "@/components/OrderForm/OrderForm.constants";

const OrderForm = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-start">
      <Header />
      <form className="w-full max-w-[532px] h-full font-barlow text-gray-dark py-10 flex flex-col items-start justify-start gap-5">
        <h2 className="text-[22px] font-semibold">
          Position Absolute Acı Pizza
        </h2>
        <div className="flex items-center justify-between w-full text-gray-light">
          <p className="font-bold text-[28px]">85.50₺</p>
          <div className="flex items-center justify-between gap-20 text-lg">
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <p className="text-gray-light font-[400] leading-relaxed">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <div className="w-full flex items-center justify-between !mt-6">
          <fieldset className="flex flex-col items-start justify-center gap-3">
            <legend className="text-xl font-semibold text-gray-dark !mb-4">
              Boyut Seç <span className="text-red">*</span>
            </legend>
            {SIZES.map((size) => (
              <label
                key={size.id}
                className="flex items-center justify-start gap-2 text-gray-light text-base"
              >
                <input
                  type="radio"
                  name="size"
                  value={size.id}
                  className="focus:ring-red-500 flex items-center justify-center"
                />
                {size.title}
              </label>
            ))}
          </fieldset>
          <fieldset className="flex flex-col !mr-40 items-start justify-start h-full gap-3">
            <label
              htmlFor="dough-thickness"
              className="text-xl font-semibold text-gray-dark"
            >
              Hamur Seç <span className="text-red">*</span>
            </label>
            <select name="dough-thickness" className="border-1 !font-semibold">
              <option value="">Hamur Kalınlığı</option>
              {DOUGH_OPTIONS.map((dough) => (
                <option key={dough.id} value={dough.id}>
                  {dough.title}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
      </form>
    </section>
  );
};

export default OrderForm;
