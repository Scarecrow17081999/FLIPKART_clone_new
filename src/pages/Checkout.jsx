import React from "react";
import CartProductLayout from "../layouts/CartProductLayout";
import CartHeader from "../layouts/CartHeader";
import CheckoutLeftContainer from "../components/checkout/CheckoutLeftContainer";

const Checkout = () => {
  return (
    <div className="bg-slate-200 w-full h-screen">
      <CartHeader />
      <div
        className={`bg-slate-200 cartBody w-full h-full  justify-center items-center`}
      >
        <CartProductLayout>
          <CheckoutLeftContainer />
        </CartProductLayout>
      </div>
    </div>
  );
};

export default Checkout;
