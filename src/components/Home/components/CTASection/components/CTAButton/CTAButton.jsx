import { Link } from "react-router";

const CTAButton = () => {
  return (
    <Link
      to="/order"
      className="bg-white transition hover:shadow-xl rounded-full text-red font-barlow text-sm !font-semibold px-5 py-3 !mt-2"
    >
      SİPARİŞ VER
    </Link>
  );
};

export default CTAButton;
