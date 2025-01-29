import { Link } from "react-router";
import { menuItems } from "./MenuItems.constants";

const MenuItems = () => {
  return (
    <div className="flex flex-col mobile:flex-row items-center justify-center gap-4 tablet:gap-10 font-barlow w-full">
      {menuItems.map((item) => (
        <Link
          to="/order"
          className="transition hover:shadow-xl rounded-sm bg-white flex flex-col items-center justify-start p-4 gap-2 w-full h-full"
        >
          <img src={item.imageSrc} className="w-56 mobile:w-44 !mb-2" />
          <p className="font-semibold w-full text-start line-clamp-1">
            {item.title}
          </p>
          <div className="flex items-center justify-between w-full h-full text-sm">
            <p>{item.rating}</p>
            <p>({item.reviews})</p>
            <p className="font-bold">{item.price}₺</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuItems;
