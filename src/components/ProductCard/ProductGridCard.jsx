import React from "react";

const ProductCard = ({ product }) => {
  const { image, title, price, link } = product;
  return (
    <div className={`w-full bg-white p-5 border rounded-sm border-gray-300`}>
      <a href={link}>
        <img
          src={image}
          alt=""
          className="block m-auto w-full hover:scale-105"
        />
        <div className="mt-10">
          {" "}
          <h2 className="text-md text-left">{title}</h2>
          <p className="text-md font-bold text-left text-green-600">
            From {price}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
