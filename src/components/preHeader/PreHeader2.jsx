import React from "react";
import { Icon } from "@iconify/react";
const PreHeader2 = ({ title }) => {
  return (
    <div id="dropdownImage" className="cursor-pointer flex items-center ">
      <div className="flex items-center space-x-2 ">
        <p className="text-sm font-semibold text-center">{title}</p>
        <Icon icon="ep:arrow-down-bold" className="hover:rotate-180" />
      </div>
    </div>
  );
};

export default PreHeader2;
