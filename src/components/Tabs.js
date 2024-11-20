import React from "react";

const Tabs = (props) => {
  const { icon, label } = props;
  return (
    <a href="/">
      <div className="flex flex-col justify-center items-center m-1">
        {icon}
        <p className="text-[10px] py-1 font-medium">{label}</p>
      </div>
    </a>
  );
};

export default Tabs;
