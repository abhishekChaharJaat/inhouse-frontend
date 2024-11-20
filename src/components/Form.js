import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdDone } from "react-icons/md";
import FormSteps from "./FormSteps";
import ShareDocument from "./ShareDocument";
import PrimaryParty from "./PrimaryParty";
import FinalTouch from "./FinalTouch";

const Form = (props) => {
  const steps = ["Share Document", "Primary Party Details", "Final Touch"];
  const [activeStep, setActiveStep] = useState(1);
  const closePopup = props.closePopup;
  const next = () => {
    if (activeStep >= steps.length) {
      closePopup();
    } else {
      setActiveStep((count) => count + 1);
    }
  };
  return (
    <div className="w-[900px] min-h-[90vh] max-h-screen overflow-y-auto bg-[rgb(247,246,242)] rounded-xl py-4">
      <div className="flex border-b-2 justify-between items-center px-8 pb-3">
        <div className="flex items-center mx-0 w-fit">
          <p className="text-md font-medium mr-4">Draft a new document</p>
          <MdDone className="text-[#686868]" />
          <span className="text-[#686868] text-xs">saved</span>
        </div>
        <RxCross2
          className="text-2xl m-0 cursor-pointer"
          onClick={closePopup}
        />
      </div>

      <div className=" relative flex px-4 py-4 justify-center items-center gap-0">
        <div className="w-[80%] absolute border-dashed border-gray-400 border-b-2 m-0"></div>
        {steps.map((step, idx) => {
          return (
            <FormSteps
              count={idx + 1}
              title={step}
              isActive={idx + 1 === activeStep}
            />
          );
        })}
      </div>
      {activeStep === 1 && <ShareDocument next={next} />}
      {activeStep === 2 && <PrimaryParty next={next} />}
      {activeStep === 3 && <FinalTouch next={next} />}
    </div>
  );
};

export default Form;
