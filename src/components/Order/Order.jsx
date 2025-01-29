import OrderForm from "@/components/Order/components/OrderForm/OrderForm";
import { absolutePizza } from "@/menu.constants";
import { Link } from "react-router";

const Order = ({ setOrderDetails }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-beige font-barlow text-gray-light px-4">
      <div className="max-w-[532px] w-full flex flex-col items-start justify-start gap-8 pb-10">
        <div className="flex items-end justify-center h-32 mobile:h-40 tablet:h-56 overflow-hidden">
          <img
            src="/images/iteration-2-images/pictures/form-banner.png"
            className="w-full object-bottom"
          />
        </div>
        <nav className="max-w-[532px] w-full flex items-center justify-start gap-2">
          <Link to="/">Anasayfa</Link>
          <span>-</span>
          <Link
            to="/order"
            className="text-red font-medium hover:font-semibold transition-all"
          >
            Sipariş Oluştur
          </Link>
        </nav>
        <h2 className="text-[22px] font-semibold text-gray-medium">
          {absolutePizza.itemName}
        </h2>
        <div className="flex items-center justify-between w-full">
          <p className="font-bold text-[28px] text-gray-medium">85.50₺</p>
          <div className="flex items-center justify-between gap-20 text-lg">
            <p>{absolutePizza.rating}</p>
            <p>({absolutePizza.reviews})</p>
          </div>
        </div>
        <p className="font-[400] leading-relaxed ">
          {absolutePizza.itemDescription}
        </p>
      </div>
      <OrderForm setOrderDetails={setOrderDetails} />
    </div>
  );
};

export default Order;
