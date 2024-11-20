import React from "react";

import { FaArrowRight } from "react-icons/fa6";
const Templets = (props) => {
  const { logo, headText, descText, btnText, fun } = props;
  return (
    <div className="w-96 h-60 bg-white shadow-sm border border-gray-100 rounded-xl p-4 box-border flex flex-col justify-between items-start">
      <div className="w-full  box-border bg-white">
        <img src={logo} alt="document" className="w-18" />
        <p className="text-md font-medium pt-3">{headText}</p>
        <p className="text-sm">{descText}</p>
      </div>
      <div
        className="flex justify-center items-center gap-2 py-2 cursor-pointer"
        onClick={fun}
      >
        <p className="text-md font-medium">{btnText}</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Templets;
