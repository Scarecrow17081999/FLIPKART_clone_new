import React from "react";
import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

const ProductDropdown = ({ items, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Menu isLazy>
        <MenuButton onMouseEnter={onOpen}>{children}</MenuButton>
        <MenuList style={{ borderRadius: "0" }}>
          {items &&
            items.map((item) => (
              <MenuItem
                className="z-50"
                style={{ fontSize: "0.8rem" }}
                key={item}
              >
                {item}
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
};

export default ProductDropdown;
