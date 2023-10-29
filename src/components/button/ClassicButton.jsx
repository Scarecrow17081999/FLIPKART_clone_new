import React from "react";

const ClassicButton = ({ style, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 bg-orange-600 hover:bg-orange-700 transition-all text-white rounded-sm ${style}`}
    >
      {text}
    </button>
  );
};

export default ClassicButton;
