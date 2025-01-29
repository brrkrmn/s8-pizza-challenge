import {
  instagramItemsSrc,
  menuItems,
} from "@/components/Footer/Footer.constants";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-gray-dark flex flex-col items-center justify-center gap-10 py-20 text-white text-sm tablet:px-0 px-4">
      <div className="max-w-[800px] w-full flex flex-row items-start justify-start gap-4 tablet:gap-0 tablet:justify-between flex-wrap">
        <address className="flex flex-col items-start justify-center gap-8">
          <img
            alt="Teknolojik Yemekler Logo"
            className="w-40"
            src="/images/iteration-2-images/footer/logo-footer.svg"
          />
          <div className="flex items-center justify-start gap-3">
            <img
              alt="Location icon"
              src="/images/iteration-2-images/footer/icons/icon-1.png"
            />
            <p className="max-w-40">341 Londonderry Road, Istanbul Türkiye</p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <img
              alt="Email icon"
              src="/images/iteration-2-images/footer/icons/icon-2.png"
            />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <img
              alt="Phone icon"
              src="/images/iteration-2-images/footer/icons/icon-3.png"
            />
            <p>+90 216 123 45 67</p>
          </div>
        </address>
        <nav
          aria-label="Footer Navigation"
          className="flex flex-col items-start justify-center gap-4 "
        >
          <h5 className="text-xl font-semibold !mb-3 pt-14 align-bottom">
            Hot Menu
          </h5>
          {menuItems.map((item, index) => (
            <Link
              aria-label={`link to ${item}`}
              to=""
              className="font-light text-sm transition hover:text-yellow"
              key={index}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-start justify-start gap-4 w-fit">
          <h5 className="text-xl font-semibold !mb-3 pt-14 align-bottom">
            Instagram
          </h5>
          <ul className="flex flex-wrap items-center justify-start gap-4 shrink-0 max-w-70">
            {instagramItemsSrc.map((itemSrc, index) => (
              <Link
                key={index}
                aria-label={`link to instagram post ${index + 1}`}
                to=""
              >
                <img
                  alt={`Instagram post number ${index + 1}`}
                  src={itemSrc}
                  className="w-20"
                />
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <hr className="border-t-1 w-full border-gray-medium"></hr>
      <div className="w-full max-w-[800px] flex items-center justify-between">
        <p className="text-white">
          © {new Date().getFullYear()} Teknolojik Yemekler
        </p>
        <Link
          to=""
          aria-label="Twitter link"
          className="hover:border-yellow transition border-1 border-transparent p-2 rounded-lg"
        >
          <img
            alt="Twitter icon"
            src="/images/iteration-2-images/footer/twitter.svg"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
