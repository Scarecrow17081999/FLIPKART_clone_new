import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { image, title, price, link } = product;
  return (
    <div className={`w-full bg-white p-5 border rounded-sm border-gray-300`}>
      <Link to={`/details`}>
        <img
          src={image}
          alt=""
          className="block m-auto w-full hover:scale-105"
        />
        <div className="mt-10">
          {" "}
          <h2 className="text-md text-center">{title}</h2>
          <p className="text-sm text-center">From {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
