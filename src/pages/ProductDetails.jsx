import React, { useEffect } from "react";
import Header from "../layouts/Header";
import PreHeaderImage2 from "../components/preHeader/PreHeader2";
import { preHeader2 } from "../../data.json";
import { Icon } from "@iconify/react";
import { Breadcrumbs, Link, Paper, Typography } from "@mui/material";
import Footer from "../layouts/Footer";
import ProductPreFooter from "../layouts/ProductPreFooter";
// import "./ProductDetails.module.css";
import Carousel from "react-material-ui-carousel";
const ProductDetails = () => {
  const carousel = [
    "https://rukminim2.flixcart.com/image/416/416/klgx0280/printer/y/d/k/g2012-canon-original-imagyh8sqwuqzk7y.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/416/416/klgx0280/printer/y/d/k/g2012-canon-original-imagyh8sqwuqzk7y.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/416/416/klgx0280/printer/y/d/k/g2012-canon-original-imagyh8sqwuqzk7y.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/416/416/klgx0280/printer/y/d/k/g2012-canon-original-imagyh8sqwuqzk7y.jpeg?q=70",
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="w-full h-full relative">
      <Header />
      <div className="h-1/5 bg-white py-5 mt-16  px-10 flex items-center justify-between md:hidden sm:hidden lg:flex border">
        {preHeader2.map((title, i) => (
          <PreHeaderImage2 key={i} title={title} position={i + 1} />
        ))}
      </div>
      {/* details section  */}
      <div className="bg-white h-full mx-7 lg:flex rounded-sm sm:mt-10 md:mt-16 lg:mt-0">
        {/* image section  */}
        <div className="sm:full md:full lg:w-5/12 h-full flex sticky top-0">
          <div className="sm:hidden md:hidden lg:flex w-1/6 h-96 p-5 mr-3 flex flex-col justify-between">
            <div className="h-20 w-20 border flex items-center justify-center">
              <img
                src="https://rukminim2.flixcart.com/image/128/128/kq5iykw0/printer/l/i/q/g2012-canon-original-imag48y9fzysmdjx.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="h-20 w-20 border flex items-center justify-center">
              <img
                src="https://rukminim2.flixcart.com/image/128/128/kq5iykw0/printer/l/i/q/g2012-canon-original-imag48y9fzysmdjx.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="h-20 w-20 border flex items-center justify-center">
              <img
                src="https://rukminim2.flixcart.com/image/128/128/kq5iykw0/printer/l/i/q/g2012-canon-original-imag48y9fzysmdjx.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="h-20 w-20 border flex items-center justify-center">
              <img
                src="https://rukminim2.flixcart.com/image/128/128/kq5iykw0/printer/l/i/q/g2012-canon-original-imag48y9fzysmdjx.jpeg?q=70"
                alt=""
              />
            </div>
          </div>
          <div className="p-5 h-96 flex flex-col justify-between lg:w-5/6 sm:full md:w-full my-5 ">
            <div className="w-full h-5/6 lg:hidden sm:block md:block p-5 ">
              <Carousel
                style={{ height: "1000px" }}
                swipe={true}
                indicatorContainerProps={{ style: { display: "none" } }}
                navButtonsAlwaysVisible={true}
                animation="slide"
                interval={"3000"}
                fullHeightHover={true}
                autoPlay={true}
              >
                {carousel.map((product, i) => (
                  <Paper key={i} className="h-full w-full">
                    <img src={product} alt="" className="h-full w-full" />
                  </Paper>
                ))}
              </Carousel>
            </div>
            <div className="lg:flex flex-col  items-center justify-between border h-5/6 p-5 md:hidden sm:hidden ">
              <div className="w-full flex items-center justify-between ">
                <p className="capitalize border-x-fuchsia-50 border px-2 bg-black text-white rounded-md text-sm">
                  BESTSELLER
                </p>
                <Icon
                  icon="solar:heart-bold"
                  color="#ccc"
                  className="border p-2  rounded-full box-content cursor-pointer"
                  fontSize={20}
                />
              </div>
              <img
                src="https://rukminim2.flixcart.com/image/416/416/klgx0280/printer/y/d/k/g2012-canon-original-imagyh8sqwuqzk7y.jpeg?q=70"
                alt="product Image"
                className=""
              />
            </div>
            <div className="flex items-center justify-between h-1/6 space-x-2">
              <button className="bg-gray-500 p-3 w-1/2 rounded-sm flex items-center text-white justify-center sm:hidden md:hidden lg:flex">
                <Icon
                  className="mr-3 "
                  icon="bytesize:cart"
                  color="white"
                  fontSize={25}
                />{" "}
                Add To Cart
              </button>
              <button
                className="bg-gray-500 p-3 w-1/2 rounded-sm flex items-center text-white justify-center sm:hidden md:hidden lg:flex
              "
              >
                <Icon
                  className="mr-3 "
                  icon="basil:lightning-outline"
                  color="white"
                  fontSize={25}
                />{" "}
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* Product details  */}
        <div className="sm:full md:full lg:w-7/12 h-full p-5 flex flex-col space-y-2 md:mt-10">
          <div role="presentation">
            <Breadcrumbs
              maxItems={2}
              aria-label="breadcrumb"
              style={{ fontSize: "0.8rem" }}
            >
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="#">
                Catalog
              </Link>
              <Link underline="hover" color="inherit" href="#">
                ELectrical Appliances
              </Link>
              <Link underline="hover" color="inherit" href="#">
                Printer
              </Link>
              <Typography
                style={{ fontSize: "0.8rem" }}
                color="inherit"
                className="text-sm"
              >
                Canon G2012 Multi-function Color Inkjet Printer (Color Page
                Cost: 0.32 Rs. | Black Page Cost: 0.09 Rs.) (Black, Ink Tank, 2
                Ink Bottles Included)
              </Typography>
            </Breadcrumbs>
          </div>
          <div className="w-full text-lg">
            <p>
              Canon G2012 Multi-function Color Inkjet Printer (Color Page Cost:
              0.32 Rs. | Black Page Cost: 0.09 Rs.) (Black, Ink Tank, 2 Ink
              Bottles Included)
            </p>
          </div>
          <div className="flex space-x-3 items-center">
            <div className="flex items-center justify-center space-x-1 bg-lime-700 rounded-md px-1 py-0">
              <p className="text-white text-sm">4.5</p>
              <Icon
                fontSize={20}
                icon="material-symbols:star"
                color="#fff"
                className="mb-1"
              />
            </div>
            <p className="text-gray-500 text-sm">
              17,252 Ratings & 2,044 Reviews
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <h2 className="text-3xl font-medium">Rs 12,999</h2>
            <p className="line-through text-gray-500">Rs 16,990</p>
            <p className="text-lime-700">20% off</p>
          </div>
          <img
            src="https://rukminim2.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50"
            alt=""
            className="w-1/2"
          />
          <div
            style={{ marginTop: "3rem" }}
            className="item-description w-full flex flex-col space-y-3"
          >
            <div className="w-full flex">
              <p className="text-gray-500">Warranty</p>
              <p>1 Year Warranty</p>
            </div>
            <div className="w-full flex items-center">
              <p className="text-gray-500">Interface Support </p>
              <div className="flex space-x-4">
                <p className="border border-black p-2 rounded-sm cursor-pointer">
                  USB
                </p>{" "}
                <p className="border border-black p-2 rounded-sm cursor-pointer">
                  WIFI
                </p>
              </div>
            </div>
            <div className="w-full flex ">
              <p className="text-gray-500">Seller</p>
              <div className="">
                <p className="text-blue-400 font-medium">BUZZINDIA</p>{" "}
                <ul className="list-disc ml-5 my-2 ">
                  <li>7 Days Service Center Replacement/Repair</li>
                  <li>GST invoice available</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex ">
              <p className="text-gray-500">Description </p>
              <div className="flex space-x-4">
                <p className=" p-2">
                  Combining efficient performance with ease of use, the Canon
                  PIXMA G2012 Ink Tank Printer is an excellent addition to your
                  home or workplace. It boasts an exceptional capacity for
                  high-volume printing, copying, and scanning, providing you
                  with a smooth and efficient performance. In addition, with its
                  inbuilt ink tank system and compact body, this printer makes
                  monitoring ink levels and refilling a breeze. Moreover, its
                  intuitive up to 3.048 cm (1.2) panel design makes producing
                  multiple copies or scans hassle-free.
                </p>{" "}
              </div>
            </div>
          </div>
          {/* Description  */}
          <div className="w-full border rounded-md ">
            <h1 className="text-2xl border p-5 font-medium border-t-0 border-l-0 border-r-0">
              Product Description
            </h1>
            <div className="p-5 flex">
              <div className="lg:w-4/6  md:w-full sm:w-full">
                {" "}
                <h1 className="text-xl font-medium">Optimal Functionality</h1>
                <p className="mt-3">
                  Thanks to its high-volume and optimal printing, copying, and
                  scanning, the Canon PIXMA G2012 Ink Tank Printer offers smooth
                  and efficient performance.
                </p>
              </div>
              <div className="lg:w-2/6 md:w-full sm:w-full">
                <img
                  src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/ec4d2527cc6a4849b1952f01a3e1c0a9_1879813933c_G2012.jpg.jpeg?q=90"
                  alt=""
                />
              </div>
            </div>
            <hr />
            <div className="p-5 flex">
              <div className="lg:w-2/6 md:w-full sm:w-full">
                <img
                  src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/622c8c6261fa413cbe879b00493f29e3_1879812c598_integratedInkTankSystem.jpg.jpeg?q=90"
                  alt=""
                />
              </div>

              <div className="lg:w-4/6 sm:w-full md:w-full">
                <p className="text-l font-medium">Inbuilt Ink Tank System</p>
                <p className="mt-3">
                  Sporting an integrated ink tank system, this printer features
                  a compact body. And, these ink tanks are highly visible,
                  making it easy to monitor ink levels and plan refills
                  accordingly.
                </p>
              </div>
            </div>
            <hr />
            <div className="p-5">
              <a className="text-l text-blue-700" href="">
                View All Features
              </a>
            </div>
          </div>
          {/* Specification  */}
          <div className="w-full border rounded-md ">
            <h1 className="text-2xl border p-5 font-medium border-t-0 border-l-0 border-r-0">
              Specification
            </h1>
            <div
              style={{ marginTop: "3rem" }}
              className="item-specifications w-full flex flex-col space-y-3 p-5"
            >
              <div className="w-full flex">
                <p className="text-gray-500">Printing Method</p>
                <p>Inkjet</p>
              </div>
              <div className="w-full flex items-center">
                <p className="text-gray-500">Type</p>
                <p>Multi FUnction</p>
              </div>
              <div className="w-full flex ">
                <p className="text-gray-500">Model</p>
                <p>G 2012</p>
              </div>
              <div className="w-full flex ">
                <p className="text-gray-500">Output </p>
                <p>Color</p>
              </div>
            </div>
            <hr />
            <div className="p-5">
              <a className="text-l text-blue-700" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* details section  */}
      <ProductPreFooter />
      <Footer />
    </div>
  );
};

export default ProductDetails;
