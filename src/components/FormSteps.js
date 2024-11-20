import React from "react";

const FormSteps = (props) => {
  const { count, title, isActive } = props;
  return (
    <>
      <div
        className={`z-10 flex w-fit p-2 gap-1 justify-center items-center rounded-md ${
          isActive ? "bg-[#F1EDDF]" : ""
        } `}
      >
        <p className="rounded-full border text-xs border-black w-4 h-4 flex justify-center items-center  bg-transparent m-0 p-0">
          {count}
        </p>
        <p className="bg-transparent text-sm">{title}</p>
      </div>
    </>
  );
};

export default FormSteps;
