import React, { useState } from "react";

import { FaChevronUp } from "react-icons/fa";

const QuestionsBox = (props) => {
  // State to toggle visibility
  const [isVisible, setIsVisible] = useState(props.isExpend);

  // Toggle visibility when the arrow is clicked
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="px-8">
      <div className="w-full mt-4 bg-[#F5F2EB] ">
        <div className="flex justify-between items-center bg-transparent border rounded-md">
          <p className="bg-[#F5F2EB] p-4">{props.que}</p>
          {/* Arrow button toggles visibility */}
          <FaChevronUp
            className={`mx-6 cursor-pointer ${
              isVisible ? "rotate-0" : "rotate-180"
            }`}
            onClick={toggleVisibility}
          />
        </div>
        {/* Show or hide the section based on isVisible */}
        {isVisible && (
          <div className="border p-6 bg-transparent rounded-b-md">
            <textarea
              rows="3"
              placeholder="Type in your answer here..."
              className="box-border border px-2 py-1 w-full outline-none rounded-md shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsBox;
