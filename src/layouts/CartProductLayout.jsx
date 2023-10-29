import React, { Children } from "react";
import CartFooter from "../components/footer/CartFooter.JSX";
import SingleProduct from "../components/cart/SingleProduct";

const CartProductLayout = ({ children }) => {
  return (
    <div className="flex flex-col pt-24 border items-center">
      <div className="w-10/12  space-x-3 flex">
        {children}
        <RightContainer />
      </div>
      <hr className="divide-solid" />

      <CartFooter />
    </div>
  );
};

const RightContainer = () => {
  return (
    <div className="w-4/12 bg-white space-y-4 py-5 h-fit">
      <div className="w-full text-gray-600 px-5">Price Details</div>
      <hr />
      <div className="flex px-5 justify-between">
        <p>Price(item)</p>
        <p>Rs 1700</p>
      </div>
      <div className="flex px-5 justify-between">
        <p>Discount</p>
        <p className="text-green-700">-Rs 6000</p>
      </div>
      <div className="flex px-5 justify-between">
        <p>Delivery Charges</p>
        <p>
          {" "}
          <span className="line-through">Rs 1700</span> <span>Free</span>
        </p>
      </div>
      <hr className="mx-5" />
      <div className="flex px-5 justify-between">
        <p className="text-xl">Total Amount</p>
        <p>Rs 4000</p>
      </div>
      <hr className="mx-5" />
      <p className="text-green-700 px-5">You will save ₹6,000 on this order</p>
    </div>
  );
};

export default CartProductLayout;
