import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="portfolio__container flex justify-center sm:flex-row flex-col-reverse sm:gap-0 gap-5 items-center sm:justify-between px-5">
      <h1 className="standart md:text-base text-sm">
        KHAIRULLA RUZIMOV 2024 | ALL RIGHTS RESERVED ©
      </h1>
      <div className="flex text-2xl md:text-3xl items-center gap-5">
        <Link to="https://t.me/Redni873" target="_blank">
          <i className="bi bi-telegram transition duration-500 cursor-pointer hover:text-blue-900 active:text-black"></i>
        </Link>
        <Link to="https://github.com/KhairullaRuzimov" target="_blank">
          <i className="bi bi-github transition duration-500 cursor-pointer hover:text-blue-900 active:text-black"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/khairulla-ruzimov-3a07b431b"
          target="_blank"
        >
          <i className="bi bi-linkedin transition duration-500 cursor-pointer hover:text-blue-900 active:text-black"></i>
        </Link>
        <Link
          to="https://www.upwork.com/freelancers/~0115ba3b6367dad5e5?mp_source=share"
          target="_blank"
        >
          <i className="bx bxl-upwork cursor-pointer transition duration-500 hover:text-blue-900 active:text-blacke"></i>
        </Link>
      </div>
    </div>
  );
}
export default Footer;
