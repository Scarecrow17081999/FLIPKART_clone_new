import React from "react";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
const CartItems = [{}, {}];
const CartLeftContainer = () => {
  return (
    <div className="w-8/12 border space-y-3 ">
      <div className="h-14 w-full bg-white flex justify-between items-center p-5">
        <p>From Saved Address</p>
        <button className="border  py-2 px-3 text-sm font-medium rounded-md text-blue-500">
          Enter Delivery Pincode
        </button>
      </div>
      <div
        style={{ maxHeight: "450px", height: "fit-content" }}
        className="w-full h-full bg-white flex flex-col "
      >
        <div className="h-full w-full overflow-y-scroll">
          {CartItems.map((item, i) => (
            <SingleProduct key={i} item={item} />
          ))}
        </div>
        <div className="w-full p-5 border mt-auto flex items-center justify-end">
          <Link to={"/checkout"}>
            {" "}
            <button className="w-40 h-12 rounded-sm text-white bg-orange-600 mx-5 hover:bg-orange-700 transition-all">
              PLACE ORDER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartLeftContainer;
