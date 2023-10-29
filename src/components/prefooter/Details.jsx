import React from "react";

const Details = ({ heading, content }) => {
  return (
    <div className="mb-7">
      <p className="text-lg mb-4 text-gray-500">{heading}</p>
      <p className="text-sm text-gray-500">{content}</p>
    </div>
  );
};

export default Details;
