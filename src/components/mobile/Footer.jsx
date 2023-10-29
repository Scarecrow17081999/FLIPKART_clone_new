import { Icon } from "@iconify/react";
import React from "react";

const Footer = () => {
  return (
    <div className="lg:hidden md:flex sm:flex w-full h-15 bg-white border flex justify-between p-5 items-center">
      <p className="font-md">Flipkart - Your go-to place for Online Shopping</p>
      <Icon icon="ic:sharp-plus" fontSize={30} className="cursor-pointer" />
    </div>
  );
};

export default Footer;
