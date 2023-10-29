import React from "react";

const DetailsAddress = ({ data }) => {
  const { title, details } = data;
  return (
    <div className="mb-7">
      <p className="text-lg mb-4 text-gray-200">{title}</p>
      <p className="text-sm text-gray-300">{details}</p>
    </div>
  );
};

export default DetailsAddress;
