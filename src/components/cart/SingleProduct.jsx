import React from "react";

const SingleProduct = ({ style, checkout }) => {
  return (
    <div div className={`border border-t-0 ${style}`}>
      <div className="w-full h-60  overflow-y-hidden p-5 flex">
        <div className="w-2/12 flex items-center">
          <img
            src="https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/z/v/e/-original-imagtyxbptwcpjta.jpeg?q=90"
            alt="cart product image"
          />
        </div>
        <div className="w-6/12 p-5 flex flex-col">
          <p className="text-sm font-medium hover:text-blue-500 transition-all">
            SAMSUNG Galaxy F14 5G (GOAT Green, 128 GB)
          </p>
          <p className="text-sm font-medium text-gray-500">4 GB RAM</p>
          <p className="text-sm font-medium text-gray-500 mt-5">
            Seller:MYTHANGLORYRetail
          </p>
          <div className="mt-auto flex items-center space-x-2">
            <p className="line-through text-gray-500 text-sm">Rs 17000</p>
            <p className="font-medium text-md">₹11,490</p>
            <p className="font-medium text-xs text-green-600">
              34% Off2 offers applied
            </p>
          </div>
        </div>
        <div className="w-4/12 text-xs pl-5 pt-5">
          Delivery by Tue Oct 17 |{" "}
          <span className="text-gray-500 line-through">₹40</span>
          <span className="text-green-600">Free</span>
        </div>
      </div>
      <div className="h-20 p-5 flex items-center ">
        <div className="w-30 flex space-x-3">
          <button className="border rounded-full w-8 h-8">+</button>
          <input
            type="text"
            className="w-10 border pl-4"
            value={1}
            disabled
            name=""
            id=""
          />
          <button className="border rounded-full w-8 h-8">-</button>
        </div>
        <div className="flex items space-x-5 font-medium ml-10">
          {!checkout && <button>SAVE FOR LATER</button>}
          <button>REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
