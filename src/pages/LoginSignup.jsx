import React, { useState } from "react";
import CartHeader from "../layouts/CartHeader";
import PreHeaderImage2 from "../components/preHeader/PreHeader2";
import { preHeader2 } from "../../data.json";
import Footer from "../layouts/Footer";
import TextField from "@mui/material/TextField";
const LoginSignup = () => {
  const [loginSignUp, setLoginSignUp] = useState(false);

  const handleToggle = () => {
    setLoginSignUp(() => !loginSignUp);
  };
  return (
    <div className="w-full h-full">
      <CartHeader />
      <div className="h-1/5 bg-white py-5 mt-16  px-10 flex items-center justify-between md:hidden sm:hidden lg:flex border">
        {preHeader2.map((title, i) => (
          <PreHeaderImage2 key={i} title={title} position={i + 1} />
        ))}
      </div>
      <main className="h-full w-full py-3">
        <div
          style={{ height: "550px", width: "840px" }}
          className="flex m-auto"
        >
          <div style={{ backgroundColor: "#2f75f0" }} className="w-5/12 p-8">
            <p className="text-white text-2xl font-semibold">
              {loginSignUp ? " Looks like you're new here!" : "Login"}
            </p>
            <p className="text-white text-xl mt-4">
              {loginSignUp
                ? "Sign up with your mobile number to get started"
                : "Get access to your Orders, Wishlist and Recommendations"}
            </p>
          </div>
          <div className="w-7/12 bg-white p-5">
            {loginSignUp ? (
              <Login handleToggle={handleToggle} />
            ) : (
              <Signup handleToggle={handleToggle} />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Signup = ({ handleToggle }) => {
  return (
    <form className="flex flex-col h-full w-full" action="">
      <TextField
        className="p-4 w-full"
        id="standard-basic"
        label="Enter Email/Mobile Number"
        variant="standard"
      />
      <p className="text-xs mt-4">
        By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
      </p>
      <input
        type="submit"
        value={"Request OTP"}
        className="w-full p-4 bg-orange-600 text-white mt-4 cursor-pointer"
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          handleToggle();
        }}
        className="bg-white w-full p-4 mt-auto"
      >
        Existing User? Login
      </button>
    </form>
  );
};
const Login = ({ handleToggle }) => {
  return (
    <form className="flex flex-col space-y-4" action="">
      <TextField
        className="p-4 w-full"
        id="standard-basic"
        label="Enter Mobile Number"
        variant="standard"
      />
      <p className="text-xs">
        By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
      </p>
      <input
        type="submit"
        value="CONTINUE"
        className="w-full p-4 bg-orange-600 text-white cursor-pointer"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleToggle();
        }}
        className="bg-white border w-full p-4"
      >
        Existing User? Login
      </button>
    </form>
  );
};
export default LoginSignup;
