import {
  DOUGH_OPTIONS,
  EXTRAS,
  SIZES,
} from "@/components/Order/components/OrderForm/OrderForm.constants";
import { absolutePizza } from "@/menu.constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const OrderForm = ({ setOrderDetails }) => {
  const [values, setValues] = useState(absolutePizza);
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
    setValues(absolutePizza);
  };

  return (
    <div className="bg-white w-screen h-full flex flex-col items-center justify-start">
      <form
        onSubmit={handleSubmit}
        className="w-full font-barlow max-w-[532px] h-full text-gray-medium py-10 flex flex-col items-start justify-start gap-5"
      >
        <div className="w-full flex items-start justify-between gap-10">
          <fieldset className="flex flex-col items-start justify-start">
            <legend className="text-xl font-semibold text-gray-medium">
              Boyut Seç <span className="text-red">*</span>
            </legend>
            <div className="flex items-center justify-start gap-4 !mt-4">
              {SIZES.map((size) => (
                <label
                  key={size.id}
                  className={`flex items-center justify-center w-14 h-14 rounded-full cursor-pointer transition-all font-semibold text-gray-light
                  ${values.size === size.id ? "bg-yellow-light" : "bg-beige"}`}
                >
                  <input
                    data-testid="size-input"
                    type="radio"
                    name="size"
                    value={size.id}
                    checked={values.size === size.id}
                    onChange={handleChange}
                    className="hidden"
                  />
                  {size.title}
                </label>
              ))}
            </div>
            <p
              className={`text-red transition ${
                !values.size ? "opacity-100" : "opacity-0"
              }`}
            >
              Boyut seçin
            </p>
          </fieldset>
          <fieldset className="flex flex-col items-start justify-start h-full w-full">
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
              className="border-r-20 border-transparent bg-beige h-14 w-full px-4 text-gray-light font-semibold rounded-sm !mt-4 focus:outline-1 outline-yellow"
            >
              <option value="" disabled>
                -- Hamur Kalınlığı Seç --
              </option>
              {DOUGH_OPTIONS.map((dough) => (
                <option key={dough.id} value={dough.id}>
                  {dough.title}
                </option>
              ))}
            </select>
            <p
              className={`text-red transition ${
                !values.thickness ? "opacity-100" : "opacity-0"
              }`}
            >
              Hamur seçin
            </p>
          </fieldset>
        </div>
        <fieldset className="flex flex-col items-start justify-center gap-3 py-6">
          <h3 className="text-xl font-semibold text-gray-medium">
            Ek Malzemeler
          </h3>
          <p className="text-gray-light font-[400]">
            En fazla 10 malzeme seçebilirsiniz. 5₺
          </p>
          <div className="flex items-center justify-start flex-wrap gap-4 pt-3">
            {EXTRAS.map((extra) => (
              <label
                className={`${
                  values.extras.length >= 10 &&
                  !values.extras.includes(extra.id)
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                } w-[30%] flex items-center justify-start gap-3 text-gray-light font-bold`}
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
                  className="hidden"
                />
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-md transition-all
                  ${
                    values.extras.includes(extra.id)
                      ? "bg-yellow text-gray-light"
                      : "bg-beige text-beige"
                  }
                `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {extra.title}
              </label>
            ))}
          </div>
          <p
            className={`text-red transition ${
              values.extras.length < 4 || values.extras.length === 10
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            {values.extras.length < 4
              ? "En az 4 malzeme seçin"
              : values.extras.length === 10 &&
                "En fazla 10 malzeme seçebilirsiniz"}
          </p>
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
            className="bg-beige focus:outline-1 outline-yellow w-full py-3 border-divider px-2 rounded-sm"
            placeholder="Siparişi teslim alacak kişinin adı"
          />
          <p
            className={`text-red transition ${
              values.userName.length < 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            En az 3 karakter girin"
          </p>
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
            className="bg-beige focus:outline-1 outline-yellow w-full py-3 border-divider px-2 rounded-sm resize-y min-h-[80px]"
          />
        </fieldset>
        <hr className="border-t-1 border-gray-light opacity-50 w-full !my-4"></hr>
        <div className="w-full flex items-start justify-start gap-2">
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
              className="w-12 h-12 bg-yellow text-gray-medium !font-semibold rounded-l-sm disabled:bg-divider disabled:cursor-not-allowed cursor-pointer"
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
              className="bg-yellow text-gray-medium !font-semibold py-3 rounded-r-sm w-12 h-12 disabled:bg-divider disabled:cursor-not-allowed cursor-pointer"
            >
              +
            </button>
          </div>
          <div className="w-full">
            <div className="border-1 bg-beige border-divider rounded-sm w-full p-10 flex flex-col items-start justify-center gap-3 font-semibold">
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
            <button
              data-testid="submit-button"
              disabled={isDisabled}
              type="submit"
              className="w-full bg-yellow disabled:bg-divider rounded-sm text-gray-medium !font-semibold px-6 py-3 cursor-pointer disabled:cursor-not-allowed"
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
