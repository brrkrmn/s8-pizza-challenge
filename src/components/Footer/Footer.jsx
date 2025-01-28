import {
  instagramItemsSrc,
  menuItems,
} from "@/components/Footer/Footer.constants";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-gray-dark flex flex-col items-center justify-center gap-10 px-10 tablet:px-40 py-20 text-white">
      <div className="flex flex-col laptop:flex-row items-start justify-start gap-20 flex-wrap">
        <div className="flex flex-col items-start justify-center gap-8">
          <img src="/images/iteration-2-images/footer/logo-footer.svg" />
          <div className="flex items-center justify-start gap-3">
            <img src="/images/iteration-2-images/footer/icons/icon-1.png" />
            <p>341 Londonderry Road, Istanbul Türkiye</p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <img src="/images/iteration-2-images/footer/icons/icon-2.png" />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <img src="/images/iteration-2-images/footer/icons/icon-3.png" />
            <p>+90 216 123 45 67</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 ">
          <p className="text-xl font-semibold !mb-4">Hot Menu</p>
          {menuItems.map((item, index) => (
            <p className="font-light" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="text-xl font-semibold !mb-4">Instagram</p>
          <div className="flex flex-wrap items-center justify-start gap-4 shrink-0 max-w-80">
            {instagramItemsSrc.map((itemSrc, index) => (
              <img src={itemSrc} key={index} className="" />
            ))}
          </div>
        </div>
      </div>
      <hr className="border-t-1 w-full border-gray-medium"></hr>
      <div className=" flex items-center justify-between">
        <p className="text-white">
          © {new Date().getFullYear()} Teknolojik Yemekler
        </p>
        <Link to="">
          <img src="/images/iteration-2-images/footer/twitter.svg" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
