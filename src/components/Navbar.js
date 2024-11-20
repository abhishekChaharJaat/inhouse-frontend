import React from "react";
import { IoMdHome } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiFolderMinus } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import Tabs from "./Tabs";
const Navbar = () => {
  return (
    <div className="fixed w-24 h-full left-0 top-0 bg-white shadow-md">
      <nav className="flex flex-col h-full justify-between p-2 ">
        <div className="w-full flex flex-col justify-center items-center ">
          <p className="text-xs py-2">
            IN<span className="text-green-400">|</span>HOUSE
          </p>
          <span className="w-5/6 border px-2 mb-4 "></span>
          <Tabs
            icon={
              <IoMdHome className=" text-4xl p-1 hover:bg-gray-200 rounded-md" />
            }
            label="Home"
          />
          <Tabs
            icon={
              <IoMdAdd className=" text-4xl p-1 hover:bg-gray-200 rounded-md" />
            }
            label="New Chat"
          />
          <Tabs
            icon={
              <LuHistory className=" text-4xl p-1 hover:bg-gray-200 rounded-md" />
            }
            label="Histoy"
          />
          <Tabs
            icon={
              <IoDocumentTextOutline className=" text-4xl p-1 hover:bg-gray-200 rounded-md" />
            }
            label="Documents"
          />
          <Tabs
            icon={
              <FiFolderMinus className=" text-4xl p-1 hover:bg-gray-200 rounded-md" />
            }
            label="Templets"
          />

          <Tabs
            icon={
              <FiSettings className=" text-4xl p-1 hover:bg-gray-200 rounded-md" />
            }
            label="Settings"
          />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <span className="w-5/6 border px-2 mb-4 "></span>
          <Tabs
            icon={
              <LuUser2 className=" text-4xl p-1 hover:bg-gray-200 rounded-md" />
            }
            label="Profile"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
