import React from "react";

const Button = (props) => {
  return (
    <button
      className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
