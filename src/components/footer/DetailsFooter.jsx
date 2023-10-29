import React from "react";

const DetailsFooter = ({ data }) => {
  const { title, details } = data;
  return (
    <div className="mb-7">
      <p className="text-lg mb-4 text-gray-200">{title}</p>
      <ul className="text-sm text-gray-300">
        {details.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsFooter;
