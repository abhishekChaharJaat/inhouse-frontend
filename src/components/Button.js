import React from "react";

const Button = (props) => {
  const { text, className } = props;
  return (
    <div
      className={`border-2 border-gray-200 py-2 px-3 w-fit rounded-full text-xs cursor-pointer active:scale-90 hover:bg-white ${className}`}
    >
      {text}
    </div>
  );
};

export default Button;
