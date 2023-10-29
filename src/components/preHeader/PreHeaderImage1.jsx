import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import ProductDropdown from "../dropdowns/ProductDropdown";
const PreHeaderImage1 = ({ items, product, position }) => {
  const { title, image } = product;
  return (
    <div id="dropdownImage" className="cursor-pointer">
      {position == 1 || position == 2 || position == 6 || position == 7 ? (
        <div>
          <img className="block m-auto" src={image} alt="headerImage" />
          <p className="text-sm font-semibold text-center">{title}</p>
          {/* <div className=" w-60 h-20 z-10 bg-slate-50 border absolute"></div> */}
        </div>
      ) : (
        <ProductDropdown items={items}>
          <DropdownImage product={product} />
        </ProductDropdown>
      )}
    </div>
  );
};

const DropdownImage = ({ product }) => {
  const { title, image } = product;
  return (
    <div
      style={{ transition: "all 0.2s ease-in-out", zIndex: "9999" }}
      className="hover:text-blue"
      id="dropdownImage"
    >
      <img className="block m-auto" src={image} alt="headerImage" />
      <div className="flex items-center space-x-2 mt-3">
        <p className="text-sm font-semibold text-center">{title}</p>
        <Icon icon="ep:arrow-down-bold" className="hover:rotate-180" />
      </div>
    </div>
  );
};

export default PreHeaderImage1;
