import { Icon, TextField } from "@mui/material";
import React from "react";

const LoginOpenPanel = ({ OpenPanel2 }) => {
  return (
    <div>
      <div className="rounded-sm w-full p-2 bg-flipkart flex items-center">
        <div className="h-5 w-5 bg-white flipkart-blue flex justify-center items-center p-3">
          1
        </div>
        <div>
          <p className="ml-5 text-lg font-medium text-white">LOGIN</p>
        </div>
        {/* <button className="ml-auto border px-8 py-2 rounded-sm bg-white flipkart-blue">
          CHANGE
        </button> */}
      </div>
      <div className="flex space-x-9 bg-white p-5">
        <div className="w-1/2 space-y-5">
          <TextField
            className="p-4 w-full"
            id="standard-basic"
            label="Enter Mobile Number"
            variant="standard"
          />
          <p className="text-xs mt-4">
            By continuing, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </p>
          <button
            onClick={OpenPanel2}
            className="w-full p-4 bg-orange-600 text-white cursor-pointer"
          >
            CONTINUE
          </button>
        </div>
        <div className="w-1/2 space-y-5">
          <p className="text-xs text-gray-400">
            Advantages of our secure login
          </p>
          <div className="flex items-center text-sm space-x-3">
            <Icon icon="iconamoon:delivery-fill" color="#2f75f0" />
            <p>Easily Track Orders, Hassle free Returns</p>
          </div>
          <div className="flex items-center text-sm space-x-3">
            <Icon icon="mdi:bell" color="#2f75f0" />
            <p>Get Relevant Alerts and Recommendation</p>
          </div>
          <div className="flex items-center text-sm space-x-3">
            <Icon icon="ic:baseline-star" color="#2f75f0" />
            <p>Wishlist, Reviews, Ratings and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOpenPanel;
