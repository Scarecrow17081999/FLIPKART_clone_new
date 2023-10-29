import React, { useEffect, useRef, useState } from "react";
import CartHeader from "../layouts/CartHeader";
import CartProductLayout from "../layouts/CartProductLayout";
import CartLeftContainer from "../components/cart/CartLeftContainer";

const Cart = () => {
  const [items, setItems] = useState([0]);
  const [cartOrGrocery, setCartOrGrocery] = useState(true);
  const cartRef = useRef(null);
  const groceryRef = useRef(null);
  const changeMenu = () => {
    setCartOrGrocery(() => !cartOrGrocery);
  };
  useEffect(() => {
    if (items.length > 0) {
      setCartOrGrocery(false);
      return () => {};
    }
    if (cartOrGrocery) {
      cartRef.current.classList.add("flipkartOrGroceryStyle");
      cartRef.current.classList.remove("flipkartOrGroceryStyleBorder");
      groceryRef.current.classList.remove("flipkartOrGroceryStyle");
      groceryRef.current.classList.add("flipkartOrGroceryStyleBorder");
    } else {
      cartRef.current.classList.remove("flipkartOrGroceryStyle");
      cartRef.current.classList.add("flipkartOrGroceryStyleBorder");
      groceryRef.current.classList.add("flipkartOrGroceryStyle");
      groceryRef.current.classList.remove("flipkartOrGroceryStyleBorder");
    }
  }, [cartOrGrocery]);
  return (
    <div className="bg-slate-200 w-full h-screen">
      <CartHeader />
      <div
        className={`bg-slate-200 cartBody w-full h-full ${
          items.length == 0 ? "flex" : "flex-col"
        } justify-center items-center`}
      >
        {items.length == 0 ? (
          <EmptyPage
            cartRef={cartRef}
            groceryRef={groceryRef}
            changeMenu={changeMenu}
          />
        ) : (
          <CartProductLayout items={items}>
            <CartLeftContainer />
          </CartProductLayout>
        )}
      </div>
    </div>
  );
};
const EmptyPage = ({ cartRef, groceryRef, changeMenu }) => (
  <div className=" w-10/12 h-3/4 mt-20 flex flex-col bg-slate-200">
    <div className="flex h-16 bg-white justify-evenly">
      <div
        ref={cartRef}
        onClick={changeMenu}
        className="cart w-1/4 h-full flex items-center justify-center cursor-pointer"
      >
        Flipkart
      </div>
      <div
        ref={groceryRef}
        onClick={changeMenu}
        className="grocery w-1/4 h-full flex items-center justify-center cursor-pointer"
      >
        {" "}
        Grocery
      </div>
    </div>
    <div className="h-80 mt-2 bg-white flex flex-col items-center justify-center space-y-2">
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        alt=""
        className="w-1/6"
      />
      <p className="text-xl font-medium">Missing Cart items?</p>
      <p>Login to see the items you added previously</p>
      <button className="bg-orange-600 px-12 py-3 text-lg text-white rounded-sm hover:bg-orange-700">
        Login
      </button>
    </div>
  </div>
);

export default Cart;
