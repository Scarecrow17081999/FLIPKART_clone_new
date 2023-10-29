import React from "react";
import RedirectBtn from "../button/RedirectBtn";
import ProductGridCard from "../ProductCard/ProductGridCard";

const BannerGridCard = ({ width, products }) => {
  return (
    <div className={`bg-white px-4 py-6 w-full`}>
      <div className="flex items-center justify-between mb-5">
        {" "}
        <h2 className="font-semibold text-lg">Head of Electronics</h2>
        <RedirectBtn />
      </div>
      <div className="grid grid-cols-2 gap-2 items-center justify-between">
        {products.map((product) => (
          <ProductGridCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BannerGridCard;
