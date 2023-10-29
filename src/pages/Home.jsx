import React from "react";
import Header from "../layouts/Header";
import PreHeaderImage1 from "../components/preHeader/PreHeaderImage1";
import Carousel from "react-material-ui-carousel";
import {
  preHeader,
  carousel,
  banner1Products,
  banner2Products,
  banner3Products,
  banner4Products,
  banner5Products,
  banner6Products,
} from "../../data.json";
import { Paper } from "@mui/material";
import BannerCard from "../components/banners/BannerCard";
import BannerGridCard from "../components/banners/BannerGridCard";
import Footer from "../layouts/Footer";
import MobileFooter from "../components/mobile/Footer";
import PreFooter from "../layouts/PreFooter";
import { bannerItems } from "../../data.json";
const Home = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="my-4 mx-4 pt-14 space-y-4 ">
        <div className="h-1/5 bg-white py-5 mt-4 px-10 flex items-center justify-between md:hidden sm:hidden lg:flex ">
          {preHeader.map((product, i) => (
            <PreHeaderImage1
              key={i}
              items={bannerItems[i]}
              product={product}
              position={i + 1}
            />
          ))}
        </div>
        <Carousel
          swipe={true}
          indicatorContainerProps={{
            style: { display: "none" },
          }}
          navButtonsAlwaysVisible={true}
          animation="slide"
          interval={"3000"}
          fullHeightHover={true}
          autoPlay={true}
        >
          {carousel.map((product, i) => (
            <Paper className="h-full w-full z-0">
              <img src={product} alt="" />
            </Paper>
          ))}
        </Carousel>
        <BannerCard width="full" products={banner1Products} />
        <BannerCard width="full" products={banner2Products} />
        <BannerCard width="full" products={banner3Products} />

        <div className="m-auto grid lg:grid-cols-3 md:grid-flow-col-1 sm:grid-flow-col-1  gap-4">
          <BannerGridCard products={banner4Products} />
          <BannerGridCard products={banner5Products} />
          <BannerGridCard products={banner6Products} />
        </div>
        <div className=" sm:w-full md:w-full grid lg:grid-cols-3 md:grid-flow-col-1 sm:grid-flow-col-1  gap-4 w-full ">
          <BannerGridCard products={banner4Products} />
          <BannerGridCard products={banner5Products} />
          <img
            style={{ height: "650px" }}
            className="w-full h-full object-cover "
            src="https://rukminim1.flixcart.com/www/530/770/promos/22/05/2023/44d98c6b-16de-4759-a3c4-9d6412ad8bfa.jpg?q=80"
            alt=""
          />
        </div>
      </div>
      <PreFooter />
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default Home;
