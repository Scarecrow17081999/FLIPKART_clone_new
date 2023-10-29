import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import RedirectBtn from "../button/RedirectBtn";
const BannerCard = ({ width, products }) => {
  return (
    <div className={`w-full bg-white px-4 py-6`}>
      <div className="flex items-center justify-between mb-5">
        {" "}
        <h2 className="font-semibold text-lg">Head of Electronics</h2>
        <RedirectBtn />
      </div>
      <div className="flex items-center justify-between space-x-2 overflow-x-hidden">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BannerCard;
