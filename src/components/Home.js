import React, { useState } from "react";
import logoDoc from "../images/document.svg";
import logo2 from "../images/logo2.svg";
import Templets from "./Templets";
import Button from "./Button";
import magicLogo from "../images/magic.svg";
import { IoAdd } from "react-icons/io5";
import { LuSendHorizonal } from "react-icons/lu";
import { RxDividerVertical } from "react-icons/rx";
import Popup from "./Popup";
const Home = () => {
  const [popup, setPopup] = useState(false);

  const displayPopup = () => {
    setPopup(true);
  };

  return (
    <>
      {popup && <Popup />}
      {<true /> && (
        <div className="w-full  pl-24 box-border bg-[#F7F6F2]">
          <div className=" px-16 py-8  flex justify-center items-center flex-col">
            <div className="text-center">
              <p className="text-2xl text-[#686868] p-2">Good morning, Ryan!</p>
              <p className="font-medium text-5xl p-2">
                How can we help you today?
              </p>
            </div>
            <div className="p-8 pb-20 w-full flex justify-center items-center gap-8  ">
              <Templets
                logo={logoDoc}
                headText="Drafr a new document"
                descText="Create AI powered legal documents by answering a few questions"
                btnText="Start Drafting"
                fun={displayPopup}
              />
              <Templets
                logo={logo2}
                headText="Review legal documents"
                descText="Get your legal documents reviewed and find answers to your questions"
                btnText="Start Reviewing"
              />
            </div>

            <div className="w-full p-2 flex gap-2 justify-center items-center bg-[#F7F6F2]">
              <Button text="I just hired a new employee. Where do I get started?" />
              <Button text="Documents I should request a new employee to submit" />
              <Button text="What all can you do?" />
              <div className="flex justify-center items-center gap-1">
                <img src={magicLogo} alt="logo" className="w-4" />
                <p className="text-sm text-purple-600 cursor-pointer">
                  Show more
                </p>
              </div>
            </div>
            {/*  Chet  */}
            <div className="h-16 w-full bg-white  flex justify-center items-center shadow-md rounded-2xl p-1 my-2 ">
              <input
                type="text"
                className="w-full h-full px-6 text-md outline-none"
                placeholder="Ask me any legal questions..."
              />
              <IoAdd className="text-4xl ml-2 cursor-pointer" />
              <RxDividerVertical className="text-4xl text-gray-300" />
              <LuSendHorizonal className="w-6 h-6 mr-4 cursor-pointer" />
            </div>
            <div className="m-2">
              <p className="text-[#7F8C8D] text-sm">
                AI can make mistakes. Verify details and consult an attorney
                where needed.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
