import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Sidebar from "../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

const Header = () => {
  const sidebar = useRef("");

  useEffect(() => {
    sidebar.current.classList.add("hideSideBar");
  }, []);
  const handleSidebarMovement = () => {
    sidebar.current.classList.remove("hideSideBar");
    sidebar.current.classList.add("showSideBar");
  };
  const handeHideSidebar = () => {
    sidebar.current.classList.add("hideSideBar");
    sidebar.current.classList.remove("showSideBar");
  };
  // Sidebar things starts here

  return (
    <div className="h-16 w-full bg-white flex justify-between items-center fixed top-0 z-50">
      <Sidebar hidesidebar={handeHideSidebar} sidebar={sidebar} />
      <div>
        <a href="/">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
            alt=""
          />
          <div className="italic text-sm ml-16 flex items-center">
            Explore{" "}
            <span className="flex items-center ml-1">
              Plus{" "}
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg"
                alt=""
                className="ml-1"
              />
            </span>
          </div>
        </a>
      </div>
      <div>
        <Icon
          icon="iconamoon:menu-burger-horizontal"
          className="mr-8 lg:hidden"
          fontSize={30}
          onClick={handleSidebarMovement}
        />
      </div>
      <div
        className=" mediaquery rounded-lg p-1 grow ml-6  md:hidden   lg:flex"
        style={{ backgroundColor: "#f0f5ff" }}
      >
        <div className="flex items-center space-x-2 w-full">
          <Icon icon="iconamoon:search-thin" color="#ccc" fontSize={30} />
          <input
            type="text"
            placeholder="Search For Products, Brands and More"
            className="w-full h-full text-black text-lg"
            style={{ backgroundColor: "#f0f5ff" }}
          />
        </div>
      </div>

      <div
        style={{ width: "40rem" }}
        className=" mediaquery flex justify-between items-center px-8 md:hidden   lg:flex"
      >
        {" "}
        <div className="flex items-center cursor-pointer">
          <Icon
            icon="circum:shop"
            color="black"
            className="mr-3"
            fontSize={30}
          />
          <p className="text-lg">Become a Seller</p>
        </div>
        {/* Sign In Dropdown starts here  */}
        {/* <div className="flex items-center cursor-pointer hover:bg-blue-600 rounded-md">
          <Icon icon="ph:user" color="black" className="mr-3" fontSize={30} />
          <p className="text-lg">Sign In</p>
        </div> */}
        <DropDown />
        {/* Sign In Dropdown ends here  */}
        <Link to={"/cart"} className="flex items-center cursor-pointer">
          <Icon
            icon="ion:cart-outline"
            color="black"
            className="mr-3"
            fontSize={30}
          />
          <p className="text-lg">Cart</p>
        </Link>
        <div className="cursor-pointer hover:bg-gray-100 p-3 border border-white rounded-md hover:border-gray-300 transition">
          <Icon icon="pepicons-pop:dots-y" color="black" />
        </div>
      </div>
    </div>
  );
};

const DropDown = ({ items }) => (
  <>
    <Link to={"/auth"}>
      <div className="flex items-center cursor-pointer hover:bg-blue-600 rounded-md p-1">
        <Icon icon="ph:user" color="black" className="mr-3" fontSize={30} />
        <p className="text-lg">Sign In</p>
      </div>
    </Link>
  </>
);

export default Header;
