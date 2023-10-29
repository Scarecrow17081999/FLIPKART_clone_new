import React from "react";
import { Icon } from "@iconify/react";
const menuItems = ["Become a Member", "Mens", "Women", "Kids", "Sign In"];
const Sidebar = ({ sidebar, hidesidebar }) => {
  return (
    <div
      ref={sidebar}
      className="absolute w-80 z-50 h-screen right-0 top-0 bottom-0 bg-white sidebarMenu p-5"
    >
      <Icon
        icon="gridicons:cross"
        className="ml-auto"
        fontSize={20}
        onClick={() => hidesidebar()}
      />
      {menuItems.map((item, i) => (
        <div key={i} className="p-3">
          <p className="text-lg font-semibold">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
