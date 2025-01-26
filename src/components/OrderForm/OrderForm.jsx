import Header from "@/components/Header/Header";
import {
  DOUGH_OPTIONS,
  EXTRAS,
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
            <legend className="text-xl font-semibold text-gray-dark !mb-3">
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
            <select
              name="dough-thickness"
              className="border-1 !font-semibold rounded-sm"
            >
              <option value="">Hamur Kalınlığı</option>
              {DOUGH_OPTIONS.map((dough) => (
                <option key={dough.id} value={dough.id}>
                  {dough.title}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
        <fieldset className="!mt-6 flex flex-col items-start justify-center gap-3">
          <h3 className="text-xl font-semibold text-gray-dark">
            Ek Malzemeler
          </h3>
          <p className="text-gray-light font-[400]">
            En fazla 10 malzeme seçebilirsiniz. 5₺
          </p>
          <div className="flex items-center justify-start flex-wrap gap-4 py-10">
            {EXTRAS.map((extra) => (
              <label
                className="w-[30%] flex items-center justify-start gap-3 text-gray-light font-bold"
                key={extra.id}
              >
                <input
                  value={extra.id}
                  type="checkbox"
                  id="extra"
                  name="extra"
                />
                {extra.title}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="flex flex-col items-start justify-center gap-3 w-full">
          <label
            htmlFor="name"
            className="text-xl font-semibold text-gray-dark"
          >
            Adınız <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-1 w-full py-3 border-divider px-2 rounded-sm"
            placeholder="Siparişi teslim alacak kişinin adı"
          />
        </fieldset>
        <fieldset className="flex flex-col items-start justify-center gap-3 w-full">
          <label
            htmlFor="note"
            className="text-xl font-semibold text-gray-dark"
          >
            Sipariş notu
          </label>
          <textarea
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            id="note"
            name="note"
            className="border-1 w-full py-3 border-divider px-2 rounded-sm resize-y min-h-[80px]"
          />
        </fieldset>
        <hr className="border-t-1 border-gray-light opacity-50 w-full !my-4"></hr>
        <div className="border-1 border-divider rounded-sm w-full p-10 font-barlow flex flex-col items-start justify-center gap-3 font-semibold">
          <h4 className="text-xl text-gray-dark">Sipariş Toplamı</h4>
          <div className="flex items-center justify-between w-full text-gray-light">
            <p>Seçimler</p>
            <p>25.00₺</p>
          </div>
          <div className="flex items-center justify-between w-full text-red">
            <p>Toplam</p>
            <p>110.50₺</p>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center gap-4">
          <div className="w-fit flex items-center justify-center gap-0">
            <button className="w-12 h-12 bg-yellow text-gray-dark !font-semibold rounded-l-sm">
              -
            </button>
            <p className="w-12 h-12 border-1 flex items-center justify-center border-divider">
              a
            </p>
            <button className="bg-yellow text-gray-dark !font-semibold py-3 rounded-r-sm w-12 h-12">
              +
            </button>
          </div>
          <button className="w-full bg-yellow rounded-sm text-gray-dark !font-semibold px-6 py-3">
            SİPARİŞ VER
          </button>
        </div>
      </form>
    </section>
  );
};

export default OrderForm;
