import { Icon } from "@iconify/react";
import React from "react";

const CarouselBtn = ({ direction }) => {
  return (
    <div className="w-10 h-20 bg-white flex justify-center items-center rounded-lg cursor-pointer">
      <Icon
        icon={`tabler:arrow-${direction}`}
        fontSize={20}
        className="hover:text-gray-600"
      />
    </div>
  );
};

export default CarouselBtn;
