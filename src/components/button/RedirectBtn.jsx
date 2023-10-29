import React from "react";
import { Icon } from "@iconify/react";

const RedirectBtn = ({ link }) => {
  return (
    <a href={link} className="h-5 w-5">
      <Icon
        icon={`material-symbols:arrow-right`}
        fontSize={25}
        className="cursor-pointer bg-blue-700 text-white rounded-full"
      />
    </a>
  );
};

export default RedirectBtn;
