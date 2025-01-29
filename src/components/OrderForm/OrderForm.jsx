import {
  DOUGH_OPTIONS,
  EXTRAS,
  initialValues,
  SIZES,
} from "@/components/OrderForm/OrderForm.constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const OrderForm = ({ setOrderDetails }) => {
  const [values, setValues] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { size, thickness, userName, extras } = values;

    setIsDisabled(
      size &&
        thickness &&
        userName.length > 3 &&
        extras.length >= 4 &&
        extras.length <= 10
        ? false
        : true
    );
  }, [values]);

  useEffect(() => {
    const totalPrice =
      (values.initialPrice + values.extras.length * 5) * values.quantity;
    setValues((prev) => ({ ...prev, totalPrice }));
  }, [values.extras, values.quantity]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setValues((prev) => {
      if (type === "checkbox" && name === "extras") {
        const isSelected = prev.extras.includes(value);
        return {
          ...prev,
          extras: isSelected
            ? prev.extras.filter((id) => id !== value)
            : [...prev.extras, value],
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDisabled) return;

    try {
      const res = await axios.post("https://reqres.in/api/pizza", values);
      if (res.status === 201) {
        console.log("Order summary: ", res.data);
        setOrderDetails(res.data);
        navigate("/success");
      }
    } catch (err) {
      alert(`Failed to create order: ${err.message}`);
    }
    setValues(initialValues);
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-start">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[532px] h-full font-barlow text-gray-medium py-10 flex flex-col items-start justify-start gap-5"
      >
        <h2 className="text-[22px] font-semibold">{values.itemName}</h2>
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
            <legend className="text-xl font-semibold text-gray-medium !mb-3">
              Boyut Seç <span className="text-red">*</span>
            </legend>
            {SIZES.map((size) => (
              <label
                key={size.id}
                className="flex items-center justify-start gap-2 text-gray-light text-base"
              >
                <input
                  data-testid="size-input"
                  type="radio"
                  name="size"
                  value={size.id}
                  checked={values.size === size.id}
                  onChange={handleChange}
                  className="focus:ring-red-500 flex items-center justify-center"
                />
                {size.title}
              </label>
            ))}
          </fieldset>
          <fieldset className="flex flex-col !mr-40 items-start justify-start h-full gap-3">
            <label
              htmlFor="thickness"
              className="text-xl font-semibold text-gray-medium"
            >
              Hamur Seç <span className="text-red">*</span>
            </label>
            <select
              data-testid="thickness-input"
              name="thickness"
              value={values.thickness}
              onChange={handleChange}
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
          <h3 className="text-xl font-semibold text-gray-medium">
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
                  data-testid="extra-input"
                  disabled={
                    values.extras.length >= 10 &&
                    !values.extras.includes(extra.id)
                  }
                  value={extra.id}
                  type="checkbox"
                  id={extra.id}
                  checked={values.extras.includes(extra.id)}
                  onChange={handleChange}
                  name="extras"
                />
                {extra.title}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="flex flex-col items-start justify-center gap-3 w-full">
          <label
            htmlFor="userName"
            className="text-xl font-semibold text-gray-medium"
          >
            Adınız <span className="text-red">*</span>
          </label>
          <input
            data-testid="user-name-input"
            type="text"
            id="userName"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            className="border-1 w-full py-3 border-divider px-2 rounded-sm"
            placeholder="Siparişi teslim alacak kişinin adı"
          />
        </fieldset>
        <fieldset className="flex flex-col items-start justify-center gap-3 w-full">
          <label
            htmlFor="note"
            className="text-xl font-semibold text-gray-medium"
          >
            Sipariş notu
          </label>
          <textarea
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            id="note"
            name="note"
            value={values.note}
            onChange={handleChange}
            className="border-1 w-full py-3 border-divider px-2 rounded-sm resize-y min-h-[80px]"
          />
        </fieldset>
        <hr className="border-t-1 border-gray-light opacity-50 w-full !my-4"></hr>
        <div className="border-1 border-divider rounded-sm w-full p-10 font-barlow flex flex-col items-start justify-center gap-3 font-semibold">
          <h4 className="text-xl text-gray-medium">Sipariş Toplamı</h4>
          <div className="flex items-center justify-between w-full text-gray-light">
            <p>Seçimler</p>
            <p>{values.extras.length * 5}₺</p>
          </div>
          <div className="flex items-center justify-between w-full text-red">
            <p>Toplam</p>
            <p>{values.totalPrice}₺</p>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center gap-4">
          <div className="w-fit flex items-center justify-center gap-0">
            <button
              type="button"
              disabled={values.quantity === 1}
              onClick={() =>
                setValues((prev) => ({
                  ...prev,
                  quantity: prev.quantity - 1,
                }))
              }
              className="w-12 h-12 bg-yellow text-gray-medium !font-semibold rounded-l-sm disabled:bg-divider disabled:cursor-auto cursor-pointer"
            >
              -
            </button>
            <p className="w-12 h-12 border-1 flex items-center justify-center border-divider">
              {values.quantity}
            </p>
            <button
              type="button"
              onClick={() =>
                setValues((prev) => ({
                  ...prev,
                  quantity: prev.quantity + 1,
                }))
              }
              className="bg-yellow text-gray-medium !font-semibold py-3 rounded-r-sm w-12 h-12 disabled:bg-divider disabled:cursor-auto cursor-pointer"
            >
              +
            </button>
          </div>
          <button
            data-testid="submit-button"
            disabled={isDisabled}
            type="submit"
            className="w-full bg-yellow disabled:bg-divider rounded-sm text-gray-medium !font-semibold px-6 py-3 cursor-pointer disabled:cursor-auto"
          >
            SİPARİŞ VER
          </button>
        </div>
      </form>
    </section>
  );
};

export default OrderForm;
