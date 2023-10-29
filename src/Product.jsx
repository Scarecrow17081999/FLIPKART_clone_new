import React from "react";

const Product = ({ product }) => {
  // Assuming 'product' is an object containing product details
  const { name, description, price, imageURL } = product;

  return (
    <div className="product-detail">
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default Product;

import React, { useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";

// TODO: dynamic button text and items
const PopupNavItem = () => {
  const timerRef = useRef();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // menu list pops up automatically when cursor hovers over the button，
  const btnMouseEnterEvent = () => {
    setIsOpenMenu(true);
  };

  //,and vice versa，
  const btnMouseLeaveEvent = () => {
    // async
    timerRef.current = window.setTimeout(() => {
      setIsOpenMenu(false);
    }, 150);
  };

  // when the cursor moves away from the button but entering the menu list,the menu list stays open
  const menuListMouseEnterEvent = () => {
    // when entered, the timer has been cleared
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setIsOpenMenu(true);
  };
  // finally, when the cursor moves away from the menu list, menu list closes
  const menuListMouseLeaveEvent = () => {
    setIsOpenMenu(false);
  };

  return (
    <Menu isOpen={isOpenMenu} id={1}>
      <MenuButton
        as={Button}
        variant="solid"
        colorScheme="teal"
        onMouseEnter={btnMouseEnterEvent}
        onMouseLeave={btnMouseLeaveEvent}
      >
        Hover Me
      </MenuButton>
      <MenuList
        onMouseEnter={menuListMouseEnterEvent}
        onMouseLeave={menuListMouseLeaveEvent}
      >
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

// export default PopupNavItem;
