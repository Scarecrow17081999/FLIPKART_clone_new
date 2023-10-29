import React from "react";
import PreFooter from "./PreFooter";
import DetailsFooter from "../components/footer/DetailsFooter";
import DetailsAddress from "../components/footer/DetailsAddress";
import { footer } from "../../data.json";
const Footer = () => {
  const { mainFooter } = footer;

  return (
    <footer className="footer-color text-white sm:hidden md:hidden lg:block">
      <div className="p-4 flex items-start w-full h-full space-x-5">
        <div className="flex justify-between px-5 py-10 w-3/5 items-start border border-t-0 border-l-0 border-b-0 border-opacity-10 border-slate-300">
          {mainFooter[0].map((data, i) => (
            <DetailsFooter key={i} data={data} />
          ))}
        </div>

        <div className="w-2/5 flex items-start py-10 h-full space-x-6">
          {mainFooter[1].map((data, i) => (
            <DetailsAddress key={i} data={data} />
          ))}
        </div>
      </div>
      <hr />
      <div className="p-4 px-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
            alt=""
          />
          <p className="text-sm">Become a seller</p>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
            alt=""
          />
          <p className="text-sm">Advertise</p>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
            alt=""
          />
          <p className="text-sm">Gift Cards</p>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
            alt=""
          />
          <p className="text-sm">Help Center</p>
        </div>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
